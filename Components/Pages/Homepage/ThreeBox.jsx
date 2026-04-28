import React from 'react'

const ThreeBoxIcon = ({ type }) => {
    const icons = {
        problem: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 1.99146C23.7365 1.99151 30.0085 8.26351 30.0086 16C30.0085 23.7366 23.7365 30.0086 16 30.0086C8.26347 30.0086 1.99147 23.7366 1.99141 16C1.99146 8.26351 8.26346 1.99151 16 1.99146ZM13.9775 19.6187V23.238H18.0225V19.6187H13.9775ZM13.9775 17.384H18.0225V8.76289H13.9775V17.384Z" fill="url(#paint0_linear_608_157)" />
                    <defs>
                        <linearGradient id="paint0_linear_608_157" x1="3.98194" y1="0.564769" x2="30.0086" y2="32.9576" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="0.5" stopColor="#BB94FF" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>
            </>
        ),
        approach: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_608_64)">
                        <path d="M21.0292 12.4114H18.1981V20.2576C19.8846 19.0536 21.9459 18.3423 24.1657 18.3423H25.2848V15.5653L32 20.5114L25.2848 25.5091V22.6825H24.1657C21.5685 22.6825 17.4612 23.7572 16.2103 26.361C14.588 23.5894 11.1239 22.6825 8.1125 22.6825H6.99339V25.5091L0.278137 20.5114L6.99339 15.5653V18.3423H8.1125C10.3323 18.3423 12.3935 19.0536 14.08 20.2576V12.4114H11.249L16.1391 5.81812L21.0292 12.4114Z" fill="url(#paint0_linear_608_64)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_608_64" x1="2.53187" y1="4.77204" x2="18.5354" y2="35.5291" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="0.5" stopColor="#BB94FF" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <clipPath id="clip0_608_64">
                            <rect width="32" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </>
        ),
        result: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M27.7486 24.9649H30.9466V27.3598H1.05347V24.9649H4.25154V16.0003H11.165V24.9649H12.5428V11.5373H19.4568V24.9649H20.8346V4.64026H27.7486V24.9649Z" fill="url(#paint0_linear_608_361)" />
                    <defs>
                        <linearGradient id="paint0_linear_608_361" x1="3.17728" y1="3.48334" x2="22.4036" y2="34.968" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="0.5" stopColor="#BB94FF" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>
            </>
        ),
    }

    return (
        <span className="flex size-16 items-center justify-center rounded-xl bg-black">

            {icons[type]}
        </span>
    )
}

const useCasesData = [
    {
        icon: 'problem',
        title: "The Problem",
        desc: "Generic PMS tools weren't built for coliving. Shared rooms, flexible stays, per-bed billing, community events, B2B channel managers — they can't handle it. So you end up with spreadsheets filling the gaps."
    },
    {
        icon: 'approach',
        title: "Our Approach",
        desc: "We don't sell you a login to a SaaS. We build you a fully custom PMS from 26 pre-built modules — configured to your exact workflows, branding, and business rules. No compromises."
    },
    {
        icon: 'result',
        title: "The Result",
        desc: "A production-ready, fully branded PMS live in 30 days. Your operations team stops fighting the software and starts using it. Occupancy goes up. Overhead goes down."
    }

];
const ThreeBox = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {useCasesData.map((item, index) => (
                        <div key={index} className='flex flex-col gap-6 lg:gap-10 padding-80 px-5 lg:px-10 border border-[#E5E7EB]'>
                            <ThreeBoxIcon type={item.icon} />
                            <div>
                                <h6 className="semibold">{item.title}</h6>
                                <p className="!mt-4 grey">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThreeBox
