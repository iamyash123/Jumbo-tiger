import React from 'react'
import ModuleCard from '@/Components/Common/ModuleCard'

const Modules = () => {

    const modulesData = [
        {
            image: '/images/card-img.png', // ✅ correct path (public folder)
            title: "Booking & Onboarding",
            description: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation.",
            link: "/booking-onboarding"
        },
        {
            image: '/images/card-img.png',
            title: "Property Management",
            description: "Manage tenants, leases, maintenance, and communication from one centralized dashboard.",
            link: "/property-management"
        },
        {
            image: '/images/card-img.png',
            title: "Payments & Billing",
            description: "Automate rent collection, invoices, payment reminders, and financial tracking.",
            link: "/payments-billing"
        },
        {
            image: '/images/card-img.png', // ✅ correct path (public folder)
            title: "Booking & Onboarding",
            description: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation.",
            link: "/booking-onboarding"
        },
        {
            image: '/images/card-img.png',
            title: "Property Management",
            description: "Manage tenants, leases, maintenance, and communication from one centralized dashboard.",
            link: "/property-management"
        },
        {
            image: '/images/card-img.png',
            title: "Payments & Billing",
            description: "Automate rent collection, invoices, payment reminders, and financial tracking.",
            link: "/payments-billing"
        }
    ]

    return (
        <section className='modules'>
            <div className="container">

                {/* Heading */}
                <div className="padding-80-40 border-x border-[#E5E7EB] px-5">
                    <h2 className="bold text-center">MODULES</h2>
                    <p className='!mt-3 large grey text-center'>
                        Everything You Need to Run Your Properties
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {modulesData.map((item, index) => (
                        <ModuleCard
                            key={index}
                            image={item.image} // ✅ important
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Modules