import React from 'react'
import RelatedCards from '@/Components/Common/RelatedCards'

const defaultContent = {
    heading: 'Works With These Modules',
    items: [
    {
        slug: 'booking-onboarding',
    },
    {
        slug: 'payments-rent',
    },
    {
        slug: 'tenant-portal',
    }
    ],
}

const WorkWith = ({ content = defaultContent }) => {
    const { heading } = content

    return (
        <section>
            <div className="container">
                <div className="padding-80-40 border-x border-[#E5E7EB]">
                    <h2 className="bold text-center">{heading}</h2>
                </div>
                <RelatedCards items={content.items} />
            </div>
        </section>
    )
}

export default WorkWith
