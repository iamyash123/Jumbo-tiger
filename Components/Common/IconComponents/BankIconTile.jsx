import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const BankIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    shadowClass = '',
    iconColor = null,
    iconGradient = [['-6.23%', '#FFF'], ['87.51%', '#BB94FF']],
    gradientId = 'bank-icon-tile-gradient',
    roofColor = 'white',
    roofGradient = null,
    ariaLabel = 'Bank',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    const roofFill = getIconFill(roofColor, roofGradient, `${gradientId}-roof`)
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} x1="19.0397" y1="-2.4723" x2="19.0397" y2="26.4135" />
                <IconGradient id={`${gradientId}-roof`} stops={roofGradient} />
                <path d="M26.747 27.4454H28.486V29.8826H3.5141V27.4454H5.25305V25.0074H26.747V27.4454Z" fill={iconFill} />
                <path d="M10.7435 22.7735H7.0563V15.0903H10.7435V22.7735Z" fill={iconFill} />
                <path d="M17.8436 22.7735H14.1557V15.0903H17.8436V22.7735Z" fill={iconFill} />
                <path d="M24.9437 22.7735H21.2558V15.0903H24.9437V22.7735Z" fill={iconFill} />
                <path d="M27.2688 8.98901V12.8564H4.48002V8.98901L15.8744 2.11768L27.2688 8.98901Z" fill={roofGradient ? roofFill : iconFill} />
            </svg>
        </span>
    )
}

export default BankIconTile
