'use client'

import React from 'react'
import StepMark from '@/Components/Common/IconComponents/StepMark'
import { Button, Input, Label } from '@heroui/react'
import '@/public/styles/input.scss'
const selectClass =
  'w-full h-12 bg-white border border-[#E0E0E0] cursor-pointer !text-[#333] rounded-lg px-4 text-sm focus:outline-none focus:border-[#111827] focus:bg-[#F3F4F6] transition appearance-none';
const bannerData = [
  {
    title: 'Custom Demo',
    desc: 'We&apos;ll walk through the platform configured to your property type and workflows.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'Get a fixed quote within 48 hours based on your specific requirements.',
  },
  {
    title: '30-Day Timeline',
    desc: 'See a realistic deployment plan for getting your custom PMS live.',
  },
]

const BookBanner = () => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries())

    console.log('Book demo form data:', values)
  }

  return (
    <section className='mt-62'>
      <div className="flex lg:flex-row flex-col">

        <div className="padding-80 lg:w-1/2 lg:px-20 px-5 md:px-10 flex justify-center lg:justify-end bg-[#F3F4F6]">
          <div className='max-w-[450px]'>
            <h1 className="bold">Book a Demo</h1>
            <p className="mt-3">
              Tell us about your operation and we&apos;ll show you exactly how JumboTiger would work for you.
            </p>

            <div className='mt-6'>
              {bannerData.map((item, index) => (
                <div key={index} className='py-4 flex flex-col md:flex-row gap-6 border-t border-[#EE5E7EB] last:border-b'>
                  <StepMark size={42} radius={6} />
                  <div>
                    <p className="dark semibold">{item.title}</p>
                    <p className="grey !mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="padding-80 lg:px-20 lg:w-1/2 px-5 md:px-10 flex justify-center lg:justify-start">
          <form className="max-w-[450px]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <Label htmlFor="input-type-firstname" className='font-semibold'>First Name *</Label>
                <Input
                  name="firstName"
                  className="popup-input mt-1!"
                />
              </div>
              <div>
                <Label htmlFor="input-type-lastName" className='font-semibold '>Last Name *</Label>
                <Input
                  name="lastName"
                  className="popup-input mt-1!"
                />
              </div>
              <Label htmlFor="input-type-email" className='font-semibold'>Work Email *</Label>
              <Input
                name="email"
                type="email"
                className="popup-input md:col-span-2"
              />
              <Label htmlFor="input-type-companyName" className='font-semibold'>Company Name *</Label>
              <Input
                name="companyName"
                className="popup-input md:col-span-2"
              />
              <div>
                <Label className='font-semibold'>Number of Beds</Label>
                <div className="relative">
                  <select
                    name="category"
                    defaultValue="Select range"
                    className={selectClass}
                  >
                    <option>Select range</option>
                    <option>Under 200</option>
                    <option>200 - 500</option>
                    <option>500 - 1,000</option>
                    <option>1,000+</option>
                  </select>
                  {/* <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" /> */}
                </div>
              </div>

              <div>
                <Label className='font-semibold'>Geography</Label>
                <div className="relative">
                  <select
                    name="category"
                    defaultValue="Select region"
                    className={selectClass}
                  >
                    <option>Select region</option>
                    <option>United Kingdom</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Americans</option>
                    <option>Global / Multi-Region</option>
                  </select>
                  {/* <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" /> */}
                </div>
              </div>

              <Label htmlFor="input-type-currentTools" className='font-semibold'>Current PMS / Tools</Label>
              <Input
                name="currentTools"
                placeholder=" "
                className="popup-input md:col-span-2"
              />

              <Label htmlFor="input-type-problem" className='font-semibold'>What are you looking to solve? *</Label>
              <Input
                name="problem"
                placeholder=" "
                className="popup-input md:col-span-2"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                disableAnimation
                disableRipple
                className="primary-btn large"
                type="submit"
              >
                Book a demo
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookBanner
