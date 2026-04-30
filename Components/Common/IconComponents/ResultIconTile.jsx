import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const ResultIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    iconColor = null,
    iconGradient = ['white', '#BB94FF', 'white'],
    gradientId = 'result-icon-gradient',
    ariaLabel = 'Result',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M27.7486 24.9649H30.9466V27.3598H1.05347V24.9649H4.25154V16.0003H11.165V24.9649H12.5428V11.5373H19.4568V24.9649H20.8346V4.64026H27.7486V24.9649Z"
                    fill={iconFill}
                />
                <IconGradient id={gradientId} stops={iconGradient} />
            </svg>
        </span>
    )
}

export default ResultIconTile
