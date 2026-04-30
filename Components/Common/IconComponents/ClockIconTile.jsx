import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const ClockIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    shadowClass = '',
    iconColor = null,
    iconGradient = [['-6.23%', '#FFF'], ['87.51%', '#BB94FF']],
    gradientId = 'clock-icon-gradient',
    handColor = 'black',
    handGradient = null,
    ariaLabel = 'Clock',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    const handStroke = getIconFill(handColor, handGradient, `${gradientId}-hand`)

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="8" y="8" width="26" height="26" rx="6" fill={iconFill} />
                <path
                    d="M21 14.5V22L16.5 26.5"
                    stroke={handStroke}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <IconGradient id={gradientId} stops={iconGradient} x1="0" y1="0" x2="0" y2="42" />
                <IconGradient id={`${gradientId}-hand`} stops={handGradient} />
            </svg>
        </span>
    )
}

export default ClockIconTile
