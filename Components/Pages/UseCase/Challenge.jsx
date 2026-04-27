import React from 'react'
import GradientStepMark from '@/Components/Common/Gradientstepmark';
const defaultContent = {
    heading: 'CHALLENGE',
    subtitle: 'Manual Onboarding Costs You Beds & Revenue',
    items: [
    {
        title: "No Community Tools",
        desc: "Generic PMS tools weren't built for coliving. Shared rooms, flexible stays, per-bed billing, community events, B2B channel managers  they can't handle it. So you end up with spreadsheets filling the gaps."
    },
    {
        title: "Rigid Lease Structures",
        desc: "We don't sell you a login to a SaaS. We build you a fully custom PMS from 26 pre-built modules  configured to your exact workflows, branding, and business rules. No compromises."
    },
    {
        title: "Per-Unit, Not Per-Bed",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    },
    {
        title: "All-Inclusive Billing Gaps",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    },
    {
        title: "Booking Chaos",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    },
    {
        title: "No Branded App",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    }
    ],
}

const Challenge = ({ content = defaultContent }) => {
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
                        <div key={index} className='flex flex-col gap-6 lg:gap-10 padding-80 px-5 lg:px-10 border border-[#E5E7EB]'>
                            <GradientStepMark />
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

export default Challenge
