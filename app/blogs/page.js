import React from 'react'
import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import BlogBanner from '@/Components/Pages/Blogs/BlogBanner'
import AllBlogs from '@/Components/Pages/Blogs/AllBlogs'

const page = () => {
    return (
        <>
            <Header />
            <BlogBanner />
            <AllBlogs />
            <Footer />
        </>
    )
}

export default page
