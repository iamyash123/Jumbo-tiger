import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import LogoStrip from '@/Components/Common/LogoStrip'
import Readybuild from '@/Components/Pages/Homepage/Readybuild'
import AllModules from '@/Components/Pages/Resources/AllModules'
import ResourceBanner from '@/Components/Pages/Resources/ResourceBanner'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <ResourceBanner />
            <LogoStrip />
            <AllModules />
            <Readybuild />
            <Footer />
        </>
    )
}

export default page
