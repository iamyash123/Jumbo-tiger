import ArrowUpRightIconTile from '@/Components/Common/IconComponents/ArrowUpRightIconTile'
import CursorTargetIconTile from '@/Components/Common/IconComponents/CursorTargetIconTile'
import LightningIconTile from '@/Components/Common/IconComponents/LightningIconTile'
import PhoneIconTile from '@/Components/Common/IconComponents/PhoneIconTile'
import WrenchIconTile from '@/Components/Common/IconComponents/WrenchIconTile'
import React from 'react'
const iconComponents = {
    discovery: PhoneIconTile,
    module: CursorTargetIconTile,
    customization: WrenchIconTile,
    golive: ArrowUpRightIconTile,
}
const steps = [
    {
        icon: 'discovery',
        title: 'Discovery Call',
        description:
            'We learn about your properties, workflows, pain points, and what modules you need. No two operators are the same.',
    },
    {
        icon: 'module',
        title: 'Module Selection',
        description:
            'Pick from our library of 26 pre-built modules. We map each one to your specific operational requirements.',
    },
    {
        icon: 'customization',
        title: 'Customization',
        description:
            'We tailor workflows, branding, roles, integrations, and business rules to match how you actually operate.',
    },
    {
        icon: 'golive',
        title: 'Go Live',
        description:
            'Your custom PMS is deployed, your team is trained, and ongoing support begins. You are live in 30 days.',
    },
]

const HowItWorks = () => {
    return (
        <section className="bg-[#F9FAFB]">
            <div className="container">
                <div className="border-x border-[#E5E7EB]">
                    <div className="border-b border-[#EDEDED] px-5 py-10 text-center">
                        <h2 className="bold">
                            HOW IT WORKS
                        </h2>
                        <p className="!mt-3 large grey">
                            From Discovery to Go-Live in 30 Days
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {steps.map((step) => {
                            const TileIcon = iconComponents[step.icon]

                            return (
                                <article
                                    className="relative min-h-[260px] overflow-hidden border-b border-r border-[#e5e7eb] px-5 md:px-10 pb-10 lg:pb-20 pt-62.5 text-center last:border-r-0 xl:border-b-0"
                                    key={step.title}
                                >
                                    <div className="absolute left-1/2 top-[-70px] h-[238px] w-full -translate-x-1/2 rounded-b-[999px] border border-dashed border-[#d9dde3]" />
                                    <div className="absolute left-1/2 top-33 z-10 -translate-x-1/2">
                                        <TileIcon />
                                    </div>

                                    <h6 className="text-center font-semibold">
                                        {step.title}
                                    </h6>
                                    <p className="!mt-3">
                                        {step.description}
                                    </p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
