import React from 'react'
import { notFound } from 'next/navigation'
import ClientWords from '@/Components/Common/ClientWords'
import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import PageFaq from '@/Components/Common/PageFaq'
import ModuleBanner from '@/Components/Pages/ModulesSingle/ModuleBanner'
import ModuleStats from '@/Components/Pages/ModulesSingle/ModuleStats'
import Readybuild from '@/Components/Pages/Homepage/Readybuild'
import ModuleMore from '@/Components/Pages/ModulesSingle/ModuleMore'
import ModuleChallenge from '@/Components/Pages/ModulesSingle/ModuleChallenge'
import LogoStrip from '@/Components/Common/LogoStrip'
import ModuleAutomate from '@/Components/Pages/ModulesSingle/ModuleAutomate'
import ModuleGrid from '@/Components/Pages/ModulesSingle/ModuleGrid'
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
            <ClientWords content={moduleData.clientWords} />
            <ModuleMore content={moduleData.more} currentSlug={slug} />
            <PageFaq content={moduleData.faq} />
            <Readybuild content={moduleData.readybuild} />
            <Footer />
        </>
    )
}

export default page
