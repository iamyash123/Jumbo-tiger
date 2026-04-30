'use client'
import React from 'react'
import { Breadcrumbs, Button } from '@heroui/react'
import Link from 'next/link'

const defaultContent = {
    eyebrow: 'Coliving',
    title: 'The PMS Built for How Coliving Actually Works',
    description: 'Traditional PMS tools were not designed for community-driven, flexible-lease, shared-space living. JumboTiger was. Get software that understands beds, not just units.',
}

const Banner = ({ content = defaultContent }) => {
    const {
        eyebrow,
        title,
        description,
    } = content

    return (
        <section className="relative overflow-hidden mt-62"
            style={{
                background:
                    "linear-gradient(0deg, rgba(0,0,0,0) 0%, #000 41.76%), #4F0FBD",
            }}>
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "6px 6px",
                }}
            />
            <div className="container relative z-4">
                <div className="border-x border-[rgba(255,255,255,0.20)]">
                    <Breadcrumbs
                        separator="/"
                        className="px-5 md:px-10 py-4 gap-2  [&_span]:text-white"
                    >
                        <Breadcrumbs.Item className='text-white gap-2 p-0 [&_a]:p-0' href="/">Home</Breadcrumbs.Item>
                        <Breadcrumbs.Item className='[&_span]:text-white [&_span]:font-semibold p-0'>Usecases</Breadcrumbs.Item>
                    </Breadcrumbs>
                    <div className="padding-80 px-5 md:px-10" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #000 86.57%), var(--background-Brand, #4F0FBD)' }}>
                        <div className='max-w-[850px] mx-auto text-center flex flex-col gap-10'>
                            <h6 className='bold white'>{eyebrow}</h6>
                            <div>
                                <h1 className="bold white">{title}</h1>
                                <p className="!mt-4 white">
                                    {description}
                                </p>
                            </div>
                            <div className='flex gap-4 flex-col items-center justify-center md:flex-row'>
                                <Link href={'/contact-us'} className='primary-btn large'>Book a Free demo</Link>
                                <Link href={'/modules'} className='outline-btn large w-fit !text-white'>Explore Modules</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
