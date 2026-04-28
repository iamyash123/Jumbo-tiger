'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { modulesData } from '@/data/modulesData'

const tabs = [
    'Resident Lifecycle',
    'Revenue & Distribution',
    'Operations & Compliance',
    'Intelligence & Configuration',
]

const moduleGroups = {
    lifecycle: [
        'booking-onboarding',
        'document-management',
        'inventory-occupancy',
        'tenant-portal',
        'visitor-management',
        'community-events',
        'access-control',
        'facility-booking',
    ],
    revenue: [
        'payments-rent',
        'revenue-management',
        'utility-energy',
        'channel-manager',
        'lead-crm',
        'b2b-partners',
    ],
    operations: [
        'maintenance-work-orders',
        'housekeeping-facilities',
        'communications',
        'compliance-regulatory',
        'document-management',
    ],
    intelligence: [
        'ai-layer',
        'listing-website',
        'global-config',
        'integrations-hub',
    ],

}

const getModuleCards = (slugs) => slugs
    .map((slug) => {
        const moduleData = modulesData[slug]

        if (!moduleData) return null

        return {
            title: moduleData.banner?.title,
            description: moduleData.banner?.description,
            href: `/modules/${slug}`,
        }
    })
    .filter(Boolean)

const sections = [
    {
        title: 'Resident Lifecycle',
        subtitle: 'Modules covering the complete journey from first enquiry to move-out and beyond.',
        cards: getModuleCards(moduleGroups.lifecycle),
    },
    {
        title: 'Revenue & Distribution',
        subtitle: 'Maximize revenue, automate payments, and distribute your inventory worldwide.',
        cards: getModuleCards(moduleGroups.revenue),
    },
    {
        title: 'Operations & Compliance',
        subtitle: 'Keep your properties running smoothly and stay compliant across every jurisdiction.',
        cards: getModuleCards(moduleGroups.operations),
    },
    {
        title: 'Intelligence & Configuration',
        subtitle: 'AI-powered automation, direct bookings, and a connected tech ecosystem.',
        cards: getModuleCards(moduleGroups.intelligence),
    },
]

const ModuleCard = ({ title, description, href }) => {
    return (
        <article className="flex min-h-[214px] flex-col items-start justify-between gap-6 border border-[#E5E7EB] hover:bg-[#F3F4F6] p-5 lg:flex-row lg:items-end md:px-10 md:py-10">
            <div className="min-w-0 flex-1">
                <h6 className="">{title}</h6>
                <p className="!mt-4 grey">{description}</p>
            </div>
            <Link
                href={href}
                className="outline-btn"
            >
                Explore
            </Link>
        </article>
    )
}

const ModuleSection = ({ title, subtitle, cards, index, sectionRef }) => {
    const isSoft = index % 2 === 1

    return (
        <section
            id={index === 0 ? 'all-module' : undefined}
            ref={sectionRef}
            className={isSoft ? 'bg-[#F9FAFB] border-t border-[#E5E7EB] scroll-mt-28' : 'bg-white border-t border-[#E5E7EB] scroll-mt-28'}
        >
            <div className="container">
                <div className="border-x border-[#E5E7EB]">
                    <div className="px-5  md:px-10 padding-80-40">
                        <div className="max-w-[650px]">
                            <h2 className="bold text-[#111827]">{title}</h2>
                            <p className="!mt-3 large text-[#4B5563]">{subtitle}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {cards.map((card, cardIndex) => (
                            <ModuleCard key={`${title}-${card.title}-${cardIndex}`} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const AllModules = () => {
    const [activeTab, setActiveTab] = useState(0)
    const sectionRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (!visibleEntries.length) return

                const index = Number(visibleEntries[0].target.getAttribute('data-section-index'))
                if (!Number.isNaN(index)) {
                    setActiveTab(index)
                }
            },
            {
                root: null,
                rootMargin: '-88px 0px -45% 0px',
                threshold: [0.2, 0.35, 0.5, 0.7],
            }
        )

        sectionRefs.current.forEach((section, index) => {
            if (!section) return
            section.setAttribute('data-section-index', String(index))
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    const handleTabClick = (index) => {
        setActiveTab(index)

        const targetSection = sectionRefs.current[index]
        if (!targetSection) return

        const stickyOffset = 124
        const top = targetSection.getBoundingClientRect().top + window.scrollY - stickyOffset

        window.scrollTo({
            top,
            behavior: 'smooth',
        })
    }

    return (
        <section className="bg-white relative border-b border-[#E5E7EB]">
            <div className='sticky top-0 xl:top-15.5 z-10 '>
                <div className="container">
                    <div className="overflow-x-auto  scrollbar-hide border-x border-b border-[#E5E7EB] bg-white px-5 md:px-10">
                        <div className="flex min-w-max gap-6">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => handleTabClick(index)}
                                    className={`h-[62px] cursor-pointer border-b-4 text-[15px] font-semibold leading-[1.65] tracking-[0.15px] ${index === activeTab
                                        ? 'border-[#7E3CEF] text-[#4F0FBD]'
                                        : 'border-transparent text-[#4B5563]'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {sections.map((section, index) => (
                <ModuleSection
                    key={section.title}
                    index={index}
                    sectionRef={(element) => {
                        sectionRefs.current[index] = element
                    }}
                    {...section}
                />
            ))}
        </section>
    )
}

export default AllModules
