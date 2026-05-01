import React from 'react'
import Link from 'next/link';
import { modulesData } from '@/data/modulesData'
import Image from 'next/image';

const defaultContent = {
    heading: 'EXPLORE MORE',
    subtitle: 'Works With These Modules',
    items: [
        {
            title: "Inventory & Occupancy",
            desc: "Real-time availability feeds directly into the booking pipeline.",
            href: '/',
        },
        {
            title: "Payments & Rent",
            desc: "Deposit collection and first rent payment integrated into onboarding.",
            href: '/',
        },
        {
            title: "Tenant Portal",
            desc: "Residents access their welcome pack and community from day one.",
            href: '/',
        }
    ]
}
const ModuleMore = ({ content = defaultContent, currentSlug }) => {
    const { heading, subtitle } = content
    const moduleEntries = Object.entries(modulesData)
    const currentIndex = moduleEntries.findIndex(([slug]) => slug === currentSlug)
    const startIndex = currentIndex >= 0 ? currentIndex : -1
    const items = Array.from({ length: moduleEntries.length - 1 }, (_, index) => {
        const [slug, module] = moduleEntries[(startIndex + index + 1) % moduleEntries.length]

        return {
            title: module.banner?.title,
            stitle: module.banner?.cardDiscription,

            image: module.banner?.cardImage?.startsWith('/')
                ? module.banner.cardImage
                : `/${module.banner?.cardImage || 'images/booking-card.svg'}`,
            desc: module.banner?.description,
            href: `/modules/${slug}`,
        }
    }).slice(0, 3)

    return (
        <section>
            <div className="container">
                <div className="padding-80-40 border-x border-[#E5E7EB]">
                    <h2 className="bold text-center">{heading}</h2>
                    <p className="mt-3! text-center">{subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <div key={index} className='p-5 lg:p-10 border border-[#E5E7EB]'>
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    loading="lazy"
                                    className='object-cover rounded-2xl'
                                />
                            </div>
                            <div className='mt-6 lg:mt-10'>
                                <h6 className="semibold">{item.title}</h6>
                                <p className="!mt-4 grey">{item.stitle?.trim() || item.desc}</p>
                            </div>
                            <Link href={item.href || '/'} className='outline-btn w-fit mt-6'>Learn more</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ModuleMore
