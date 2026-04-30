import React from 'react'
import Link from 'next/link'

const defaultContent = {
    title: 'Automate Your Entire Onboarding Flow',
    description: 'See how JumboTiger can take your booking-to-move-in process from days to hours.',
    primaryLabel: 'Book a Free demo',
    primaryHref: '/contact-us',
    secondaryLabel: 'Platform Preview',
    secondaryHref: '/contact-us',
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
                    <div className='relative overflow-hidden rounded-2xl padding-80 px-5 md:px-10 lg:px-20 ' style={{ background: 'linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), var(--background-Brand, #4F0FBD)' }}>
                        <div
                            className="pointer-events-none absolute bottom-[-146.206px] right-[-199.84px] hidden size-[441px] rotate-90 rounded-full md:block"
                            style={{ background: 'linear-gradient(6deg, #AAFFA6 20.76%, #9960FA 57.96%, #9960FA 86%)' }}
                            aria-hidden="true"
                        />
                        <div
                            className="pointer-events-none absolute bottom-[-113.206px] right-[-166.84px] hidden size-[360px] rounded-full bg-[#4F0FBD] md:block"
                            aria-hidden="true"
                        />
                        <div className="relative z-10 max-w-[650px]">
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
