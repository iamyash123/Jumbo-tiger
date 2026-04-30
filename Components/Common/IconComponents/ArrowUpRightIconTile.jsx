import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const ArrowUpRightIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'arrow-up-right-icon-tile-gradient',
    ariaLabel = 'Arrow up right',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 28 28" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} />
                <path
                    d="M23.3334 4.66663V21H20.0001V10.3575L6.69093 23.6666L4.33337 21.309L17.6425 7.99996H7.00004V4.66663H23.3334Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default ArrowUpRightIconTile
