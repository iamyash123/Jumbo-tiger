import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const GraduateIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    shadowClass = '',
    iconColor = null,
    iconGradient = [['-6.23%', '#FFF'], ['87.51%', '#BB94FF']],
    gradientId = 'graduate-icon-tile-gradient',
    capColor = 'white',
    capGradient = null,
    ariaLabel = 'Graduate',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    const capFill = getIconFill(capColor, capGradient, `${gradientId}-cap`)
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} x1="18.9908" y1="-1.9259" x2="18.9908" y2="26.1055" />
                <IconGradient id={`${gradientId}-cap`} stops={capGradient} />
                <path d="M16.583 2.52832L27.7539 6.09734L16.2312 9.97571L3.87392 6.09734L16.583 2.52832Z" fill={capGradient ? capFill : iconFill} />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.6161 12.7363L8.47759 10.0636C8.36212 10.5871 8.30125 11.5633 8.30125 12.1215C8.30125 16.2706 11.6648 19.6341 15.8139 19.6341C19.963 19.6341 23.3265 16.2706 23.3265 12.1215C23.3265 11.6029 23.274 10.6644 23.1739 10.1754L16.2533 12.937L15.6161 12.7363Z" fill={iconFill} />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.25578 18.8342C7.6623 19.2558 7.10375 19.7274 6.58653 20.2446C5.37476 21.4564 4.41354 22.895 3.75774 24.4782C3.10194 26.0614 2.7644 27.7584 2.7644 29.472H28.8635C28.8635 27.7584 28.526 26.0614 27.8702 24.4782C27.2144 22.895 26.2531 21.4564 25.0414 20.2446C24.5407 19.7439 24.0013 19.286 23.4289 18.8747L18.0671 23.1743C16.9289 24.0871 15.3174 24.1143 14.149 23.2406L8.25578 18.8342Z" fill={iconFill} />
            </svg>
        </span>
    )
}

export default GraduateIconTile
