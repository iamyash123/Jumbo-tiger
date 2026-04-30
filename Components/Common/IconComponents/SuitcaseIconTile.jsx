import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const SuitcaseIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'suitcase-icon-tile-gradient',
    ariaLabel = 'Suitcase',
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
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.7021 1.79443C27.359 1.79443 28.7021 3.13761 28.7021 4.79443V10.8999H28.7178C30.3745 10.8999 31.7176 12.2432 31.7178 13.8999V32.1021C31.7178 33.7589 30.3746 35.1021 28.7178 35.1021H27.7861C27.8796 35.3524 27.9336 35.6228 27.9336 35.9058C27.9334 37.1761 26.9032 38.2054 25.6328 38.2056C24.3623 38.2056 23.3323 37.1762 23.332 35.9058C23.332 35.6228 23.386 35.3524 23.4795 35.1021H17.1826C17.276 35.3524 17.3301 35.6228 17.3301 35.9058C17.3298 37.1761 16.2997 38.2055 15.0293 38.2056C13.7588 38.2056 12.7287 37.1762 12.7285 35.9058C12.7285 35.6228 12.7825 35.3524 12.876 35.1021H11.2822C9.62537 35.1021 8.28223 33.7589 8.28223 32.1021V13.8999C8.28236 12.2432 9.62545 10.8999 11.2822 10.8999H11.2969V4.79443C11.2969 3.13769 12.6402 1.79457 14.2969 1.79443H25.7021ZM14.2969 9.8999C14.2969 10.4522 14.7446 10.8999 15.2969 10.8999H24.7021C25.2544 10.8999 25.7021 10.4522 25.7021 9.8999V4.79443H14.2969V9.8999Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default SuitcaseIconTile
