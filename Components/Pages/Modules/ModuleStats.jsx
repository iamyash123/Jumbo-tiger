import React from 'react'

const ModuleStats = ({ stats = defaultStats }) => {
    return (
        <section className='bg-[#F3F4F6]'>
            <div className="container">
                <div className="grid grid-cols-2  lg:grid-cols-4">
                    {stats.map((item) => (
                        <div key={`${item.value}-${item.label}`} className='padding-80 px-5 md:px-10 border border-[#E5E7EB]'>
                            <h2 className="bold">{item.value}</h2>
                            <p className="!mt-1 large grey">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ModuleStats
