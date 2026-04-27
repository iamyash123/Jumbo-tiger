import { Button } from '@heroui/react'
import React from 'react'

const Icon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3333 4L6 11.3333L2.66666 8" stroke="#535353" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
const Pricing = () => {
    return (
        <section>
            <div className="container">
                <div className='border-x border-[#E5E7EB]'>
                    <div className="pt-12 pb-9">
                        <h2 className="bold text-center !text-[25px] !leading-[1.1] !tracking-[-0.2px]">
                            PRICING
                        </h2>
                        <p className="grey text-center !mt-3 !text-[15px]">Pricing That Scales With You</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
                        <div className="border-y border-[#EDEDED] min-h-[560px] flex flex-col padding-80 !pt-0">
                            <div className="py-6 px-5 lg:px-10">
                                <h6 className="bold dark !text-[17px]">Starter</h6>
                                <p className="!mt-1 dark !text-[14px]">
                                    From $499/mo
                                </p>
                            </div>
                            <div className="px-5 lg:px-10 pt-6 border-t border-[#EDEDED]  flex flex-1 flex-col">
                                <p className='dark !mb-2 !text-[13px]'>Modules Covered</p>
                                <div className='flex flex-col gap-2 pb-4'>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Booking and onboarding</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Payments & Rent</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Tenant Portal</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Inventory & Occupancy</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 py-4 border-y border-[#EDEDED]'>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">1 property</p>
                                    </div>

                                </div>
                                <div className='py-4'>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Email support</p>
                                    </div>
                                </div>
                                <Button className='outline-btn large w-full !mt-auto !min-h-0 !h-[40px] !py-0 !text-[12px]'>Get Quotation</Button>
                            </div>
                        </div>
                        <div className="border border-[#EDEDED] min-h-[560px] padding-80 !pt-0 flex flex-col relative before:absolute before:top-0 before:left-0 before:h-[4px] before:w-full before:bg-[linear-gradient(270deg,_#FF965D_0.29%,_#9960FA_62.75%,_#000_107.18%)]">
                            <div className="py-6 px-5 bg-[#F3F4F6] lg:px-10 flex flex-col lg:flex-row justify-between gap-4">
                                <div>
                                    <h6 className="bold dark !text-[17px]">Professional</h6>
                                    <p className="!mt-1 dark !text-[14px]">
                                        From $999/mo
                                    </p>
                                </div>
                                <Button className='price-button'>Most Popular</Button>
                            </div>
                            <div className="px-5 lg:px-10 pt-6 border-t border-[#EDEDED] flex flex-1 flex-col">
                                <p className='dark !mb-2 !text-[13px]'>Modules Covered</p>

                                <div className='flex flex-col gap-2 pb-4'>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Booking and onboarding</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Payments & Rent</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Tenant Portal</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Inventory & Occupancy</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">AI Layer</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Listing & Booking Engine</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Communications & Ops</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Global Config & Compliance</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Integrations Hub</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 py-4 border-y border-[#EDEDED]'>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Multi-property</p>
                                    </div>

                                </div>
                                <div className='py-4'>
                                    <div className='flex gap-2 items-center'>
                                        <Icon />
                                        <p className="!text-[13px]">Priority support</p>
                                    </div>
                                </div>
                                <Button className='primary-btn large w-full !mt-auto !min-h-0 !h-[40px] !py-0 !text-[12px]'>Get Quotation</Button>
                            </div>
                        </div>
                        <div className="border-y border-[#EDEDED] min-h-[560px] padding-80 !pt-0 flex flex-col">
                            <div className="py-6 px-5 lg:px-10">
                                <h6 className="bold dark !text-[17px]">Enterprise</h6>
                                <p className="!mt-1 dark !text-[14px]">
                                    Custom
                                </p>
                            </div>
                            <div className="px-5 lg:px-10 pt-6 border-t border-[#EDEDED] flex flex-1 flex-col">
                                <div>
                                    <p className='dark !mb-2 !text-[13px]'>Modules Covered</p>
                                    <div className='flex flex-col gap-2 pb-4'>
                                        <div className='flex gap-2 items-center'>
                                            <Icon />
                                            <p className="!text-[13px]">All 26 modules</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 py-4 border-y border-[#EDEDED]'>
                                        <div className='flex gap-2 items-center'>
                                            <Icon />
                                            <p className="!text-[13px]">Unlimited properties</p>
                                        </div>

                                    </div>
                                    <div className='py-4'>
                                        <div className='flex gap-2 items-center'>
                                            <Icon />
                                            <p className="!text-[13px]">Dedicated success manager</p>
                                        </div>
                                    </div>
                                </div>
                                <Button className='outline-btn large w-full !mt-auto !min-h-0 !h-[40px] !py-0 !text-[12px]'>Get Quotation</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
