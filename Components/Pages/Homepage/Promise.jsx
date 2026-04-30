import React from 'react'
import Image from 'next/image';
import StripPattern from '@/public/images/strip-pattern.svg'

const promiseData = [
    {
        value: "26",
        label: "Pre-Built Modules"
    },
    {
        value: "30",
        label: "Days Average Deployment"
    },
    {
        value: "99.9%",
        label: "Platform Uptime"
    },
    {
        value: "24/7",
        label: "Support & Monitoring"
    }
];

const Promise = () => {
    return (
        <section className='bg-[#000]'>
            <div className="container">
                <div className="flex flex-col lg:flex-row border-x border-[#383838]">

                    {/* Left Content */}
                    <div className="lg:w-1/2 pt-15 lg:pt-40 px-5 md:px-10 lg:px-20 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:8px_8px]" />

                        <div className="absolute inset-0 bg-[linear-gradient(16deg,rgba(0,0,0,0)_13.11%,#000_51.9%)]" />
                        <div className='relative z-2'>
                            <h2 className="bold white">THE 30 DAY PROMISE</h2>
                            <p className="white large !mt-3 opacity-80">
                                Custom software usually takes 6-12 months. We do it in 30 days because we&apos;ve already built the foundations.
                            </p>
                        </div>
                        <Image src={StripPattern} alt='' aria-hidden="true" loading='lazy' className='absolute z-2 left-0 bottom-10 hidden lg:block' />
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-1/2 grid grid-cols-2 mt-10 lg:my-0">
                        {promiseData.map((item, index) => (
                            <div
                                key={index}
                                className="p-5 lg:px-10 lg:pt-30 lg:pb-20 border-t border-l border-[#383838] md:[&:nth-child(2n)]:border-r"
                            >
                                <h2 className="bold white">
                                    {item.value}
                                </h2>
                                <p className="!mt-1 large white opacity-80">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Promise
