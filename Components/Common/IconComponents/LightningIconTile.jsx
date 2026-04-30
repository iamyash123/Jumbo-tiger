import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const LightningIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'lightning-icon-tile-gradient',
    ariaLabel = 'Lightning',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 28 28" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} />
                <path
                    d="M15.8613 1.8667L4.66675 15.3067H14.7467L12.1387 26.1334L23.3334 12.6934H13.2534L15.8613 1.8667Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default LightningIconTile
