import React from 'react'
import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import LogoStrip from '@/Components/Common/LogoStrip'
import Readybuild from '@/Components/Pages/Homepage/Readybuild'
import AllModules from '@/Components/Pages/Modules/AllModules'
import ResourceBanner from '@/Components/Pages/Modules/ModuleBanner'

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
