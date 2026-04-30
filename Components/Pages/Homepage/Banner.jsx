import React from 'react'
import { Button } from '@heroui/react'
import BannerImg from '@/public/images/hero-banner.webp'
import Ecicon from '@/public/images/ec-icon.svg'
import ArrowUp from '@/public/images/arrow-up-right.svg'
import Spattern from '@/public/images/square-pattern.svg'
import Rpattern from '@/public/images/round-pattern.svg'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <section className='home-banner  mt-62'>
            <div className="container">
                <div className="border-x px-5 lg:px-10 padding-80 border-[#E5E7EB] flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:max-w-[512px] flex flex-col gap-6 lg:gap-10 my-auto">
                        <Link href={'https://www.everythingcoliving.com/'} target='_blank' className='flex gap-2 items-center'>
                            <Image src={Ecicon} alt='Everything Coliving logo' loading='lazy' />
                            <p className='semibold'>Built by Coliving experts</p>
                            <Image src={ArrowUp} alt='' aria-hidden="true" loading='lazy' />
                        </Link>
                        <div>
                            <h1 className="bold">
                                Custom PMS for Serious
                                Coliving Operators
                            </h1>
                            <p className='!mt-4'>
                                Stop adapting your operations to generic software. JumboTiger builds you a fully custom property management system from battle-tested modules  configured to how you actually run your spaces. Live in 30 days.
                            </p>
                        </div>
                        <div className='flex gap-4 flex-col md:flex-row'>
                            <Link href={'/contact-us'} className='primary-btn w-fit large'>Book a Free demo</Link>
                            <Button className='outline-btn large'>Platform Preview</Button>
                        </div>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            <div className="relative w-full h-[172px] bg-[#F3F4F6] rounded-2xl overflow-hidden">

                                {/* Content */}
                                <div className="relative z-10  p-6">
                                    <h6 className="blue semibold">26 Modules</h6>
                                    <p className="blue  mt-1!">Ready to use</p>
                                </div>

                                {/* Pattern */}
                                <div className='right-0 absolute bottom-0'>
                                    <Image src={Spattern} alt='' aria-hidden="true" loading='lazy' />
                                </div>
                            </div>
                            <div className="relative w-full h-[172px] bg-[#F3F4F6] rounded-2xl overflow-hidden ">

                                {/* Content */}
                                <div className="relative z-10 p-6">
                                    <h6 className="blue semibold">Go Live Fast</h6>
                                    <p className="blue mt-1!">In 30 Days</p>
                                </div>

                                {/* Pattern */}
                                {/* Pattern */}
                                <div className='right-0 absolute bottom-0'>
                                    <Image src={Rpattern} alt='' aria-hidden="true" loading='lazy' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-auto'>
                        <Image src={BannerImg} loading='lazy' alt='JumboTiger property management dashboard preview' className='w-full rounded-2xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Banner
