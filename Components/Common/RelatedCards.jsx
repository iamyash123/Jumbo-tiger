import React from 'react'
import Link from 'next/link'
import GradientStepMark from '@/Components/Common/IconComponents/Gradientstepmark'
import DynamicIconTile from '@/Components/Common/IconComponents/DynamicIconTile'
import { modulesData } from '@/data/modulesData'
import { usecasesData } from '@/data/usecasesData'

const getCardIcon = (icon) => {
    if (!icon || typeof icon === 'string') return icon

    const { className = '', ...iconProps } = icon.props || {}

    return {
        ...icon,
        props: {
            sizeClass: 'size-16',
            radiusClass: 'rounded-xl',
            backgroundClass: 'bg-black',
            shadowClass:'',
            iconColor: '',
            iconGradient: ['#FFFFFF', '#BB94FF', '#9B6CFF'],
            className,
            ...iconProps,
        },
    }
}

const getSelectedCards = (items = [], limit = 3) => {
    return items
        .map((item) => {
            const slug = item.slug || item.href?.split('/').filter(Boolean).pop()
            const type = item.type || (modulesData[slug] ? 'module' : 'usecase')

            if (type === 'usecase' && usecasesData[slug]) {
                const usecaseData = usecasesData[slug]

                return {
                    title: usecaseData.banner?.eyebrow || usecaseData.banner?.title,
                    desc: usecaseData.banner?.description,
                    icon: getCardIcon(usecaseData.banner?.icon),
                    href: `/usecases/${slug}`,
                }
            }

            if (modulesData[slug]) {
                const moduleData = modulesData[slug]

                return {
                    title: moduleData.banner?.title,
                    desc: moduleData.banner?.description,
                    icon: getCardIcon(moduleData.banner?.icon),
                    href: `/modules/${slug}`,
                }
            }

            return null
        })
        .filter(Boolean)
        .slice(0, limit)
}

const RelatedCards = ({ items = [], limit = 3 }) => {
    const cards = getSelectedCards(items, limit)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((item, index) => (
                <div key={`${item.href}-${index}`} className="padding-80 px-5 lg:px-10 border border-[#E5E7EB]">
                    {item.icon ? (
                        <DynamicIconTile icon={item.icon} />
                    ) : (
                        <GradientStepMark />
                    )}
                    <div className="mt-6 lg:mt-10">
                        <h6 className="semibold">{item.title}</h6>
                        <p className="!mt-4 grey">{item.desc}</p>
                    </div>
                    <Link href={item.href || '/'} className="outline-btn w-fit mt-6">Learn more</Link>
                </div>
            ))}
        </div>
    )
}

export default RelatedCards
