import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const SquaresIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'squares-icon-tile-gradient',
    ariaLabel = 'Squares',
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
                <path d="M3.5 3.5H17.5V17.5H3.5V3.5Z" fill={iconFill} />
                <path d="M10.5 10.5H24.5V24.5H10.5V10.5Z" fill={iconFill} />
                <path d="M10.5 10.5H17.5V17.5H10.5V10.5Z" fill="white" />
            </svg>
        </span>
    )
}

export default SquaresIconTile
