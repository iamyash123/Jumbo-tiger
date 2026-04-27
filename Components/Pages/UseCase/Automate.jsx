import React from 'react'
import { Button } from '@heroui/react'
import Link from 'next/link'

const defaultContent = {
    title: 'Automate Your Entire Onboarding Flow',
    description: 'See how JumboTiger can take your booking-to-move-in process from days to hours.',
    primaryLabel: 'Book a Free demo',
    primaryHref: '/bookdemo',
    secondaryLabel: 'Platform Preview',
    secondaryHref: '/bookdemo',
}

const Automate = ({ content = defaultContent }) => {
    const {
        title,
        description,
        primaryLabel,
        primaryHref,
        secondaryLabel,
        secondaryHref,
    } = content

    return (
        <section>
            <div className="container">
                <div className="border-x border padding-80 px-5 md:px-10 lg:px-20 ">
                    <div className='rounded-2xl padding-80 px-5 md:px-10 lg:px-20 ' style={{ background: 'linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), var(--background-Brand, #4F0FBD)' }}>
                        <div className="max-w-[650px]">
                            <h2 className="bold white">{title}</h2>
                            <p className="white large opacity-80">{description}</p>
                            <div className='flex gap-4 flex-col md:flex-row mt-10'>
                                <Link href={primaryHref} className='primary-btn large'>{primaryLabel}</Link>
                                <Link href={secondaryHref} className='outline-btn large text-white!'>{secondaryLabel}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Automate
