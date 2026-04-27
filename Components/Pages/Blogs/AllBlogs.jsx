'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const tabs = [
    'Onboarding',
    'Resident Operation',
    'Financials',
    'Operations',
    'Resident Experience',
]

const posts = [
    {
        category: 'Onboarding',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'draft',
    },
    {
        category: 'Onboarding',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'bubble',
    },
    {
        category: 'Onboarding',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'checklist',
    },
    {
        category: 'Resident Operation',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'curve',
    },
    {
        category: 'Resident Operation',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'profile',
    },
    {
        category: 'Financials',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'partners',
    },
    {
        category: 'Operations',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'shield',
    },
    {
        category: 'Operations',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'arrows',
    },
    {
        category: 'Resident Experience',
        title: 'Online application forms, automated review workflows,',
        date: 'April 16, 2026',
        art: 'pattern',
    },
]

const sections = tabs.map((tab) => ({
    title: tab,
    posts: posts.filter((post) => post.category === tab),
}))

const BlogArt = ({ type }) => {
    if (type === 'draft') {
        return (
            <div className="relative h-full overflow-hidden bg-[#07126E]">
                <div className="absolute bottom-0 left-0 h-[68%] w-[68%] bg-white" />
                <div className="absolute left-11 top-[58%] h-1 w-24 -translate-y-1/2 rounded-full bg-[#D1D5DB]" />
                <div className="absolute left-11 top-[65%] h-1 w-16 rounded-full bg-[#E5E7EB]" />
                <div className="absolute left-[48%] top-[21%] h-[72px] w-[112px] rounded-md bg-white shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
                    <div className="px-2 py-1">
                        <p className="text-[11px] font-semibold leading-none text-[#111827]">Draft Auto-save progress</p>
                    </div>
                </div>
                <div className="absolute right-12 top-9 h-5 w-5 border-r-2 border-t-2 border-white" />
                <div className="absolute right-20 top-7 h-4 w-0.5 bg-white" />
            </div>
        )
    }

    if (type === 'bubble') {
        return (
            <div className="relative h-full overflow-hidden bg-black">
                <div className="absolute -left-2 top-0 h-full w-[62%] rounded-full bg-[radial-gradient(circle_at_25%_25%,#ffb86c,#19c3a8_45%,#2258cc_85%)]" />
                <p className="absolute xs left-[42%] top-[48%] -translate-y-1/2 white">but no more</p>
                <div className="absolute right-0 top-0 grid h-full w-[45%] grid-cols-3 gap-3 p-0">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <span
                            key={index}
                            className={`aspect-square rounded-full ${index % 4 === 0 ? 'bg-[#EF4444]' : index % 4 === 1 ? 'bg-[#FBBF24]' : index % 4 === 2 ? 'bg-[#14B8A6]' : 'bg-[#1D4ED8]'}`}
                        />
                    ))}
                </div>
            </div>
        )
    }

    if (type === 'checklist') {
        return (
            <div className="relative h-full overflow-hidden bg-[linear-gradient(135deg,#FFC978,#FFE3B0_45%,#FF9A6C)]">
                <div className="absolute right-6 top-7 h-[120px] w-[210px] -rotate-1 rounded-xl bg-white shadow-[0_18px_45px_rgba(249,115,22,0.22)]" />
                <div className="absolute left-8 top-5 flex h-20 w-24 -rotate-6 items-center justify-center rounded-xl bg-[#A855F7] shadow-[0_22px_30px_rgba(168,85,247,0.34)]">
                    <span className="text-[42px] font-bold leading-none text-white">&#10003;</span>
                </div>
                <div className="absolute right-20 top-20 h-2 w-24 rounded-full bg-[#E9D5FF]" />
                <div className="absolute right-32 top-36 h-2 w-28 rounded-full bg-[#E9D5FF]" />
                <div className="absolute bottom-6 left-16 h-11 w-16 -rotate-3 rounded-lg bg-[#F3E8FF]" />
            </div>
        )
    }

    if (type === 'curve') {
        return (
            <div className="relative h-full overflow-hidden bg-[#EFF7F5]">
                <div className="absolute -left-5 top-6 h-40 w-48 rounded-full border-[42px] border-[#0EA5E9]" />
                <div className="absolute right-11 top-8 h-36 w-36 rounded-full bg-[#F4EEDB] shadow-[0_0_0_1px_rgba(15,23,42,0.05)]" />
                <div className="absolute left-[46%] top-[46%] h-5 w-5 rounded-full bg-[#0284C7]" />
                <div className="absolute left-[47%] top-[46%] h-1 w-28 -rotate-[34deg] bg-[#8DD4DD]" />
                <div className="absolute left-16 top-[43%] h-2 w-2 rounded-full bg-white ring-2 ring-[#0EA5E9]" />
                <div className="absolute right-24 top-10 h-2 w-2 rounded-full bg-white ring-2 ring-[#0EA5E9]" />
            </div>
        )
    }

    if (type === 'profile') {
        return (
            <div className="relative h-full overflow-hidden bg-[#EFF8FB]">
                <div className="absolute left-[33%] top-6 h-9 w-9 rounded-lg border border-[#38BDF8]" />
                <div className="absolute left-[40%] top-8 h-5 w-5 rounded-full bg-white shadow-md" />
                <div className="absolute bottom-7 left-20 h-24 w-20 rounded-md bg-white shadow-[0_18px_35px_rgba(14,165,233,0.18)]">
                    <p className="p-2 text-[8px] font-semibold text-[#111827]">Staff Roster</p>
                    <div className="mx-2 mt-2 h-8 rounded bg-[#E0F2FE]" />
                    <div className="mx-2 mt-2 h-1 rounded bg-[#93C5FD]" />
                    <div className="mx-2 mt-2 h-1 rounded bg-[#93C5FD]" />
                </div>
                <div className="absolute bottom-6 right-20 h-32 w-36 rounded-lg bg-white shadow-[0_18px_45px_rgba(15,23,42,0.2)]">
                    <div className="h-6 rounded-t-lg bg-[#111827]" />
                    <div className="mx-4 mt-5 h-2 rounded bg-[#E5E7EB]" />
                    <div className="mx-4 mt-4 h-2 rounded bg-[#E5E7EB]" />
                    <div className="absolute bottom-0 left-0 right-0 h-6 rounded-b-lg bg-[#0EA5E9]" />
                </div>
            </div>
        )
    }

    if (type === 'partners') {
        return (
            <div className="flex h-full items-center justify-center gap-12 bg-[linear-gradient(135deg,#9DD5FF,#7EB7FF_55%,#C8D9FF)] text-[28px] font-medium text-white">
                <span>OpenAI</span>
                <span className="h-10 w-px bg-white/55" />
                <span>Microsoft</span>
            </div>
        )
    }

    if (type === 'shield') {
        return (
            <div className="relative h-full overflow-hidden bg-[#EAF2FF]">
                <div className="absolute left-1/2 top-1/2 h-28 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[42%] bg-[#4F8DFF] shadow-[0_28px_45px_rgba(37,99,235,0.25)]" />
                <div className="absolute left-1/2 top-1/2 h-16 w-12 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#2F63E9]">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">&#10003;</span>
                </div>
                <div className="absolute left-16 top-10 h-8 w-8 rounded bg-white shadow-md" />
                <div className="absolute right-16 top-14 h-8 w-8 rounded bg-white shadow-md" />
                <div className="absolute bottom-12 left-24 h-8 w-8 rounded bg-white shadow-md" />
            </div>
        )
    }

    if (type === 'arrows') {
        return (
            <div className="relative h-full overflow-hidden bg-[#F7F7F4]">
                <div className="absolute bottom-3 right-0 h-32 w-72 rounded-t-full border-[18px] border-b-0 border-[#35D07F]" />
                <div className="absolute left-12 top-20 h-12 w-36 -rotate-[-3deg] bg-[#152B62]" />
                <div className="absolute left-44 top-14 h-0 w-0 border-b-[44px] border-l-[44px] border-t-[44px] border-b-transparent border-l-[#152B62] border-t-transparent" />
                <div className="absolute left-1/2 top-0 h-full w-5 -translate-x-1/2 bg-[#299955]" />
                <div className="absolute left-[48%] top-10 h-24 w-24 rotate-45 border-l-[28px] border-t-[28px] border-[#155E36]" />
            </div>
        )
    }

    return (
        <div className="grid h-full grid-cols-7 gap-4 overflow-hidden bg-[#061E83] p-0">
            {Array.from({ length: 28 }).map((_, index) => (
                <span
                    key={index}
                    className={`h-16 rounded-b-full bg-[#0A7BFF] ${index % 3 === 0 ? 'rounded-t-full' : ''}`}
                />
            ))}
        </div>
    )
}

const BlogCard = ({ category, title, date, art }) => {
    return (
        <Link href={'/'} className="border border-[#E5E7EB] border-t-0 bg-white p-6 transition-colors duration-300 hover:bg-[#F3F4F6]">
            <div className="h-[260px] overflow-hidden">
                <BlogArt type={art} />
            </div>
            <div className="p-6">
                <p className="blue semibold small">{category}</p>
                <h6 className="bold mt-2! mb-6!">{title}</h6>
                <p className="small grey">{date}</p>
            </div>
        </Link>
    )
}

const BlogSection = ({ posts, sectionRef }) => {
    return (
        <section ref={sectionRef} className="scroll-mt-28 border-t border-[#E5E7EB]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <BlogCard key={`${post.category}-${post.art}-${index}`} {...post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const AllBlogs = () => {
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
            <div className="sticky top-0 xl:top-15.5 z-10">
                <div className="container">
                    <div className="overflow-x-auto scrollbar-hide border-x border-b border-[#E5E7EB] bg-white px-5 md:px-10">
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
                <BlogSection
                    key={section.title}
                    posts={section.posts}
                    sectionRef={(element) => {
                        sectionRefs.current[index] = element
                    }}
                />
            ))}
        </section>
    )
}

export default AllBlogs
