import React from 'react'
import GradientStepMark from '@/Components/Common/Gradientstepmark';
const useCasesData = [
    {
        title: "Coliving",
        desc: "Per-bed billing, community management, flexible stays, and shared space operations."
    },
    {
        title: "Built to Rent",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation."
    },
    {
        title: "Flex Living",
        desc: "Applications, housemate matching, digital contracts, e-signatures, ID verification, welcome packs, and move-in automation."
    }

];
const ThreeBox = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {useCasesData.map((item, index) => (
                        <div key={index} className='flex flex-col gap-6 lg:gap-10 padding-80 px-5 lg:px-10 border border-[#E5E7EB]'>
                            <GradientStepMark />
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
