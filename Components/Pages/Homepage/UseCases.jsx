import React from 'react'
import Image from 'next/image';
import Usecase from '@/public/images/usecase.webp';
import Quoteicon from '@/public/images/quote.svg'
import BankIconTile from '@/Components/Common/IconComponents/BankIconTile';
import ClockIconTile from '@/Components/Common/IconComponents/ClockIconTile';
import GraduateIconTile from '@/Components/Common/IconComponents/GraduateIconTile';
import HouseIconTile from '@/Components/Common/IconComponents/HouseIconTile';
import CursorTargetIconTile from '@/Components/Common/IconComponents/CursorTargetIconTile';
import LightningIconTile from '@/Components/Common/IconComponents/LightningIconTile';


const useCasesData = [
    {
        icon: HouseIconTile,
        iconProps: {
            backgroundClass: 'bg-black',

        },
        title: "Coliving",
        desc: "Per-bed billing, community management, flexible stays, and shared space operations."
    },
    {
        icon: BankIconTile,
        iconProps: {
            backgroundClass: 'bg-black',
        },
        title: "Built to Rent",
        desc: "Institutional-grade reporting, amenity management, and resident lifecycle tools."
    },
    {
        icon: ClockIconTile,
        iconProps: {
            backgroundClass: 'bg-black',
        },
        title: "Flex Living",
        desc: "Short-to-long stay management, dynamic pricing, and channel distribution."
    },
    {
        icon: GraduateIconTile,
        iconProps: {
            backgroundClass: 'bg-black',
        },
        title: "Student Housing",
        desc: "University partnerships, academic year cycles, and bulk onboarding."
    },
    {
        icon: CursorTargetIconTile,
        iconProps: {
            backgroundClass: 'bg-black',
            iconGradient: ['#FFFFFF', '#BB94FF', '#9B6CFF'],
            shadowClass: 'none'
        },
        title: "Serviced Apartments",
        desc: "Housekeeping schedules, OTA integration, and short-stay management."
    },
    {
        icon: LightningIconTile,
        iconProps: {
            backgroundClass: 'bg-black',
            iconGradient: ['#FFFFFF', '#BB94FF', '#9B6CFF'],
            shadowClass: 'none'
        },
        title: "Residential Rental",
        desc: "Traditional tenancy management, compliance, and portfolio reporting."
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
                            <Image src={Usecase} alt='Coliving property operations preview' loading='lazy' className='w-full h-100 md:h-full rounded-2xl' />
                            <div className="p-5 md:p-10 w-full absolute bottom-0">
                                <Image src={Quoteicon} alt='' aria-hidden="true" loading='lazy' />
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
                        {useCasesData.map((item, index) => {
                            const CaseIcon = item.icon

                            return (
                                <div key={index} className='flex flex-col md:flex-row gap-6 py-4 first:pt-0 last:pb-0 first:pb-6 last:pt-6'>
                                    <CaseIcon {...item.iconProps} />
                                    <div>
                                        <h6 className="semibold">{item.title}</h6>
                                        <p className="!mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default UseCases
