import React from 'react'
import { Breadcrumbs } from '@heroui/react'
import Image from 'next/image'
import ModuleImg from '@/public/images/module-banner.webp'

const BlogBanner = () => {
    return (
        <section className='mt-62'>
            <div className="container">
                <div className="border-x border-[#E5E7EB]">
                    <Breadcrumbs
                        separator="/"
                        className="px-5 md:px-10 py-4 gap-2  [&_span]:text-white"
                    >
                        <Breadcrumbs.Item className=' gap-2 p-0 [&_a]:p-0' href="/">Home</Breadcrumbs.Item>
                        <Breadcrumbs.Item className='p-0 [&_span]:!text-[#000] [&_span]:font-semibold'>Blogs</Breadcrumbs.Item>
                    </Breadcrumbs>
                    <div className="padding-80-40 px-5 md:px-10">
                        <div>
                            <h1 className="bold">Blogs</h1>
                            <p className="!mt-4">
                                From Application to Move-In
                            </p>
                        </div>
                    </div>
                    <div className="p-6 border-y border-[#] flex flex-col gap-4 lg:flex-row">
                        <div className="lg:w-1/2">
                            <Image src={ModuleImg} loading='lazy' alt='Property management module preview' className='w-full rounded-2xl' />
                        </div>
                        <div className="lg:w-1/2 my-auto">
                            <div className="lg:p-6">
                                <p className="blue semibold">Onboarding</p>
                                <h2 className="bold my-4!">
                                    Online application forms, automated review workflows,
                                </h2>
                                <p className="grey mb-10!">Digital booking flow with apartment selection, document upload (passport, national ID), tenancy contract generation with e-signatures, security deposit invoicing, payment tracking, and automated resident profile creation upon completion.</p>
                                <p className="small grey">April 16, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogBanner
