"use client";

import React from "react";
import Image from "next/image";
const Icon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
const defaultItems = [
        {
            title: "Build a Thriving Community Through Your Software",
            description:
                "Coliving thrives on community. JumboTiger gives you events, social feeds, and engagement tools built into the resident experience.",
            points: [
                "Create and promote community events with RSVP tracking",
                "Community feed and announcements in the resident app",
                "Resident directory with opt-in profiles and interests",
                "In-app messaging between residents and management",
                "Polls and surveys for resident feedback",
                "Attendance tracking and engagement analytics",
            ],
            image: "/images/buildscale.webp",
        },
        {
            title: "Flexible Leasing That Matches How Residents Actually Live",
            description:
                "Rolling monthly contracts, all-inclusive pricing, and the flexibility your residents expect, without manual work.",
            points: [
                "Rolling monthly contracts with configurable notice periods",
                "All-inclusive billing covering rent, utilities, and services",
                "Automated invoicing adapted to your pricing model",
                "Digital contracts with e-signature integration",
                "Configurable contract terms per property or room type",
                "Automated renewal workflows and communications",
            ],
            image: "/images/module-banner.webp",
        },
        {
            title: "Per-Bed Inventory That Coliving Demands",
            description:
                "Track individual beds within shared rooms with independent pricing, tenant assignment, and availability..",
            points: [
                "Per-bed, per-room, and per-unit inventory tracking",
                "Shared room management with individual resident profiles",
                "Real-time availability across all properties",
                "Room swap and transfer management",
                "Occupancy forecasting based on lease end dates",
                "Floor plan visualization and building hierarchy",
            ],
            image: "/images/hero-banner.webp",
        },
        {
            title: "Smart Shared Space Management, Zero Double-Bookings",
            description:
                "Coworking, laundry, gym, rooftop - your shared spaces need smart management.",
            points: [
                "Configurable bookable spaces with real-time availability",
                "Time-slot management with booking rules per facility",
                "Paid service bookings (cleaning, laundry, coworking)",
                "Capacity limits and usage analytics",
                "Resident self-service booking via mobile app",
                "Automated confirmation and reminder notifications",
            ],
            image: "/images/buildscale.webp",
        },
        {
            title: "A Branded App Residents Actually Want to Use",
            description:
                "A mobile experience that matches your brand. Pay rent, book spaces, RSVP to events, and connect with the community.",
            points: [
                "Fully branded iOS and Android app with your identity",
                "Rent payment and invoice history at their fingertips",
                "Facility booking, event RSVP, and community features",
                "Maintenance ticket submission with photo upload",
                "Push notifications for all key lifecycle events",
                "AI chatbot for instant answers to common questions",
            ],
            image: "/images/module-banner.webp",
        },
        {
            title: "Onboarding That Converts Applicants in 24 Hours",
            description:
                "Place the right people together from day one. JumboTiger's housemate matching engine pairs residents based on lifestyle, preferences, and personality for happier, longer-staying communities.",
            points: [
                "Compatibility questionnaire built into the application flow",
                "Algorithm-driven matching based on sleep schedule, cleanliness, and social preferences",
                "Operator override with manual matching and drag-and-drop room assignment",
                "Compatibility score visible to ops team before placement",
                "Resident profile cards with interests and bio for community discovery",
                "Post-placement satisfaction tracking to improve matching over time",
            ],
            image: "/images/hero-banner.webp",
        },
        {
            title: "Visitor Management and QR Access Passes",
            description:
                "Keep your community safe without the hassle of manual sign-in sheets. Residents invite guests through the app and visitors get a time-limited QR pass for entry.",
            points: [
                "Residents pre-register visitors via the mobile app",
                "Automatic QR code generation with configurable time windows",
                "Integration with SALTO and access control hardware for seamless entry",
                "Complete visitor log with check-in and check-out timestamps",
                "Overnight guest policies enforced automatically per property rules",
                "Real-time notifications to property staff when visitors arrive",
            ],
            image: "/images/hero-banner.webp",
        },
        {
            title: "Food and Meal Management for Coliving",
            description:
                "Many coliving spaces offer communal dining or meal plans. JumboTiger lets you manage meal subscriptions, dietary preferences, and catering logistics from one dashboard.",
            points: [
                "Configurable meal plans with add-on pricing per resident",
                "Dietary preference and allergy tracking per profile",
                "Daily headcount forecasting for catering teams",
                "Meal opt-in and opt-out via the resident app",
                "Automated billing for meal plan charges on the monthly invoice",
                "Communal kitchen booking for self-catered properties",
            ],
            image: "/images/hero-banner.webp",
        },
        {
            title: "Housekeeping Automation for Shared Spaces",
            description:
                "Coliving properties have communal areas that need frequent, scheduled cleaning. Automate housekeeping across every shared kitchen, bathroom, and common area.",
            points: [
                "Recurring housekeeping schedules for communal areas and private rooms",
                "Mobile staff app for task assignment, completion, and photo verification",
                "Real-time task dashboard for property managers",
                "Resident satisfaction ratings per cleaning session",
                "Inventory tracking for cleaning supplies and consumables",
                "Vendor coordination for deep cleans and specialist services",
            ],
            image: "/images/hero-banner.webp",
        },
    ]

const UsecaseGrid = ({ items = defaultItems }) => {

    return (
        <>
            {items.map((item, index) => {
                const isReverse = index % 2 !== 0;

                return (
                    <section key={index}
                        className={index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                        <div className="container">
                            <div
                                className={`flex flex-col lg:flex-row border-x border-[#EDEDED] border-b last:border-b-0"
                                    }`}
                            >
                                {/* LEFT CONTENT */}
                                <div
                                    className={`lg:w-1/2 padding-80 my-auto px-5 lg:px-10 lg:px-20 ${isReverse ? "lg:order-2" : ""
                                        }`}
                                >
                                    <h2 className="bold">{item.title}</h2>
                                    <p className="mt-3!">{item.description}</p>
                                    {/* ✅ POINTS */}
                                    {item.points && (
                                        <ul className="mt-6">
                                            {item.points.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 py-2"
                                                >
                                                    <div className="p-2 rounded-full border border-[#E5E7EB] bg-[#F9FAFB]">
                                                        <Icon />
                                                    </div>
                                                    <p>{point}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* RIGHT CONTENT */}
                                <div
                                    className={`lg:w-1/2 padding-80 px-5 lg:px-10 flex items-center justify-center border-[#EDEDED] 
    ${index % 2 === 0 ? "border-l" : "border-r"} 
    ${isReverse ? "lg:order-1" : ""}`}
                                >
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={500}
                                            height={400}
                                            loading="lazy"
                                            className="w-full h-auto object-contain"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default UsecaseGrid;
