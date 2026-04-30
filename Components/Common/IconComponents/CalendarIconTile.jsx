import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const CalendarIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'calendar-icon-tile-gradient',
    ariaLabel = 'Calendar',
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
                <path d="M12.8799 22C14.7263 22.0002 16.2236 23.4973 16.2236 25.3438C16.2235 27.1901 14.7262 28.6873 12.8799 28.6875C11.0333 28.6875 9.53623 27.1903 9.53613 25.3438C9.53613 23.4971 11.0333 22 12.8799 22Z" fill={iconFill} />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.04 34.0439C36.0399 36.2529 34.2489 38.0437 32.04 38.0439H7.95996C5.75094 38.0439 3.96006 36.253 3.95996 34.0439V17.0234H36.04V34.0439ZM12.8799 20C9.92871 20 7.53613 22.3926 7.53613 25.3438L7.54297 25.6182C7.68128 28.3506 9.87216 30.5421 12.6045 30.6807L12.8799 30.6875C15.7388 30.6873 18.0739 28.4416 18.2168 25.6182L18.2236 25.3438C18.2236 22.4848 15.9777 20.1499 13.1543 20.0068L12.8799 20Z"
                    fill={iconFill}
                />
                <path d="M29.2119 1.95605C29.9611 1.95605 30.5684 2.56336 30.5684 3.3125V5.16211H32.04C34.2489 5.16231 36.0399 6.9532 36.04 9.16211V15.0137H3.95996V9.16211C3.96009 6.95312 5.75096 5.16218 7.95996 5.16211H9.27637V3.3125C9.27637 2.56336 9.88367 1.95605 10.6328 1.95605C11.382 1.95605 11.9893 2.56336 11.9893 3.3125V5.16211H27.8555V3.3125C27.8555 2.56336 28.4628 1.95605 29.2119 1.95605Z" fill={iconFill} />
            </svg>
        </span>
    )
}

export default CalendarIconTile
