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
            title: "Smart Application Pipeline",
            description:
                "Capture every lead from every channel and move them through a configurable pipeline with automated scoring, instant quote generation, and real-time status updates.",
            points: [
                "Centralized lead inbox from web forms, OTAs, WhatsApp, email, and partner channels",
                "Instant quote portal: enquiry-to-quote in under 60 seconds with live availability",
                "Automated applicant scoring (1-10) with auto-categorization: Approved, Medium, Rejected",
                "Team notes, internal comments, and collaboration per applicant",
            ],
            image: "/images/buildscale.webp",
        },
        {
            title: "Online Check-In & Self-Service Arrival",
            description:
                "Let residents complete their entire check-in before they arrive. Pre-arrival data collection, ID verification, deposit payment, and access code delivery -- all automated.",
            points: [
                "Pre-arrival online check-in: ID upload, travel docs, emergency contacts",
                "Automated deposit and first rent collection during check-in flow",
                "Access code and smart lock credentials delivered automatically on check-in date",
                "Upsell add-on services during check-in: cleaning, parking, gym membership",
                "Branded local attraction guides and neighborhood information",
                "Self-service kiosk mode for staffed reception areas"
            ],
            image: "/images/module-banner.webp",
        },
        {
            title: "Smart Application Pipeline",
            description:
                "Capture every lead from every channel and move them through a configurable pipeline with automated scoring, instant quote generation, and real-time status updates.",
            points: [
                "Centralized lead inbox from web forms, OTAs, WhatsApp, email, and partner channels",
                "Instant quote portal: enquiry-to-quote in under 60 seconds with live availability",
                "Automated applicant scoring (1-10) with auto-categorization: Approved, Medium, Rejected",
                "Team notes, internal comments, and collaboration per applicant",
            ],
            image: "/images/buildscale.webp",
        },
    ]

const ModuleGrid = ({ items = defaultItems }) => {

    return (
        <>
            {items.map((item, index) => {
                const isReverse = index % 2 !== 0;

                return (
                    <section
                        key={index}
                        className={index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}
                    >
                        <div className="container">
                            <div className="flex flex-col lg:flex-row border-x border-[#EDEDED] border-b last:border-b-0">

                                {/* LEFT CONTENT */}
                                <div
                                    className={`lg:w-1/2 padding-80 my-auto px-5  lg:px-20 ${isReverse ? "lg:order-2" : ""
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

export default ModuleGrid;
