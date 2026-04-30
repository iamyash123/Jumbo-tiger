import React from 'react'
import IconTile from '@/Components/Common/IconComponents/IconTile'
import ApproachIconTile from '@/Components/Common/IconComponents/ApproachIconTile'
import ResultIconTile from '@/Components/Common/IconComponents/ResultIconTile'

const iconComponents = {
    problem: IconTile,
    approach: ApproachIconTile,
    result: ResultIconTile,
}

const useCasesData = [
    {
        icon: 'problem',
        title: "The Problem",
        desc: "Generic PMS tools weren't built for coliving. Shared rooms, flexible stays, per-bed billing, community events, B2B channel managers - they can't handle it. So you end up with spreadsheets filling the gaps."
    },
    {
        icon: 'approach',
        title: "Our Approach",
        desc: "We don't sell you a login to a SaaS. We build you a fully custom PMS from 26 pre-built modules - configured to your exact workflows, branding, and business rules. No compromises."
    },
    {
        icon: 'result',
        title: "The Result",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    }

];
const ThreeBox = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {useCasesData.map((item, index) => {
                        const TileIcon = iconComponents[item.icon]

                        return (
                            <div key={index} className='flex flex-col gap-6 lg:gap-10 padding-80 px-5 lg:px-10 border border-[#E5E7EB]'>
                                <TileIcon sizeClass="size-16" radiusClass="rounded-xl" />
                                <div>
                                    <h6 className="semibold">{item.title}</h6>
                                    <p className="!mt-4 grey">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ThreeBox
