import React from 'react'
import { notFound } from 'next/navigation'
import ClientWords from '@/Components/Common/ClientWords'
import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import PageFaq from '@/Components/Common/PageFaq'
import ModuleBanner from '@/Components/Pages/Modules/ModuleBanner'
import ModuleStats from '@/Components/Pages/Modules/ModuleStats'
import Readybuild from '@/Components/Pages/Homepage/Readybuild'
import ModuleMore from '@/Components/Pages/Modules/ModuleMore'
import ModuleChallenge from '@/Components/Pages/Modules/ModuleChallenge'
import LogoStrip from '@/Components/Common/LogoStrip'
import ModuleAutomate from '@/Components/Pages/Modules/ModuleAutomate'
import ModuleGrid from '@/Components/Pages/Modules/ModuleGrid'
import { modulesData } from '@/data/modulesData'

const page = async ({ params }) => {
    const { slug } = await params
    const moduleData = modulesData[slug]

    if (!moduleData) {
        notFound()
    }

    return (
        <>
            <Header />
            <ModuleBanner content={moduleData.banner} />
            <LogoStrip />
            <ModuleChallenge content={moduleData.challenge} />
            <ModuleGrid items={moduleData.grid} />
            <ModuleAutomate content={moduleData.automate} />
            <ModuleStats stats={moduleData.stats} />
            <ClientWords />
            <ModuleMore content={moduleData.more} />
            <PageFaq content={moduleData.faq} />
            <Readybuild content={moduleData.readybuild} />
            <Footer />
        </>
    )
}

export default page
