import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const HouseIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    shadowClass = '',
    iconColor = null,
    iconGradient = [['-6.23%', '#FFF'], ['87.51%', '#BB94FF']],
    gradientId = 'house-icon-gradient',
    dotColor = 'black',
    dotGradient = null,
    ariaLabel = 'House',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    const dotFill = getIconFill(dotColor, dotGradient, `${gradientId}-dot`)

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path
                    d="M10.5 19.25L21 9.625L31.5 19.25V33.25H10.5V19.25Z"
                    fill={iconFill}
                />
                <circle cx="16.625" cy="22.75" r="3.0625" fill={dotFill} />
                <circle cx="25.375" cy="22.75" r="3.0625" fill={dotFill} />
                <circle cx="21" cy="29.75" r="3.0625" fill={dotFill} />
                <IconGradient id={gradientId} stops={iconGradient} x1="0" y1="0" x2="0" y2="42" />
                <IconGradient id={`${gradientId}-dot`} stops={dotGradient} />
            </svg>
        </span>
    )
}

export default HouseIconTile
