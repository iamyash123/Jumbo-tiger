import React from 'react'
const WorkIcons = ({ type }) => {
    const icons = {
        discovery: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path d="M26.5175 19.8935V23.8935C26.519 24.2648 26.4429 24.6324 26.2942 24.9726C26.1454 25.3128 25.9272 25.6182 25.6536 25.8693C25.38 26.1203 25.0569 26.3114 24.7052 26.4304C24.3534 26.5494 23.9807 26.5936 23.6108 26.5601C19.5079 26.1143 15.5668 24.7123 12.1042 22.4668C8.88259 20.4197 6.15127 17.6884 4.10416 14.4668C1.85079 10.9884 0.44848 7.02812 0.0108223 2.9068C-0.0224971 2.53809 0.0213222 2.16648 0.139489 1.81563C0.257657 1.46478 0.447583 1.14238 0.697177 0.868957C0.94677 0.595533 1.25056 0.377075 1.58921 0.227492C1.92786 0.0779087 2.29394 0.000477909 2.66416 0.00012927H6.66416C7.31123 -0.00623932 7.93854 0.222901 8.42917 0.644839C8.9198 1.06678 9.24026 1.65272 9.33082 2.29346C9.49965 3.57355 9.81276 4.83043 10.2642 6.04013C10.4435 6.51736 10.4824 7.03602 10.376 7.53464C10.2697 8.03326 10.0226 8.49094 9.66416 8.85346L7.97082 10.5468C9.8689 13.8849 12.6328 16.6487 15.9708 18.5468L17.6642 16.8535C18.0267 16.495 18.4844 16.2479 18.983 16.1416C19.4816 16.0352 20.0003 16.0741 20.4775 16.2535C21.6872 16.7049 22.9441 17.018 24.2242 17.1868C24.8718 17.2782 25.4634 17.6044 25.8862 18.1035C26.309 18.6025 26.5337 19.2396 26.5175 19.8935Z" fill="black" />
                </svg>
            </>
        ),
        module: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M31.5055 18.278L21.4836 21.6819L18.0789 31.7038L10.8992 11.0976L31.5055 18.278Z" fill="black" />
                    <path d="M11.4984 1.896C16.6916 1.8961 20.9014 6.10601 20.9016 11.2991C20.9016 11.8253 20.8581 12.3418 20.775 12.8444L15.6555 11.0608C15.5317 8.87232 13.7179 7.13516 11.4984 7.13506C10.2626 7.13506 9.15247 7.67382 8.38986 8.52881C8.37051 8.5505 8.35094 8.57234 8.33204 8.59443C7.70986 9.32202 7.33446 10.2667 7.33439 11.2991C7.33439 13.3256 8.78178 15.0139 10.6992 15.3866L12.532 20.6468C12.1927 20.6839 11.8477 20.703 11.4984 20.703C6.30514 20.703 2.09454 16.4924 2.09454 11.2991C2.0947 6.10595 6.30524 1.896 11.4984 1.896Z" fill="black" />
                </svg>
            </>
        ),
        customization: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M16.825 6.18807C16.5615 6.45685 16.4139 6.81822 16.4139 7.19458C16.4139 7.57095 16.5615 7.93231 16.825 8.20109L19.1256 10.5017C19.3943 10.7651 19.7557 10.9127 20.1321 10.9127C20.5084 10.9127 20.8698 10.7651 21.1386 10.5017L26.5593 5.08092C27.2824 6.67866 27.5013 8.45881 27.1869 10.1841C26.8726 11.9094 26.0399 13.498 24.7998 14.738C23.5597 15.9781 21.9712 16.8108 20.2459 17.1252C18.5206 17.4395 16.7404 17.2206 15.1427 16.4976L5.20698 26.4333C4.63496 27.0053 3.85914 27.3266 3.05018 27.3266C2.24122 27.3266 1.4654 27.0053 0.893377 26.4333C0.321357 25.8613 0 25.0854 0 24.2765C0 23.4675 0.321357 22.6917 0.893377 22.1197L10.8291 12.184C10.106 10.5862 9.88713 8.8061 10.2015 7.08078C10.5158 5.35547 11.3485 3.76693 12.5886 2.52686C13.8287 1.28679 15.4172 0.454095 17.1425 0.139738C18.8678 -0.174618 20.648 0.0442959 22.2457 0.767307L16.8393 6.1737L16.825 6.18807Z" fill="black" />
                </svg>
            </>
        ),
        golive: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.8415 26.9446H22.539V12.5034L7.20716 27.8353L4.16516 24.7933L19.4963 9.46144H5.05591V5.15894H24.6903C25.8782 5.15912 26.8415 6.1222 26.8415 7.31019V26.9446Z" fill="black" />
                </svg>
            </>
        ),
    }

    return (
        <span className="flex size-16 items-center justify-center rounded-xl bg-white shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]">

            {icons[type]}
        </span>
    )
}
const steps = [
    {
        icon: 'discovery',
        title: 'Discovery Call',
        description:
            'We learn about your properties, workflows, pain points, and what modules you need. No two operators are the same.',
    },
    {
        icon: 'module',
        title: 'Module Selection',
        description:
            'Pick from our library of 26 pre-built modules. We map each one to your specific operational requirements.',
    },
    {
        icon: 'customization',
        title: 'Customization',
        description:
            'We tailor workflows, branding, roles, integrations, and business rules to match how you actually operate.',
    },
    {
        icon: 'golive',
        title: 'Go Live',
        description:
            'Your custom PMS is deployed, your team is trained, and ongoing support begins. You are live in 30 days.',
    },
]

const HowItWorks = () => {
    return (
        <section className="bg-[#F9FAFB]">
            <div className="container">
                <div className="border-x border-[#E5E7EB]">
                    <div className="border-b border-[#EDEDED] px-5 py-10 text-center">
                        <h2 className="bold">
                            HOW IT WORKS
                        </h2>
                        <p className="!mt-3 large grey">
                            From Discovery to Go-Live in 30 Days
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {steps.map((step) => (
                            <article
                                className="relative min-h-[260px] overflow-hidden border-b border-r border-[#e5e7eb] px-5 md:px-10 pb-10 lg:pb-20 pt-62.5 text-center last:border-r-0 xl:border-b-0"
                                key={step.title}
                            >
                                <div className="absolute left-1/2 top-[-70px] h-[238px] w-full -translate-x-1/2 rounded-b-[999px] border border-dashed border-[#d9dde3]" />
                                <div className="absolute left-1/2 top-33 z-10 -translate-x-1/2">
                                    <WorkIcons type={step.icon} />
                                </div>

                                <h6 className="text-center font-semibold">
                                    {step.title}
                                </h6>
                                <p className="!mt-3">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
