import React from 'react'

const defaultStats = [
    { value: '92%', label: 'Resident app adoption' },
    { value: '3X', label: 'Faster lease processing' },
    { value: '40%', label: 'More community engagement' },
    { value: '30', label: 'Days to go live' },
]

const Stats = ({ stats = defaultStats }) => {
    return (
        <section className='bg-[#F3F4F6]'>
            <div className="container">
                <div className="grid grid-cols-2  lg:grid-cols-4">
                    {stats.map((item) => (
                        <div key={`${item.value}-${item.label}`} className='p-5 md:p-10 border border-[#E5E7EB]'>
                            <h2 className="bold">{item.value}</h2>
                            <p className="!mt-1 large grey">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
