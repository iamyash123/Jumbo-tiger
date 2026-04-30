import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import LogoStrip from '@/Components/Common/LogoStrip'
import Aboutstory from '@/Components/Pages/AboutUs/Aboutstory'
import Banner from '@/Components/Pages/AboutUs/Banner'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <Banner />
            <LogoStrip />
            <Aboutstory />
            <Footer />
        </>
    )
}

export default page
