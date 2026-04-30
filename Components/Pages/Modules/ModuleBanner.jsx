'use client'
import React from 'react'
import { Breadcrumbs, Button } from '@heroui/react'
import Link from 'next/link'

const ModuleBanner = () => {
    return (
        <section className="mt-62 bg-[#000]">
            <div className="container relative z-4">
                <div className="border-x border-[rgba(255,255,255,0.20)]">
                    <Breadcrumbs
                        separator="/"
                        className="px-5 md:px-10 py-4 gap-2  [&_span]:text-white"
                    >
                        <Breadcrumbs.Item className='text-white gap-2 p-0 [&_a]:p-0' href="/">Home</Breadcrumbs.Item>
                        <Breadcrumbs.Item className='[&_span]:text-white [&_span]:font-semibold p-0'>Modules</Breadcrumbs.Item>
                    </Breadcrumbs>
                    <div className="padding-80 px-5 md:px-10">
                        <div className='max-w-[850px] mx-auto text-center flex flex-col gap-10'>
                            <h6 className='bold white'>Full Platform</h6>
                            <div>
                                <h1 className="bold white">20+ Modules, One Platform</h1>
                                <p className="!mt-4 white">
                                    Every module is built to work independently or together, giving you a fully integrated property management system tailored to your needs.
                                </p>
                            </div>
                            <div className='flex gap-4 flex-col justify-center items-center md:flex-row'>
                                <Link href={'/contact-us'} className='primary-btn large'>Book a Free demo</Link>
                                <Link href="#all-module" className='outline-btn large !text-white'>View all Modules</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ModuleBanner
