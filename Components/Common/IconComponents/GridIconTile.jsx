import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const GridIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    shadowClass = '',
    iconColor = null,
    iconGradient = [['9.90272%', '#FFF'], ['100%', '#BB94FF']],
    gradientId = 'grid-icon-tile-gradient',
    ariaLabel = 'Grid',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} x1="18.88" y1="-1.7566" x2="18.88" y2="26.0099" />
                <path d="M14.6069 29.3446H4.16943V18.9079H14.6069V29.3446Z" fill={iconFill} />
                <path d="M27.8304 26.7797H17.3937V16.343H27.8304V26.7797Z" fill={iconFill} />
                <path d="M14.6069 15.6571H4.16943V5.22036H14.6069V15.6571Z" fill={iconFill} />
                <path d="M27.8304 13.0922H17.3937V2.65552H27.8304V13.0922Z" fill={iconFill} />
            </svg>
        </span>
    )
}

export default GridIconTile
