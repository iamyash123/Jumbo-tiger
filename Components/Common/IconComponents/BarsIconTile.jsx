import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const BarsIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'bars-icon-tile-gradient',
    ariaLabel = 'Bars',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} />
                <path d="M2.81641 25.8755H28.3822V32.7489H2.81641V25.8755Z" fill={iconFill} />
                <path d="M11.8476 16.5634H33.4885V23.4368H11.8476V16.5634Z" fill={iconFill} />
                <path d="M23.6209 7.25116H37.1832V14.1245H23.6209V7.25116Z" fill={iconFill} />
            </svg>
        </span>
    )
}

export default BarsIconTile
