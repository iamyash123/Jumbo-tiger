import DatabaseIconTile from '@/Components/Common/IconComponents/DatabaseIconTile'
import LightningIconTile from '@/Components/Common/IconComponents/LightningIconTile'
import PhoneIconTile from '@/Components/Common/IconComponents/PhoneIconTile'
import SquaresIconTile from '@/Components/Common/IconComponents/SquaresIconTile'
import React from 'react'

const cards = [
    {
        icon: PhoneIconTile,
        title: 'No Off-the-Shelf Compromise',
        description:
            'Generic PMS tools force you to adapt your operations to their software. JumboTiger adapts the software to your operations. Every workflow, field, and rule can be customized.',
    },
    {
        icon: LightningIconTile,
        title: 'Speed Without Sacrifice',
        description:
            "Custom software usually means 6-12 months of development. Our modular architecture means you get truly custom results in just 30 days, because we've already built the foundations.",
    },
    {
        icon: SquaresIconTile,
        title: 'Scales With You',
        description:
            'Start with the modules you need today, add more as you grow. Going from 1 property to 50? Our multi-property architecture handles it without breaking a sweat.',
    },
    {
        icon: DatabaseIconTile,
        title: 'Your Data, Your Platform',
        description:
            "Unlike SaaS platforms where you're one of thousands of tenants, your JumboTiger instance is yours. Your data, your infrastructure, your control.",
    },
]

const WhyJumbotiger = () => {
    return (
        <section className='bg-[#F9FAFB]'>
            <div className="container">
                <div className='border-x border-[#EDEDED] padding-80-40'>
                    <h2 className="bold text-center">
                        WHY JUMBOTIGER
                    </h2>
                    <p className="large grey text-center !mt-3">
                        Built Different for Property Operators
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => {
                        const CardIcon = card.icon

                        return (
                            <div key={card.title} className='padding-80 px-5 lg:px-10 border-t border-l border-[#E5E7EB] md:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r'>
                                <CardIcon />
                                <h5 className='!mt-10'>{card.title}</h5>
                                <p className="!mt-4 grey">
                                    {card.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyJumbotiger
