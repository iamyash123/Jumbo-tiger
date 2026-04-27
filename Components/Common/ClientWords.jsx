"use client";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@/public/styles/home.scss";
import Image from "next/image";
import Quoteicon from '@/public/images/quote.svg'

const testimonials = [
    {
        quote:
            "We used to spend 3-4 days onboarding each new resident. With JumboTiger, it's done in under 2 hours. The housemate matching alone has cut our early move-outs by 40%.",
        name: "Sarah Chen",
        role: "Operations Director, Urban Coliving London",
    },
    {
        quote:
            "JumboTiger gave our team one clean place for enquiries, contracts, payments, and support. The rollout felt fast without feeling rushed.",
        name: "Michael Ross",
        role: "Founder, Haven House",
    },
    {
        quote:
            "The best part is that it works the way our buildings work. We are not forcing coliving operations into generic property software anymore.",
        name: "Amara Singh",
        role: "Portfolio Manager, Shared Living Group",
    },
];

const ClientWords = () => {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const swiperRef = useRef(null);

    const updateButtonState = useCallback((swiper) => {
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        if (!prevButton || !nextButton) return;

        prevButton.classList.toggle("custom-swiper-button-disabled", swiper.isBeginning);
        nextButton.classList.toggle("custom-swiper-button-disabled", swiper.isEnd);
        prevButton.disabled = swiper.isBeginning;
        nextButton.disabled = swiper.isEnd;
        prevButton.setAttribute("aria-disabled", String(swiper.isBeginning));
        nextButton.setAttribute("aria-disabled", String(swiper.isEnd));

        swiper.el
            ?.closest(".custom-swiper-outer")
            ?.classList.toggle("swiper-locked-nav", swiper.isLocked);
    }, []);

    const initializeNavigation = useCallback(() => {
        const swiper = swiperRef.current;
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        if (!swiper || !prevButton || !nextButton) return;

        swiper.params.navigation.prevEl = prevButton;
        swiper.params.navigation.nextEl = nextButton;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
        updateButtonState(swiper);
    }, [updateButtonState]);

    const handleSwiper = useCallback(
        (swiper) => {
            swiperRef.current = swiper;
            requestAnimationFrame(initializeNavigation);
        },
        [initializeNavigation]
    );

    return (
        <section className="bg-[#000] client-words">
            <div className="container">
                <div className="flex flex-col lg:flex-row border-x border-[#383838]">
                    <div className="lg:w-1/2 px-5 md:px-10 lg:px-20 mt-15 lg:mt-0 flex items-center min-h-full relative">
                        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:8px_8px]" />

                        <div className="absolute inset-0 bg-[linear-gradient(16deg,rgba(0,0,0,0)_13.11%,#000_51.9%)]" />
                        <div className="relative z-2">
                            <h2 className="bold white">CLIENT WORDS</h2>
                            <p className="white opacity-80 !mt-3">
                                26 battle-tested modules covering the full resident lifecycle, from first application to move-out and beyond.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 px-5 md:px-10 padding-120-80 lg:border-l border-[#383838]">
                        <div className="custom-swiper-outer relative h-full flex flex-col justify-between">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={16}
                                navigation
                                modules={[Navigation]}
                                onSwiper={handleSwiper}
                                onInit={handleSwiper}
                                onSlideChange={updateButtonState}
                                onReachBeginning={updateButtonState}
                                onReachEnd={updateButtonState}
                                onFromEdge={updateButtonState}
                                onResize={updateButtonState}
                                className="h-full w-full"
                            >
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide className="!h-auto my-auto" key={testimonial.name}>
                                        <Image src={Quoteicon} alt="Quotricon" className="mb-6" loading="lazy" />
                                        <div className="flex flex-col justify-center">
                                            <p className="white large">{testimonial.quote}</p>
                                            <div className="mt-6">
                                                <p className="white opacity-80">{testimonial.name}</p>
                                                <p className="white !mt-1 opacity-80">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="flex items-center justify-end w-full mt-6">
                                <div className="custom-swiper-navigation flex gap-2 bg-[#1F1F1F] p-1 rounded-full">
                                    <button
                                        ref={prevButtonRef}
                                        className="custom-swiper-button-prev-2 rounded-full h-10 w-10 flex items-center justify-center bg-[#000] cursor-pointer"
                                        type="button"
                                        aria-label="Previous testimonial"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M18.5655 11.7266H4.8873" stroke="white" strokeWidth="1.95402" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.7217 4.88281L4.88263 11.7219L11.7217 18.561" stroke="white" strokeWidth="1.95402" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button
                                        ref={nextButtonRef}
                                        className="custom-swiper-button-next-2 rounded-full h-10 w-10 flex items-center justify-center bg-[#000] cursor-pointer"
                                        type="button"
                                        aria-label="Next testimonial"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M4.88578 11.7266H18.5639" stroke="white" strokeWidth="1.95402" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.7217 4.88281L18.5608 11.7219L11.7217 18.561" stroke="white" strokeWidth="1.95402" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientWords;
