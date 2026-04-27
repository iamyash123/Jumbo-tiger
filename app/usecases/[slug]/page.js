import React from 'react'
import { notFound } from 'next/navigation'
import ClientWords from '@/Components/Common/ClientWords'
import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import LogoStrip from '@/Components/Common/LogoStrip'
import PageFaq from '@/Components/Common/PageFaq'
import Readybuild from '@/Components/Pages/Homepage/Readybuild'
import Automate from '@/Components/Pages/UseCase/Automate'
import Banner from '@/Components/Pages/UseCase/Banner'
import Challenge from '@/Components/Pages/UseCase/Challenge'
import Stats from '@/Components/Pages/UseCase/Stats'
import UsecaseGrid from '@/Components/Pages/UseCase/UsecaseGrid'
import WorkWith from '@/Components/Pages/UseCase/WorkWith'
import { usecasesData } from '@/data/usecasesData'

const page = async ({ params }) => {
    const { slug } = await params
    const usecaseData = usecasesData[slug]

    if (!usecaseData) {
        notFound()
    }

    return (
        <>
            <Header />
            <Banner content={usecaseData.banner} />
            <LogoStrip />
            <Challenge content={usecaseData.challenge} />
            <UsecaseGrid items={usecaseData.grid} />
            <Automate content={usecaseData.automate} />
            <Stats stats={usecaseData.stats} />
            <ClientWords />
            <WorkWith content={usecaseData.workWith} />
            <PageFaq content={usecaseData.faq} />
            <Readybuild content={usecaseData.readybuild} />
            <Footer />
        </>
    )
}

export default page
