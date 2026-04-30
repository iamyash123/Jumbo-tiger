import React from 'react'

const IconTile = ({
    className = '',
    sizeClass = 'size-[64px]',
    radiusClass = 'rounded-[12px]',
    backgroundClass = 'bg-black',
    circleClass = 'bg-[linear-gradient(135deg,#E9D8FF_0%,#B994FF_100%)]',
    iconColorClass = 'text-black',
    iconGradientClass = '',
    ariaLabel = 'Important',
}) => {
    const iconClass = iconGradientClass
        ? `${iconGradientClass} bg-clip-text text-transparent`
        : iconColorClass

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <span className={`flex size-[32] items-center justify-center rounded-full ${circleClass}`}>
                <span className={`text-[22px] font-black leading-none ${iconClass}`}>!</span>
            </span>
        </span>
    )
}

export default IconTile
