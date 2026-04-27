'use client'

import { Button } from '@heroui/react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const tabs = [
    'Onboarding',
    'Resident Operation',
    'Financials',
    'Operations',
    'Resident Experience',
]

const moduleCards = {
    onboarding: [
        {
            title: 'Applications & Vetting',
            description:
                'Online application forms, automated review workflows, applicant scoring (1-10 rating system), status management (New, Medium, Approved, Rejected, Archived), team collaboration with notes, and one-click conversion to prospective resident.',
        },
        {
            title: 'New Resident Booking',
            description:
                'Digital booking flow with apartment selection, document upload (passport, national ID), tenancy contract generation with e-signatures, security deposit invoicing, payment tracking, and automated resident profile creation upon completion.',
        },
        {
            title: 'Move-In Process',
            description:
                'Pre-move-in checklists, digital inspection reports with room-by-room photo documentation, key and access card handover, WiFi credential provisioning, welcome communications, and automatic status update to Current Resident.',
        },
        {
            title: 'Notice & Move-Out',
            description:
                '30-day notice submission workflow, move-out inspection with photo comparison to move-in state, deduction calculation, final invoice generation, security deposit refund processing, and archival of resident records.',
        },
    ],
    residentOperations: [
        {
            title: 'Applications & Vetting',
            description:
                'Online application forms, automated review workflows, applicant scoring (1-10 rating system), status management (New, Medium, Approved, Rejected, Archived), team collaboration with notes, and one-click conversion to prospective resident.',
        },
        {
            title: 'New Resident Booking',
            description:
                'Digital booking flow with apartment selection, document upload (passport, national ID), tenancy contract generation with e-signatures, security deposit invoicing, payment tracking, and automated resident profile creation upon completion.',
        },
        {
            title: 'Move-In Process',
            description:
                'Pre-move-in checklists, digital inspection reports with room-by-room photo documentation, key and access card handover, WiFi credential provisioning, welcome communications, and automatic status update to Current Resident.',
        },
        {
            title: 'Notice & Move-Out',
            description:
                '30-day notice submission workflow, move-out inspection with photo comparison to move-in state, deduction calculation, final invoice generation, security deposit refund processing, and archival of resident records.',
        },
        {
            title: 'Notice & Move-Out',
            description:
                '30-day notice submission workflow, move-out inspection with photo comparison to move-in state, deduction calculation, final invoice generation, security deposit refund processing, and archival of resident records.',
        },
    ],
    financials: [
        {
            title: 'Applications & Vetting',
            description:
                'Online application forms, automated review workflows, applicant scoring (1-10 rating system), status management (New, Medium, Approved, Rejected, Archived), team collaboration with notes, and one-click conversion to prospective resident.',
        },
        {
            title: 'New Resident Booking',
            description:
                'Digital booking flow with apartment selection, document upload (passport, national ID), tenancy contract generation with e-signatures, security deposit invoicing, payment tracking, and automated resident profile creation upon completion.',
        },
        {
            title: 'Move-In Process',
            description:
                'Pre-move-in checklists, digital inspection reports with room-by-room photo documentation, key and access card handover, WiFi credential provisioning, welcome communications, and automatic status update to Current Resident.',
        },
    ],
    operations: [
        {
            title: 'Applications & Vetting',
            description:
                'Online application forms, automated review workflows, applicant scoring (1-10 rating system), status management (New, Medium, Approved, Rejected, Archived), team collaboration with notes, and one-click conversion to prospective resident.',
        },
        {
            title: 'New Resident Booking',
            description:
                'Digital booking flow with apartment selection, document upload (passport, national ID), tenancy contract generation with e-signatures, security deposit invoicing, payment tracking, and automated resident profile creation upon completion.',
        },
        {
            title: 'Move-In Process',
            description:
                'Pre-move-in checklists, digital inspection reports with room-by-room photo documentation, key and access card handover, WiFi credential provisioning, welcome communications, and automatic status update to Current Resident.',
        },
        {
            title: 'Notice & Move-Out',
            description:
                '30-day notice submission workflow, move-out inspection with photo comparison to move-in state, deduction calculation, final invoice generation, security deposit refund processing, and archival of resident records.',
        },
        {
            title: 'Notice & Move-Out',
            description:
                '30-day notice submission workflow, move-out inspection with photo comparison to move-in state, deduction calculation, final invoice generation, security deposit refund processing, and archival of resident records.',
        },
        {
            title: 'Notice & Move-Out',
            description:
                '30-day notice submission workflow, move-out inspection with photo comparison to move-in state, deduction calculation, final invoice generation, security deposit refund processing, and archival of resident records.',
        },
    ],
    residenceExperience: [
        {
            title: 'Applications & Vetting',
            description:
                'Online application forms, automated review workflows, applicant scoring (1-10 rating system), status management (New, Medium, Approved, Rejected, Archived), team collaboration with notes, and one-click conversion to prospective resident.',
        },
    ],
}

const sections = [
    {
        title: 'LEASING & ONBOARDING',
        subtitle: 'From Application to Move-In',
        cards: moduleCards.onboarding,
    },
    {
        title: 'RESIDENT OPERATIONS',
        subtitle: 'Day-to-Day Management',
        cards: moduleCards.residentOperations,
    },
    {
        title: 'FINANCIALS',
        subtitle: 'Money Management Made Simple',
        cards: moduleCards.financials,
    },
    {
        title: 'OPERATIONS',
        subtitle: 'Run Building Better',
        cards: moduleCards.operations,
    },
    {
        title: 'RESIDENT EXPERIENCE',
        subtitle: 'The App Your Residents Will Love',
        cards: moduleCards.residenceExperience,
    },
]

const ModuleCard = ({ title, description }) => {
    return (
        <article className="flex min-h-[214px] flex-col items-start justify-between gap-6 border border-[#E5E7EB] hover:bg-[#F3F4F6] p-5 lg:flex-row lg:items-end md:px-10 md:py-10">
            <div className="min-w-0 flex-1">
                <h6 className="">{title}</h6>
                <p className="!mt-4 grey">{description}</p>
            </div>
            <Link
                href={'/'}
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
