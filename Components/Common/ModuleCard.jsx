import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ModuleCard = ({ title, description, link, image }) => {
    return (
        <div className='p-5 lg:p-10 flex flex-col gap-10 border border-[#E5E7EB] hover:bg-[#F3F4F6] transition-all duration-500 ease-in-out'>

            <div className="relative w-full h-[200px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover rounded-2xl'
                />
            </div>

            <div>
                <h6 className="bold">{title}</h6>
                <p className="grey !mt-4">
                    {description}
                </p>
                <Link href={link || '/'} className='outline-btn mt-6'>
                    Learn more
                </Link>
            </div>
        </div>
    )
}

export default ModuleCard