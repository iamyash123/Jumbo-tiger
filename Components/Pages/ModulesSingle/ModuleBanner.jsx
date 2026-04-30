'use client'
import React from 'react'
import { Breadcrumbs } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import DynamicIconTile from '@/Components/Common/IconComponents/DynamicIconTile'

const defaultContent = {
    title: 'Booking & Onboarding',
    description:
        'From first enquiry to move-in day, automate the entire resident journey. Online applications, housemate matching, digital contracts, e-signatures, deposits, and move-in checklists in one seamless flow.',

    image: '/images/buildscale.webp',
}

const ModuleBanner = ({ content = defaultContent }) => {
    const {
        title,
        description,
        image,
    } = content

    return (
        <section className='mt-62' style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 31.45%, rgba(187, 148, 255, 0.48) 101.35%, rgba(187, 148, 255, 0.00) 109.25%), var(--background-secondary, #F9FAFB)'
        }}>
            <div className="container">
                <div className="border-x border-[#E5E7EB]">
                    <Breadcrumbs separator="/" className='px-5 md:px-10 py-4 border-b border-[#EDEDED]'>
                        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                        <Breadcrumbs.Item className='text-[#FFF] [&_span]:font-semibold'>Modules</Breadcrumbs.Item>
                    </Breadcrumbs>
                    <div className="padding-80 px-5 md:px-10" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 38.62%, rgba(227, 211, 255, 0.92) 80.39%, rgba(187, 148, 255, 0.80) 101.83%, rgba(187, 148, 255, 0.00) 113.34%)' }}>
                        <div className='max-w-[850px] mx-auto text-center flex flex-col gap-10'>

                            <div>
                                <h1 className="bold ">{title}</h1>
                                <p className="!mt-4 ">
                                    {description}
                                </p>
                            </div>
                            <div className='flex gap-4 flex-col justify-center md:flex-row'>
                                <Link href={'/contact-us'} className='primary-btn large'>Book a Demo</Link>
                                <Link href={'/modules'} className='outline-btn large w-fit'>All Modules</Link>
                            </div>
                        </div>
                        <div className="padding-80 mx-auto max-w-[950px] !pb-0">
                            <Image
                                src={image}
                                alt={title}
                                width={500}
                                height={400}
                                className='w-full' loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModuleBanner
