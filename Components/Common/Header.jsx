"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "@/public/styles/header.scss";
import "@/public/styles/button.scss";
import Logo from "@/public/images/header-logo.svg";
import RightArrow from "@/public/images/arrow-right-header.svg";
import LeftArrow from "@/public/images/arrow-left-header.svg";
import Rightup from "@/public/images/arrow-right-up.svg";
import StepMark from "./StepMark";
import { DropDownArrow } from "./MenuIcon";
import { modulesData } from "@/data/modulesData";
import { usecasesData } from "@/data/usecasesData";

const moduleLinks = Object.entries(modulesData).map(([slug, data]) => ({
    title: data.banner?.title || slug,
    href: `/modules/${slug}`,
}));

const usecaseLinks = Object.entries(usecasesData).map(([slug, data]) => ({
    title: data.banner?.eyebrow || data.banner?.title || slug,
    description: data.banner?.description || "",
    href: `/usecases/${slug}`,
}));

const Header = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") return;

        window.scrollTo({ top: 0, behavior: "auto" });

        const mobile = document.querySelector(".mobile");
        const panels = document.querySelectorAll(".mobile .next-step");
        const navLinksWrapper = document.querySelector(".nav-links");
        const navBtn = document.querySelector(".nav-btn");
        const checkbox = document.getElementById("check");

        const panelMap = {
            "services-link": "services-content",
            "industries-link": "industries-content",
            "resources-link": "resources-content",
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

        const handleAnyLinkClick = (e) => {
            const link = e.target.closest("a");
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href || href === "#") return;

            closeAll();
            closePanel();
        };

        document.addEventListener("click", handleAnyLinkClick, true);

        const header = document.querySelector(".nbd-header");
        const techWrapper = document.querySelector(".mobile-tech");

        if (!header) return;

        header.classList.remove("hide");
        techWrapper?.classList.remove("top-position");
        closeAll();
        closePanel();

        const isCaseStudyPage = pathname.startsWith("/case-studies/");
        const isPortfolioPage = pathname === "/portfolio";

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isMobile = window.innerWidth <= 1050;

            if (isPortfolioPage) {
                header.classList.remove("hide");
                techWrapper?.classList.remove("top-position");
                return;
            }

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

                return;
            }

            if (isMobile && currentScrollY > 400) {
                header.classList.add("hide");
                techWrapper?.classList.add("top-position");
                closeAll();
                closePanel();
            } else {
                header.classList.remove("hide");
                techWrapper?.classList.remove("top-position");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleNavClick);
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("click", handleAnyLinkClick, true);
        };
    }, [pathname]);

    return (
        <header className="nbd-header">
            <div className="container" id="main-container">
                <div className="px-5 md:px-10 flex justify-between head-inner items-center border-x border-[#E5E7EB] w-full max-w-[1432px] mx-auto">
                    <input type="checkbox" name="check" id="check" />
                    <div className="logo-container">
                        <div className="flex gap-3 md:gap-4 items-center">
                            <Link href="/">
                                <Image src={Logo} alt="Jumbo-Tiger logo" className="logo" style={{ width: "auto", height: "auto" }} />
                            </Link>
                        </div>
                    </div>

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul className="desktop">
                                <li className="nav-link services">
                                    <a className="desk-link capabilities">
                                        Modules
                                        <DropDownArrow />
                                    </a>
                                    <div className="capability-dropdown !py-10 scrollbar-hide">
                                        <div className="container">
                                            <div className="dropdown-inner w-full">
                                                <div className="grid grid-cols-3">
                                                    {moduleLinks.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="flex gap-4 items-center p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]"
                                                        >
                                                            <StepMark size={42} />
                                                            <p className="bold">{item.title}</p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-link services">
                                    <a className="desk-link industries">
                                        Use cases
                                        <DropDownArrow />
                                    </a>
                                    <div className="!pt-10 !pb-20 dropdown">
                                        <div className="container !justify-center">
                                            <div className="dropdown-inner">
                                                <div className="industries-grid">
                                                    {usecaseLinks.map((item) => (
                                                        <Link key={item.href} href={item.href} className="industries-item">
                                                            <div>
                                                                <p className="bold">{item.title}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-link services country-drop">
                                    <a className="desk-link resources tool">
                                        Pricing
                                        <DropDownArrow />
                                    </a>
                                    <div className="country-dropdown scrollbar-hide">
                                        <div className="country-inner">
                                            <div className="country-col">
                                                <Link href="/portfolio">
                                                    <div className="flex gap-3 items-center">
                                                        <p className="small">Portfolio</p>
                                                    </div>
                                                </Link>
                                                <Link href="/case-studies">
                                                    <div className="flex gap-3 items-center">
                                                        <p className="small">Case Studies</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-link services">
                                    <a className="desk-link resources">
                                        Resources
                                        <DropDownArrow />
                                    </a>
                                    <div className="!pt-10 !pb-20 dropdown">
                                        <div className="container !justify-center !items-start gap-30">
                                            <div className="flex flex-col gap-6">
                                                <Link href="/blogs" className="industries-item flex gap-4 items-center">
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
                                    <Link href="#" id="services-link">
                                        Modules
                                        <Image src={RightArrow} alt="" aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link href="#" id="industries-link">
                                        Usecases
                                        <Image src={RightArrow} alt="" aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className="nav-link work">
                                    <Link href="#" id="work-link">
                                        Pricing
                                        <Image src={RightArrow} alt="" aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className="nav-link resources">
                                    <Link href="#" id="resources-link">
                                        Resources
                                        <Image src={RightArrow} alt="" aria-hidden="true" />
                                    </Link>
                                </li>

                                <MobilePanel id="services-content" title="Modules">
                                    <div className="capability-link">
                                        {moduleLinks.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-center gap-4 pl-2 pr-5 py-4 border-b border-[#D9D9D9]"
                                            >
                                                <StepMark size={32} />
                                                <p className="small flex justify-between items-center w-full">
                                                    {item.title}
                                                </p>
                                                <Image src={Rightup} alt="" aria-hidden="true" />
                                            </Link>
                                        ))}
                                    </div>
                                </MobilePanel>

                                <MobilePanel id="industries-content" title="Usecases">
                                    <div className="industries-grid">
                                        {usecaseLinks.map((item) => (
                                            <Link key={item.href} href={item.href} className="industries-item">
                                                <div>
                                                    <h6 className="bold">{item.title}</h6>
                                                    <p className="lightgrey !mt-0.5">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </MobilePanel>

                                <MobilePanel id="work-content" title="Pricing">
                                    <div className="capability-link">
                                        <Link href="/portfolio" className="flex items-center gap-4 pl-2 pr-5 py-4 border-b border-[#D9D9D9]">
                                            <p className="small flex justify-between items-center w-full">Portfolio</p>
                                            <Image src={Rightup} alt="" aria-hidden="true" />
                                        </Link>
                                        <Link href="/case-studies" className="flex items-center gap-4 pl-2 pr-5 py-4 border-b border-[#D9D9D9]">
                                            <p className="small flex justify-between items-center w-full">Case Studies</p>
                                            <Image src={Rightup} alt="" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </MobilePanel>

                                <MobilePanel id="resources-content" title="Resources">
                                    <div className="capability-link">
                                        <Link href="/blogs" className="flex items-center gap-4 pl-2 pr-5 py-4 border-b border-[#D9D9D9]">
                                            <p className="small flex justify-between items-center w-full">Blogs</p>
                                            <Image src={Rightup} alt="" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </MobilePanel>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="cta-desktop">
                            <Link href="/bookdemo" className="primary-btn">
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

const MobilePanel = ({ id, title, children }) => (
    <div className="next-step" id={id}>
        <div className="top">
            <Link href="#" className="flex gap-2 items-center justify-between w-full">
                <Image src={LeftArrow} alt="" aria-hidden="true" />
                {title}
                <div className="w-[30px]"></div>
            </Link>
        </div>
        <div className="inner">{children}</div>
    </div>
);

export default Header;
