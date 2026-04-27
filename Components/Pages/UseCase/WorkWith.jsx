import React from 'react'
import GradientStepMark from '@/Components/Common/Gradientstepmark'
import Link from 'next/link';
const defaultContent = {
    heading: 'Works With These Modules',
    items: [
    {
        title: "Coliving",
        desc: "Per-bed billing, community management, flexible stays, and shared space operations.",
        href: '/usecases/coliving',
    },
    {
        title: "Built to Rent",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation.",
        href: '/usecases/built-to-rent',
    },
    {
        title: "Flex Living",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation.",
        href: '/usecases/flex-living',
    }
    ],
}
const WorkWith = ({ content = defaultContent }) => {
    const { heading, items } = content
    return (
        <section>
            <div className="container">
                <div className="padding-80-40 border-x border-[#E5E7EB]">
                    <h2 className="bold text-center">{heading}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {items.map((item, index) => (
                        <div key={index} className='padding-80 px-5 lg:px-10 border border-[#E5E7EB]'>
                            <GradientStepMark />
                            <div className='mt-6 lg:mt-10'>
                                <h6 className="semibold">{item.title}</h6>
                                <p className="!mt-4 grey">{item.desc}</p>
                            </div>
                            <Link href={item.href || '/'} className='outline-btn w-fit mt-6'>Learn more</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkWith
