'use client'
import React, { useState } from 'react'

const defaultFaqContent = {
  heading: 'FAQ',
  subtitle: 'Frequently Asked Questions',
  items: [
  {
    question: 'How does the housemate matching work?',
    answer:
      'Existing residents create opt-in profiles with their interests, lifestyle preferences, and schedule. When new applicants view a listing, they can see who already lives there and get a compatibility score based on shared preferences. Operators can also use matching to suggest optimal room allocations.',
  },
  {
    question: 'Can we customize the application pipeline stages?',
    answer:
      'Yes. The application pipeline can be configured around your intake, review, approval, deposit, contract, and move-in workflows.',
  },
  {
    question: 'Does Jumbo Tiger support bulk onboarding for student housing?',
    answer:
      'Yes. Operators can manage bulk applicant imports, grouped workflows, and repeatable onboarding steps for high-volume student housing cycles.',
  },
  {
    question: 'What ID verification methods are supported?',
    answer:
      'Supported verification methods can include document checks, identity details, residency information, and operator review workflows.',
  },
  {
    question: 'What ID verification methods are supported?',
    answer:
      'Verification flows can be adapted to the checks required by each property, market, and internal approval process.',
  },
  {
    question: 'Can residents check in online before arrival?',
    answer:
      'Yes. Residents can complete key pre-arrival tasks online so the on-site team has cleaner handoffs on move-in day.',
  },
  {
    question: 'Does the quote portal show live availability?',
    answer:
      'Yes. The quote portal can surface availability from configured property, room, and pricing data.',
  },
  ],
}

const ChevronIcon = ({ open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={open ? 'M3.5 8.75L7 5.25L10.5 8.75' : 'M3.5 5.25L7 8.75L10.5 5.25'}
        stroke="#111827"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const PageFaq = ({ content = defaultFaqContent }) => {
  const [openIndex, setOpenIndex] = useState(0)
  const { heading, subtitle, items } = content

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index))
  }

  return (
    <section className='bg-[#F9FAFB]'>
      <div className="container">
        <div className='border-x border-[#EDEDED]'>
          <div className="pt-12 pb-9">
            <h2 className="bold text-center !text-[25px] !leading-[1.1] !tracking-[0]">{heading}</h2>
            <p className='!mt-3 grey text-center !text-[15px]'>
              {subtitle}
            </p>
          </div>
          <div className="pt-10 pb-16 border-t border-[#EDEDED]">
            <div className="mx-auto max-w-[850px]">
              {items.map((faq, index) => {
                const isOpen = openIndex === index

                return (
                  <div key={`${faq.question}-${index}`} className='p-4 border border-transparent hover:bg-[#F3F4F6] hover:border-[#E5E7EB]'>
                    <button
                      type="button"
                      className="flex w-full  cursor-pointer justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => handleToggle(index)}
                    >
                      <p className="dark bold">
                        {faq.question}
                      </p>
                      <div>
                        <ChevronIcon open={isOpen} />
                      </div>
                    </button>
                    <div
                      className={`pr-4 grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="grey mt-2!">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageFaq
