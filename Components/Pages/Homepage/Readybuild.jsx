import React from 'react'
import { Button } from '@heroui/react'
import Link from 'next/link'
import Image from 'next/image'
import Buildscale from '@/public/images/buildscale.webp'

const defaultContent = {
    title: 'READY TO BUILD?',
    description: "Tell us about your properties and operations. We'll show you exactly which modules you need and how fast we can get you live.",
    primaryLabel: 'Schedule a Discovery Call',
    primaryHref: '/bookdemo',
    secondaryLabel: 'View Pricing',
    secondaryHref: '/',
}

const Readybuild = ({ content = defaultContent }) => {
    const {
        title,
        description,
        primaryLabel,
        primaryHref,
        secondaryLabel,
        secondaryHref,
    } = content

    return (
        <section className='bg-[#4F0FBD]'>
            <div className="container">
                <div className="border-x border-[rgba(255,255,255,0.12)] padding-80 px-5 lg:px-10 flex flex-col gap-10 lg:flex-row">
                    <div className="max-w-[554px] my-auto">
                        <h2 className="bold white">
                            {title}
                        </h2>
                        <p className="large white !mt-3">
                            {description}
                        </p>
                        <div className="mt-10 flex flex-col md:flex-row gap-4">
                            <Link href={primaryHref} className='primary-btn large w-fit'>{primaryLabel}</Link>
                            <Link href={secondaryHref} className='outline-btn large !text-white w-fit'>{secondaryLabel}</Link>
                        </div>
                    </div>
                    <div>
                        <Image src={Buildscale} alt='Buildscale' loading='lazy' className='w-full' />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Readybuild
