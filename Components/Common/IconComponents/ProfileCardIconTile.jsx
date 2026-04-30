import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const ProfileCardIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'profile-card-icon-tile-gradient',
    ariaLabel = 'Profile card',
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
                    d="M28.7578 1.73828C30.4146 1.73841 31.7578 3.08151 31.7578 4.73828V35.2617C31.7578 36.9185 30.4146 38.2616 28.7578 38.2617H11.2422C9.58539 38.2617 8.24219 36.9185 8.24219 35.2617V4.73828C8.24219 3.08147 9.58539 1.73835 11.2422 1.73828H28.7578ZM20.4016 21.1459C19.5129 21.1459 18.6327 21.3211 17.8115 21.6611C16.9904 22.0013 16.244 22.5003 15.6155 23.1287C14.987 23.7573 14.4881 24.5035 14.1479 25.3247C13.5862 26.6809 14.8227 27.9148 16.2906 27.9148H24.5127C25.9805 27.9148 27.2171 26.6809 26.6553 25.3247C26.3152 24.5035 25.8163 23.7573 25.1877 23.1287C24.5592 22.5002 23.8129 22.0013 22.9917 21.6611C22.1706 21.3211 21.2904 21.1459 20.4016 21.1459ZM20.4016 10.3882C17.9001 10.3882 15.8721 12.4156 15.8719 14.9171C15.8719 17.4188 17.9 19.4469 20.4016 19.4469C22.9033 19.4468 24.9314 17.4188 24.9314 14.9171C24.9312 12.4156 22.9032 10.3882 20.4016 10.3882Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default ProfileCardIconTile
