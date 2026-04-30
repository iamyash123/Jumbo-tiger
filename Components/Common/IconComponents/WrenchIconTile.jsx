import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const WrenchIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'wrench-icon-tile-gradient',
    ariaLabel = 'Wrench',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 44 44" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} />
                <path
                    d="M36.7434 14.1282C37.6524 17.8754 36.6589 21.9935 33.7628 24.8895C30.2722 28.3802 25.1107 29.1091 20.9134 27.0763L9.9296 38.0601C8.36796 39.6218 5.8353 39.6218 4.27366 38.0601C2.71202 36.4985 2.71202 33.9658 4.27366 32.4042L15.2575 21.4204C13.2247 17.2231 13.9536 12.0616 17.4442 8.57098C20.3403 5.67491 24.4584 4.68142 28.2056 5.59041L21.775 12.021L29.8109 20.0569L36.7434 14.1282Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default WrenchIconTile
