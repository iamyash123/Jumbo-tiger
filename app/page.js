import React from 'react'
import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import Banner from '@/Components/Pages/Homepage/Banner'
import Modules from '@/Components/Pages/Homepage/Modules'
import LogoStrip from '@/Components/Common/LogoStrip'
import Promise from '@/Components/Pages/Homepage/Promise'
import UseCases from '@/Components/Pages/Homepage/UseCases'
import ClientWords from '@/Components/Common/ClientWords'
import Readybuild from '@/Components/Pages/Homepage/Readybuild'
import WhyJumbotiger from '@/Components/Pages/Homepage/WhyJumbotiger'
import Pricing from '@/Components/Pages/Homepage/Pricing'
import HowItWorks from '@/Components/Pages/Homepage/HowItWorks'
import ThreeBox from '@/Components/Pages/Homepage/ThreeBox'

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <LogoStrip />
      <ThreeBox />
      <Modules />
      <HowItWorks />
      <Promise />
      <UseCases />
      <WhyJumbotiger />
      <ClientWords />
      <Pricing />
      <Readybuild />
      <Footer />
    </>
  )
}

export default page
