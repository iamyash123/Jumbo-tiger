import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const CursorTargetIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'cursor-target-icon-tile-gradient',
    ariaLabel = 'Cursor target',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 30 30" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} />
                <path
                    d="M29.4109 16.382L19.3891 19.7859L15.9844 29.8078L8.80469 9.20156L29.4109 16.382Z"
                    fill={iconFill}
                />
                <path
                    d="M9.40391 0C14.597 0.000107202 18.8069 4.21002 18.807 9.40312C18.807 9.92934 18.7636 10.4458 18.6805 10.9484L13.5609 9.16484C13.4371 6.97633 11.6234 5.23917 9.40391 5.23906C8.16808 5.23906 7.05793 5.77782 6.29531 6.63281C6.27597 6.6545 6.25639 6.67635 6.2375 6.69844C5.61532 7.42602 5.23991 8.37075 5.23984 9.40312C5.23984 11.4296 6.68724 13.1179 8.60469 13.4906L10.4375 18.7508C10.0981 18.7879 9.75314 18.807 9.40391 18.807C4.2106 18.807 0 14.5964 0 9.40312C0.000156677 4.20995 4.21069 0 9.40391 0Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default CursorTargetIconTile
