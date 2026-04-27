import React from 'react'
import StripeIcon from '@/public/images/stripe-logo.svg'
import XeroIcon from '@/public/images/xero-logo.svg'
import HubspotIcon from '@/public/images/hubspot-logo.svg'
import TwilloIcon from '@/public/images/twillo-logo.svg'
import BookingIcon from '@/public/images/booking-logo.svg'
import AirbnbIcon from '@/public/images/airbnb-logo.svg'
import Image from 'next/image'

const LogoStrip = () => {
    return (
        <section className='bg-[#F3F4F6]  border-t border-[#E5E7EB]'>
            <div className="container">
                <div className="border-x padding-80 border-[#E5E7EB] flex justify-center items-center flex-wrap gap-6 lg:gap-10">
                    <Image src={StripeIcon} loading='lazy' alt='StripeIcon' />
                    <Image src={XeroIcon} loading='lazy' alt='XeroIcon' />
                    <Image src={HubspotIcon} loading='lazy' alt='HubspotIcon' />
                    <Image src={TwilloIcon} loading='lazy' alt='TwilloIcon' />
                    <Image src={BookingIcon} loading='lazy' alt='BookingIcon' />
                    <Image src={AirbnbIcon} loading='lazy' alt='AirbnbIcon' />
                </div>
            </div>
        </section>
    )
}

export default LogoStrip
