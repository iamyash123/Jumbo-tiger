import React from 'react'
import GradientStepMark from '@/Components/Common/IconComponents/Gradientstepmark';
import Image from 'next/image';
import DynamicIconTile from '@/Components/Common/IconComponents/DynamicIconTile';

const defaultContent = {
    heading: 'CHALLENGE',
    subtitle: 'Manual Onboarding Costs You Beds & Revenue',
    items: [
    {
        image: '/images/bi-1.svg',
        title: "Scattered Applications",
        desc: "Generic PMS tools weren't built for coliving. Shared rooms, flexible stays, per-bed billing, community events, B2B channel managers  they can't handle it. So you end up with spreadsheets filling the gaps."
    },
    {
        image: '/images/bi-1.svg',
        title: "Slow Vetting & Approval",
        desc: "We don't sell you a login to a SaaS. We build you a fully custom PMS from 26 pre-built modules  configured to your exact workflows, branding, and business rules. No compromises."
    },
    {
        image: '/images/bi-1.svg',
        title: "Contract Chaos",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    },
    {
        image: '/images/bi-1.svg',
        title: "No Housemate Visibility",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    },
    {
        image: '/images/bi-1.svg',
        title: "Booking Abandonment",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    },
    {
        image: '/images/bi-1.svg',
        title: "Deposit & Payment Gaps",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    }
    ]
}

const ModuleChallenge = ({ content = defaultContent }) => {
    const { heading, subtitle, items } = content

    return (
        <section className='modules'>
            <div className="container">

                {/* Heading */}
                <div className="padding-80-40 border-x border-[#E5E7EB] px-5">
                    <h2 className="bold text-center">{heading}</h2>
                    <p className='!mt-3 large grey text-center'>
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <div key={index} className='flex flex-col gap-6 lg:gap-10 p-5 lg:p-10 border border-[#E5E7EB]'>
                            {item.icon ? (
                                <DynamicIconTile icon={item.icon} />
                            ) : item.image ? (
                                <Image src={item.image} alt="" width={64} height={64} loading="lazy" aria-hidden="true" />
                            ) : (
                                <GradientStepMark />
                            )}
                            <div>
                                <h6 className="semibold">{item.title}</h6>
                                <p className="!mt-4 grey">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ModuleChallenge
