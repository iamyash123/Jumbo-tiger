import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const ApproachIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    iconColor = null,
    iconGradient = ['white', '#BB94FF', 'white'],
    gradientId = 'approach-icon-gradient',
    ariaLabel = 'Approach',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clipPath={`url(#${gradientId}-clip)`}>
                    <path
                        d="M21.0292 12.4114H18.1981V20.2576C19.8846 19.0536 21.9459 18.3423 24.1657 18.3423H25.2848V15.5653L32 20.5114L25.2848 25.5091V22.6825H24.1657C21.5685 22.6825 17.4612 23.7572 16.2103 26.361C14.588 23.5894 11.1239 22.6825 8.1125 22.6825H6.99339V25.5091L0.278137 20.5114L6.99339 15.5653V18.3423H8.1125C10.3323 18.3423 12.3935 19.0536 14.08 20.2576V12.4114H11.249L16.1391 5.81812L21.0292 12.4114Z"
                        fill={iconFill}
                    />
                </g>
                <defs>
                    <clipPath id={`${gradientId}-clip`}>
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
                <IconGradient id={gradientId} stops={iconGradient} />
            </svg>
        </span>
    )
}

export default ApproachIconTile
