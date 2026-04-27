import React from 'react'
import GradientStepMark from '@/Components/Common/Gradientstepmark'

const WhyJumbotiger = () => {
    return (
        <section className='bg-[#F9FAFB]'>
            <div className="container">
                <div className='border-x border-[#EDEDED] padding-80-40'>
                    <h2 className="bold text-center">
                        WHY JUMBOTIGER
                    </h2>
                    <p className="large grey text-center !mt-3">
                        Built Different for Property Operators
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

                    {/* Card 1 */}
                    <div className='padding-80 px-5 lg:px-10 border-t border-l border-[#E5E7EB] md:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r'>
                        <GradientStepMark />
                        <h5 className='!mt-10'>No Off-the-Shelf Compromise</h5>
                        <p className="!mt-4 grey">
                            Generic PMS tools force you to adapt your operations to their software. JumboTiger adapts the software to your operations. Every workflow, field, and rule can be customized.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='padding-80 px-5 lg:px-10 border-t border-l border-[#E5E7EB] md:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r'>
                        <GradientStepMark />
                        <h5 className='!mt-10'>Speed Without Sacrifice</h5>
                        <p className="!mt-4 grey">
                            Custom software usually means 6-12 months of development. Our modular architecture means you get truly custom results in just 30 days, because we&apos;ve already built the foundations.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className='padding-80 px-5 lg:px-10 border-t border-l border-[#E5E7EB] md:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r'>
                        <GradientStepMark />
                        <h5 className='!mt-10'>Scales With You</h5>
                        <p className="!mt-4 grey">
                            Start with the modules you need today, add more as you grow. Going from 1 property to 50? Our multi-property architecture handles it without breaking a sweat.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className='padding-80 px-5 lg:px-10 border-t border-l border-[#E5E7EB] md:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r'>
                        <GradientStepMark />
                        <h5 className='!mt-10'>Your Data, Your Platform</h5>
                        <p className="!mt-4 grey">
                            Unlike SaaS platforms where you&apos;re one of thousands of tenants, your JumboTiger instance is yours. Your data, your infrastructure, your control.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyJumbotiger