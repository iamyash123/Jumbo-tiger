'use client'
import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/public/styles/button.scss";
import "@/public/styles/footer.scss";
import FooterlogoImg from "@/public/images/footer-logo.svg";
const Footer = () => {


    return (

        <footer className="jumbo-footer relative overflow-hidden">

            <div className="container relative z-2">
                <div className="border-x border-[#383838]">
                    <div className="footer-top padding-80 !pb-0">
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/4 p-5 lg:p-10 lg:!pb-20 relative">
                                <div className="relative z-2">
                                    <Link href={"/"}>
                                        <Image loading="lazy" src={FooterlogoImg} alt="footer-logo" />
                                    </Link>
                                    <p className="small white !mt-6">
                                        Custom property management software built for serious coliving operators. Live in 30 days.
                                    </p>
                                </div>
                                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:8px_8px]" />

                                <div className="absolute inset-0 bg-[linear-gradient(16deg,rgba(0,0,0,0)_13.11%,#000_51.9%)]" />
                            </div>

                            <div className="w-full lg:w-3/4 flex flex-col md:flex-row">
                                <div className="quicklinks w-full md:w-1/3 p-5 lg:p-10 lg:!pb-20 ">
                                    <p className="small white semibold title">Modules Covered</p>
                                    <div className="links">
                                        <Link href={"/"} className="footer-link">
                                            What is JumboTiger
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            All Modules
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            Booking & Onboarding
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            Payments & Rent
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            Tenant Portal
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            AI Layer
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            Integrations Hub
                                        </Link>
                                    </div>
                                </div>
                                <div className="quicklinks w-full md:w-1/3 p-5 lg:p-10 lg:!pb-20 ">
                                    <p className="small white semibold title">Company</p>
                                    <div className="links">
                                        <Link href={"/"} className="footer-link">
                                            About Us
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            Case Studies
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            Blog
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            How It Works
                                        </Link>
                                        <Link
                                            href={"/"}
                                            className="footer-link "
                                        >
                                            Why JumboTiger
                                        </Link>
                                    </div>
                                </div>
                                <div className="quicklinks w-full md:w-1/3 p-5 lg:p-10 lg:!pb-20 ">
                                    <p className="small white semibold title">Solutions</p>
                                    <div className="links">
                                        <Link
                                            href={"/"}
                                            className="footer-link"
                                        >
                                            Use Cases
                                        </Link>
                                        <Link
                                            href={"/"}
                                            className="footer-link"
                                        >
                                            Pricing
                                        </Link>
                                        <Link
                                            href={"/"}
                                            className="footer-link"
                                        >
                                            Contact Us
                                        </Link>
                                        <Link
                                            href={"/"}
                                            className="footer-link"
                                        >
                                            Book a Demo
                                        </Link>
                                        <Link href={"/"} className="footer-link">
                                            Partner With Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom border-t border-[#383838] p-10 flex gap-6 flex-col md:flex-row text-center lg:text-auto justify-between gap-6">
                        <p className="white opacity-60">
                            © {new Date().getFullYear()} JumboTiger. All rights reserved.
                        </p>
                        <p className="white opacity-60">
                            Built by operators, for operators.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
