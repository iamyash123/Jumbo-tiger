import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const EyeOffIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    shadowClass = '',
    iconColor = null,
    iconGradient = [['9.90272%', '#FFF'], ['100%', '#BB94FF']],
    gradientId = 'eye-off-icon-tile-gradient',
    ariaLabel = 'Hidden',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} x1="19.0317" y1="0.437383" x2="19.0317" y2="24.7729" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2644 8.61929C11.905 7.6284 13.8238 6.94327 16 6.94327C23.9246 6.94327 28.453 15.9999 28.453 15.9999C28.453 15.9999 26.7631 19.3715 23.646 22.0009L27.6957 26.0505L26.0506 27.6956L21.7356 23.3806C20.0951 24.3715 18.1763 25.0566 16 25.0566C8.07546 25.0566 3.54712 15.9999 3.54712 15.9999C3.54712 15.9999 5.23592 12.6273 8.35295 9.99791L4.30442 5.94938L5.94948 4.30432L10.2644 8.61929ZM11.9858 13.6308C11.5751 14.325 11.339 15.1349 11.339 15.9999C11.339 18.5741 13.4258 20.661 16 20.661C16.865 20.661 17.6739 20.4236 18.3681 20.0131L11.9858 13.6308ZM16 11.3389C15.135 11.3389 14.3251 11.575 13.6309 11.9857L20.0132 18.368C20.4237 17.6738 20.6611 16.8649 20.6611 15.9999C20.6611 13.4257 18.5743 11.3389 16 11.3389Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default EyeOffIconTile
