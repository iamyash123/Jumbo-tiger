import React from 'react'
import StepMark from '@/Components/Common/StepMark'
import Image from 'next/image';
import Usecase from '@/public/images/usecase.webp';
import Quoteicon from '@/public/images/quote.svg'


const useCasesData = [
    {
        title: "Coliving",
        desc: "Per-bed billing, community management, flexible stays, and shared space operations."
    },
    {
        title: "Built to Rent",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation."
    },
    {
        title: "Flex Living",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation."
    },
    {
        title: "Student Housing",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation."
    },
    {
        title: "Serviced Apartments",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation."
    },
    {
        title: "Residential Rental",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation."
    }
];

const UseCases = () => {
    return (
        <section className='border-b border-[#EDEDED]'>
            <div className="container">
                <div className="flex flex-col xl:flex-row border-x border-[#EDEDED] ">

                    {/* Left Content */}
                    <div className="padding-80 xl:w-1/2 px-5 lg:px-10 xl:px-20 lg:border-r border-[#EDEDED]">
                        <h2 className="bold">USE CASES</h2>
                        <p className="!mt-3 large">
                            Built for Every Operator Type
                        </p>
                        <div className='mt-10 relative'>
                            <Image src={Usecase} alt='Usecase' loading='lazy' className='w-full h-100 md:h-full rounded-2xl' />
                            <div className="p-5 md:p-10 w-full absolute bottom-0">
                                <Image src={Quoteicon} alt='Quoteicon' loading='lazy' />
                                <p className="large white !my-4">
                                    We used to spend 3-4 days onboarding each new resident. With JumboTiger, it&apos;s done in under 2 hours. The housemate matching alone has cut our early move-outs by 40%.
                                </p>
                                <p className="white opacity-80">Sarah Chen</p>
                                <p className="white !mt-1 opacity-80">Operations Director, Urban Coliving London</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="padding-80 xl:w-1/2 px-5 lg:px-10 border-t border-[#EDEDED] xl:border-0">
                        {useCasesData.map((item, index) => (
                            <div key={index} className='flex flex-col md:flex-row gap-6 py-4 first:pt-0 last:pb-0 first:pb-6 last:pt-6'>
                                <StepMark />
                                <div>
                                    <h6 className="semibold">{item.title}</h6>
                                    <p className="!mt-3">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default UseCases