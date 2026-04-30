import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const DatabaseIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'database-icon-tile-gradient',
    ariaLabel = 'Database',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} />
                <ellipse cx="16" cy="7" rx="12" ry="4.5" fill={iconFill} />
                <path d="M4 11.5C6.2 13.4 10.7 14.5 16 14.5C21.3 14.5 25.8 13.4 28 11.5V13.6C28 16.1 22.6 18.2 16 18.2C9.4 18.2 4 16.1 4 13.6V11.5Z" fill={iconFill} />
                <path d="M4 17.4C6.2 19.3 10.7 20.4 16 20.4C21.3 20.4 25.8 19.3 28 17.4V19.5C28 22 22.6 24.1 16 24.1C9.4 24.1 4 22 4 19.5V17.4Z" fill={iconFill} />
                <path d="M4 23C6.2 25.1 10.7 26.2 16 26.2C21.3 26.2 25.8 25.1 28 23V25.6C28 28.1 22.6 30.2 16 30.2C9.4 30.2 4 28.1 4 25.6V23Z" fill={iconFill} />
            </svg>
        </span>
    )
}

export default DatabaseIconTile
