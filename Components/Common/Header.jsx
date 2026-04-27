"use client";
import Image from "next/image";
import "@/public/styles/header.scss";
import "@/public/styles/button.scss";
import Logo from "@/public/images/header-logo.svg";
import RightArrow from "@/public/images/arrow-right-header.svg";
import LeftArrow from "@/public/images/arrow-left-header.svg";
import Rightup from "@/public/images/arrow-right-up.svg";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import StepMark from "./StepMark";
import { DropDownArrow } from "./MenuIcon";


const Header = () => {
    const pathname = usePathname();
    useEffect(() => {
        if (typeof window === "undefined") return;

        /* =====================================================
         * SAFE SCROLL RESET ON ROUTE CHANGE
         * ===================================================== */
        window.scrollTo({ top: 0, behavior: "auto" });

        /* =====================================================
         * MOBILE SLIDING NAVIGATION
         * ===================================================== */
        const mobile = document.querySelector(".mobile");
        const panels = document.querySelectorAll(".mobile .next-step");
        const navLinksWrapper = document.querySelector(".nav-links");
        const navBtn = document.querySelector(".nav-btn");
        const checkbox = document.getElementById("check");

        const panelMap = {
            "services-link": "services-content",
            "industries-link": "industries-content",
            "resources-link": "resources-content",
            "insights-link": "insights-content",
            "tools-link": "tool-content",
            "work-link": "work-content",
        };

        let panelHistory = [];

        function openPanel(id, fromBack = false) {
            const panel = document.getElementById(id);
            if (!panel) return;

            if (!fromBack) panelHistory.push(id);

            mobile?.classList.add("slide-left");
            panels.forEach((p) => p.classList.remove("active-panel"));
            panel.classList.add("active-panel");

            navLinksWrapper?.classList.add("sub-open");
            navBtn?.classList.add("nav-btn-active");
        }

        function resetPanels() {
            mobile?.classList.remove("slide-left");
            panels.forEach((p) => p.classList.remove("active-panel"));
            navLinksWrapper?.classList.remove("sub-open");
            navBtn?.classList.remove("nav-btn-active");
            panelHistory = [];
        }

        function closePanel() {
            resetPanels();

            if (checkbox) checkbox.checked = false;
            document.body.classList.remove("nav-open");

            panelHistory = [];
        }

        Object.keys(panelMap).forEach((id) => {
            const link = document.getElementById(id);
            link?.addEventListener("click", (e) => {
                e.preventDefault();
                openPanel(panelMap[id]);
            });
        });

        const backButtons = document.querySelectorAll(".next-step .top a");
        backButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                panelHistory.pop();
                const previous = panelHistory[panelHistory.length - 1];
                previous ? openPanel(previous, true) : resetPanels();
            });
        });

        /* =====================================================
         * DESKTOP DROPDOWNS
         * ===================================================== */
        const allNavLinks = document.querySelectorAll(".desktop .nav-link");

        const closeAll = () => {
            allNavLinks.forEach((li) => {
                li.classList.remove("dropdown-open");
                li.querySelector(".desk-link")?.classList.remove("active");
            });

            document
                .querySelector(".country-drop")
                ?.classList.remove("dropdown-open");
        };

        const handleNavClick = (e) => {
            const trigger = e.target.closest(
                ".desk-link.capabilities, .desk-link.industries, .desk-link.resources, .country-drop"
            );

            if (!trigger) return;

            e.preventDefault();
            e.stopPropagation();

            const parent =
                trigger.closest(".nav-link") ||
                trigger.closest(".country-drop");

            if (!parent) return;

            const isOpen = parent.classList.contains("dropdown-open");

            closeAll();

            if (!isOpen) {
                parent.classList.add("dropdown-open");
                parent.querySelector(".desk-link")?.classList.add("active");
            }
        };

        const handleOutsideClick = (e) => {
            if (e.target.closest(".nav-link, .country-drop")) return;
            closeAll();
        };

        document.addEventListener("click", handleNavClick);
        document.addEventListener("click", handleOutsideClick);

        /* =====================================================
         * 🔥 FIX: CLOSE DROPDOWN BEFORE NEXT ROUTE LOADS
         * ===================================================== */
        const handleAnyLinkClick = (e) => {
            const link = e.target.closest("a");
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href || href === "#") return;

            closeAll();
            closePanel();
        };

        // Use CAPTURE phase so it runs before Next.js navigation
        document.addEventListener("click", handleAnyLinkClick, true);

        /* =====================================================
         * HEADER SCROLL BEHAVIOR
         * ===================================================== */
        const header = document.querySelector(".nbd-header");
        const techWrapper = document.querySelector(".mobile-tech");

        if (!header) return;

        header.classList.remove("hide");
        techWrapper?.classList.remove("top-position");
        closeAll();
        closePanel();

        let lastScrollY = 0;

        const isCaseStudyPage = pathname.startsWith("/case-studies/");
        const isPortfolioPage = pathname === "/portfolio";

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isMobile = window.innerWidth <= 1050;

            // ==========================================
            // ✅ PORTFOLIO PAGE → NEVER HIDE (ALL SCREENS)
            // ==========================================
            if (isPortfolioPage) {
                header.classList.remove("hide");
                techWrapper?.classList.remove("top-position");
                lastScrollY = currentScrollY;
                return;
            }

            // ==========================================
            // ✅ CASE STUDY → STRICT 85vh (ALL SCREENS)
            // ==========================================
            if (isCaseStudyPage) {
                const threshold = window.innerHeight * 0.85;

                if (currentScrollY > threshold) {
                    header.classList.add("hide");
                    techWrapper?.classList.add("top-position");
                    closeAll();
                    closePanel();
                } else {
                    header.classList.remove("hide");
                    techWrapper?.classList.remove("top-position");
                }

                lastScrollY = currentScrollY;
                return;
            }

            // ==========================================
            // 📱 OTHER PAGES → 400px (MOBILE ONLY)
            // ==========================================
            if (isMobile) {
                const threshold = 400;

                if (currentScrollY > threshold) {
                    header.classList.add("hide");
                    techWrapper?.classList.add("top-position");
                    closeAll();
                    closePanel();
                } else {
                    header.classList.remove("hide");
                    techWrapper?.classList.remove("top-position");
                }
            } else {
                // Desktop other pages → always visible
                header.classList.remove("hide");
                techWrapper?.classList.remove("top-position");
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        /* =====================================================
         * CLEANUP
         * ===================================================== */
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleNavClick);
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener(
                "click",
                handleAnyLinkClick,
                true
            );
        };
    }, [pathname]);


    return (
        <header className="nbd-header">
            <div className="container" id="main-container">
                <div className="px-5 md:px-10 flex justify-between head-inner items-center border-x border-[#E5E7EB] w-full max-w-[1432px] mx-auto">
                    <input type="checkbox" name="check" id="check" />
                    <div className="logo-container">
                        <div className="flex gap-3 md:gap-4 items-center">
                            <Link href={"/"}>
                                <Image src={Logo} alt="Jumbo-Tiger logo" className="logo" style={{ width: "auto", height: "auto" }} />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <div className="nav-links ">
                            <ul className="desktop">
                                <li className="nav-link services">
                                    <a className="desk-link capabilities">
                                        Modules
                                        <DropDownArrow />
                                    </a>
                                    <div className="capability-dropdown  !py-10 scrollbar-hide">
                                        <div className="container">
                                            <div className="dropdown-inner w-full">
                                                <div className="grid grid-cols-3">
                                                    <Link
                                                        href={"/booking-onboarding"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Booking & Onboarding</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Payments and Rent</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Tenant Portal</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Inventory & Occupancy</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Community & Events</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Visitor Management</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Access Control</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Facility Booking</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Housekeeping</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Maintenance</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Channel Manager</p>
                                                    </Link>
                                                    <Link
                                                        href={"/"}
                                                        className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                    >
                                                        <StepMark size={42} />
                                                        <p className="bold">Revenue Management</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-link  services">
                                    <Link href="/usecases/coliving" className="industries">
                                        Use cases
                                        {/* <DropDownArrow /> */}
                                    </Link>
                                    {/* <div className="!pt-10 !pb-20 dropdown">
                                        <div className="container !justify-center">
                                            <div className="dropdown-inner">
                                                <div className="industries-grid">
                                                    <Link
                                                        href={"/real-estate-software-development-company"}
                                                        className="industries-item"
                                                    >
                                                        <div className="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="48"
                                                                height="48"
                                                                viewBox="0 0 48 48"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M7.5 46.125V15.9375"
                                                                    stroke="black"
                                                                    strokeWidth="2"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M40.5 15.9375V46.125"
                                                                    stroke="black"
                                                                    strokeWidth="2"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M46.125 20.625L24 1.875L1.875 20.625"
                                                                    stroke="black"
                                                                    strokeWidth="2"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M7.5 46.125H40.5"
                                                                    stroke="black"
                                                                    strokeWidth="2"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <rect
                                                                    x="17.2788"
                                                                    y="22.667"
                                                                    width="13.4422"
                                                                    height="13.4422"
                                                                    stroke="black"
                                                                    strokeWidth="2"
                                                                    strokeMiterlimit="10"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="bold">PropTech & Real Estate</p>
                                                            <p className="lightgrey small !mt-0.5">
                                                                Built a marketplace for seamless property
                                                                discovery
                                                            </p>
                                                        </div>
                                                    </Link>

                                                    <Link
                                                        href={"/e-commerce-software-development-company"}
                                                        className="industries-item"
                                                    >
                                                        <div className="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="48"
                                                                height="48"
                                                                viewBox="0 0 48 48"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M16.4688 19.4813V8.93747C16.4688 4.77816 19.8405 1.40625 24 1.40625C28.1595 1.40625 31.5312 4.77816 31.5312 8.93747V19.4813"
                                                                    stroke="black"
                                                                    strokeWidth="2"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M39.0625 14.9624C39.0625 14.9624 41.9191 34.9612 43.0902 43.1551C43.2136 44.0196 42.9561 44.8952 42.3837 45.5549C41.8113 46.2146 40.9813 46.5937 40.1077 46.5937H7.89209C7.01853 46.5937 6.18847 46.2147 5.61612 45.5549C5.04378 44.8952 4.78615 44.0196 4.90962 43.1551C6.08084 34.9612 8.9374 14.9624 8.9374 14.9624H39.0625Z"
                                                                    stroke="black"
                                                                    strokeWidth="2"
                                                                    strokeMiterlimit="10"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="bold">E-Commerce</p>
                                                            <p className="lightgrey small !mt-0.5">
                                                                We optimize checkout and conversion journeys.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        href={
                                                            "/insurance-fintech-software-development-company"
                                                        }
                                                        className="industries-item"
                                                    >
                                                        <div className="img">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="48"
                                                                height="48"
                                                                viewBox="0 0 48 48"
                                                                fill="none"
                                                            >
                                                                <g clipPath="url(#clip0_11835_2976)">
                                                                    <path
                                                                        d="M19.5322 27.77C19.5322 29.8521 21.2201 31.54 23.3023 31.54H24.6982C26.7803 31.54 28.4682 29.8521 28.4682 27.77C28.4682 25.6879 26.7803 23.9999 24.6982 23.9999H23.3023C21.2201 23.9999 19.5322 22.312 19.5322 20.2299C19.5322 18.1478 21.2201 16.4598 23.3023 16.4598H24.6982C26.7803 16.4598 28.4682 18.1478 28.4682 20.2299"
                                                                        stroke="black"
                                                                        strokeWidth="2"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M24 12.2378V16.46"
                                                                        stroke="black"
                                                                        strokeWidth="2"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M24 31.5406V35.7627"
                                                                        stroke="black"
                                                                        strokeWidth="2"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M46.5937 24C46.5937 36.4782 36.4782 46.5938 24 46.5938C11.5218 46.5938 1.40625 36.4782 1.40625 24C1.40625 11.5218 11.5218 1.40626 24 1.40626C36.4782 1.40626 46.5937 11.5218 46.5937 24Z"
                                                                        stroke="black"
                                                                        strokeWidth="2"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M24 40.9688C14.6434 40.9688 7.03125 33.3566 7.03125 24C7.03125 14.6434 14.6434 7.03125 24 7.03125C33.3566 7.03125 40.9688 14.6434 40.9688 24C40.9688 33.3566 33.3566 40.9688 24 40.9688Z"
                                                                        stroke="black"
                                                                        strokeWidth="2"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_11835_2976">
                                                                        <rect width="48" height="48" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="bold">FinTech & Insurance</p>
                                                            <p className="lightgrey small !mt-0.5">
                                                                We build secure, scalable digital flows.
                                                            </p>
                                                        </div>
                                                    </Link>

                                                    <Link
                                                        href={
                                                            "/retail-software-development-company"
                                                        }
                                                        className="industries-item"
                                                    >
                                                        <div className="img">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                                <path d="M40.0357 19.261V37.1785C40.0357 39.1428 38.4286 40.75 36.4644 40.75H7.89293C5.92862 40.75 4.32157 39.1428 4.32157 37.1785V19.3215M9.32148 10.75V15.0356M9.32148 15.0356C9.32148 17.4026 11.2403 19.3214 13.6071 19.3214C15.9741 19.3214 17.8929 17.4026 17.8929 15.0356M9.32148 15.0356C9.32148 17.4026 7.40271 19.3214 5.03571 19.3214C2.66879 19.3214 0.75 17.4026 0.75 15.0356V10.75L2.62611 4.18417C3.16582 2.29525 5.21433 0.75 7.17864 0.75H37.1785C39.1427 0.75 41.1912 2.29525 41.731 4.18417L43.607 10.75V15.0356C43.607 17.4026 41.6883 19.3214 39.3212 19.3214C36.9544 19.3214 35.0356 17.4026 35.0356 15.0356M17.8929 15.0356V10.75M17.8929 15.0356C17.8929 17.4026 19.8117 19.3214 22.1785 19.3214C24.5454 19.3214 26.4642 17.4026 26.4642 15.0356M26.4642 15.0356V10.75M26.4642 15.0356C26.4642 17.4026 28.383 19.3214 30.75 19.3214C33.1168 19.3214 35.0356 17.4026 35.0356 15.0356M35.0356 15.0356V10.75M1.17864 10.75H43.1785" stroke="#1F1F1F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="bold">Retail</p>
                                                            <p className="lightgrey small !mt-0.5">
                                                                We enhance shopping and product experience flows.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </li>
                                <li className="nav-link  services  country-drop ">
                                    <a className="desk-link resources tool">
                                        Pricing
                                        <DropDownArrow />
                                    </a>
                                    <div className="country-dropdown scrollbar-hide">
                                        <div className="country-inner">
                                            <div className="country-col">
                                                <Link href={"/portfolio"}>
                                                    <div className="flex gap-3 items-center">
                                                        <p className="small">Portfolio</p>
                                                    </div>
                                                    {/* <Image src={RightArrow} alt="" aria-hidden="true" className="arrow" /> */}
                                                </Link>
                                                <Link href={"/case-studies"}>
                                                    <div className="flex gap-3 items-center">
                                                        <p className="small">Case Studies</p>
                                                    </div>
                                                    {/* <Image src={RightArrow} alt="" aria-hidden="true" className="arrow" /> */}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-link  services">
                                    <a className="desk-link resources">
                                        Resources
                                        <DropDownArrow />
                                    </a>
                                    <div className="!pt-10 !pb-20 dropdown">
                                        <div className="container !justify-center !items-start gap-30">
                                            <div className="flex flex-col gap-6">
                                                {/* <h4 className="bold text-nowrap">Our Resources</h4> */}
                                                <Link
                                                    href={"/blogs"}
                                                    className="industries-item flex gap-4 items-center"
                                                >
                                                    <div className="img">
                                                        {/* <BlogsIcon /> */}
                                                    </div>
                                                    <div>
                                                        <p className="bold">Blogs</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="mobile">
                                <li className="nav-link services">
                                    <Link href={"#"} id="services-link">
                                        Modules
                                        <Image src={RightArrow} alt="" aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link href={"/usecases"}>
                                        Usecases
                                        <Image src={RightArrow} alt="" aria-hidden="true" />
                                    </Link>
                                </li>

                                <li className="nav-link work">
                                    <Link href={"#"} id="work-link">
                                        Pricing
                                        <Image src={RightArrow} alt="" aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className="nav-link resources">
                                    <Link href={"#"} id="resources-link">
                                        Resources
                                        <Image src={RightArrow} alt="" aria-hidden="true" />
                                    </Link>
                                </li>


                                <div
                                    className="next-step"
                                    id="resources-content"

                                >
                                    <div className="top">
                                        <Link href={"#"} className="flex gap-2 items-center justify-between w-full">
                                            <Image src={LeftArrow} alt="" aria-hidden="true" />
                                            Resources
                                            <div className="w-[30px]"></div>
                                        </Link>
                                    </div>

                                    <div className="inner">
                                        <div className="capability-link">
                                            <Link
                                                href={"/blogs"}
                                                className="flex items-center gap-4 pl-2 pr-5 py-4 border-b border-[#D9D9D9]"
                                            >
                                                <p className="small flex justify-between items-center w-full">
                                                    Blogs
                                                </p>
                                                <Image src={Rightup} alt="" aria-hidden="true" />
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="next-step"
                                    id="industries-content"

                                >
                                    <div className="top">
                                        <Link href={"#"} className="flex gap-2 items-center justify-between w-full">
                                            Industries
                                            <div className="w-[30px]"></div>
                                        </Link>
                                    </div>
                                    <div className="inner">
                                        <div className="industries-grid">
                                            <Link
                                                href={"/real-estate-software-development-company"}
                                                className="industries-item"
                                            >
                                                <div>
                                                    {/* <RealEstateIcon /> */}
                                                </div>
                                                <div>
                                                    <h6 className="bold">PropTech & Real Estate</h6>
                                                    <p className="lightgrey !mt-0.5">
                                                        Built a marketplace for seamless property discovery
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link
                                                href={"/e-commerce-software-development-company"}
                                                className="industries-item"
                                            >
                                                <div>
                                                    {/* <ECommerceIcon /> */}
                                                </div>
                                                <div>
                                                    <h6 className="bold">E-Commerce</h6>
                                                    <p className="lightgrey !mt-0.5">
                                                        We optimize checkout and conversion journeys.
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link
                                                href={"/insurance-fintech-software-development-company"}
                                                className="industries-item"
                                            >
                                                <div>
                                                    {/* <FinTechIcon /> */}
                                                </div>
                                                <div>
                                                    <h6 className="bold">FinTech & Insurance </h6>
                                                    <p className="lightgrey !mt-0.5">
                                                        We build secure, scalable digital flows.
                                                    </p>
                                                </div>
                                            </Link>

                                            <Link
                                                href={"/retail-software-development-company"}
                                                className="industries-item"
                                            >
                                                <div>
                                                    {/* <RetailIcon /> */}
                                                </div>
                                                <div>
                                                    <h6 className="bold">Retail</h6>
                                                    <p className="lightgrey !mt-0.5">
                                                        We enhance shopping and product experience flows.
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                <div
                                    className="next-step"
                                    id="services-content"
                                >
                                    <div className="top">
                                        <Link href={"#"} className="flex gap-2 items-center justify-between w-full">
                                            <Image src={LeftArrow} alt="" aria-hidden="true" />
                                            Modules
                                            <div className="w-[30px]"></div>
                                        </Link>
                                    </div>

                                    <div className="inner">
                                        <div className="capability-link">
                                            <Link
                                                href={"/ui-ux-design-branding-services"}
                                                className="flex items-center gap-4 pl-2 pr-5 py-4 border-b border-[#D9D9D9]"
                                            >
                                                <StepMark size={32} />
                                                <p className="small flex justify-between items-center w-full">
                                                    Booking & Onboarding
                                                </p>
                                                <Image src={Rightup} alt="" aria-hidden="true" />
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                {/* --- COMPANY DROPDOWN --- */}
                                <div
                                    className="next-step"
                                    id="insights-content"

                                >
                                    <div className="top">
                                        <Link href={"#"} className="flex gap-2 items-center">
                                            {/* <Image src={LeftArrow} alt="" aria-hidden="true" /> */}
                                            Company
                                        </Link>
                                    </div>
                                    <div className="inner">
                                        <div className="link-box">
                                            <div className="all-links">
                                                <Link href={"/about-us"}>
                                                    <div className="top-link">
                                                        About us
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="link-box">
                                            <div className="all-links">
                                                <Link href={"/career"}>
                                                    <div className="top-link">
                                                        Career
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="cta-desktop">
                            <Link href={"/bookdemo"} className="primary-btn">
                                Book a demo
                            </Link>
                        </div>
                    </div>
                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div className="w-[30px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
