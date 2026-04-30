import React from 'react'
import ModuleCard from '@/Components/Common/ModuleCard'
import { modulesData } from '@/data/modulesData'
import Link from 'next/link'

const Modules = () => {

    const modules = Object.entries(modulesData).slice(0, 9).map(([slug, module]) => ({
        slug,
        image: module.banner?.cardImage?.startsWith('/')
            ? module.banner.cardImage
            : `/${module.banner?.cardImage || 'images/booking-card.svg'}`,
        title: module.banner?.title,
        description: module.banner?.description,
        link: `/modules/${slug}`,
    }))

    return (
        <section className='modules'>
            <div className="container">

                {/* Heading */}
                <div className="padding-80-40 border-x border-[#E5E7EB] px-5">
                    <h2 className="bold text-center">MODULES</h2>
                    <p className='!mt-3 large grey text-center'>
                        Everything You Need to Run Your Properties
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {modules.map((item) => (
                        <ModuleCard
                            key={item.slug}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </div>
                <div className="py-10 border-x border-[#E5E7EB] flex justify-center">
                    <Link href={'/modules'} className='primary-btn large'>
                        View All Modules
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Modules
