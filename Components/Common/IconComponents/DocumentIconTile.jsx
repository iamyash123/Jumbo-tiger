import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const DocumentIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-black',
    shadowClass = '',
    iconColor = null,
    iconGradient = [['9.90272%', '#FFF'], ['100%', '#BB94FF']],
    gradientId = 'document-icon-tile-gradient',
    ariaLabel = 'Document',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} x1="18.6432" y1="-2.23381" x2="18.6432" y2="26.2788" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.8571 7.54844V29.7031H5.14307V2.29688H20.629L26.8571 7.54844ZM9.22744 16.632V19.3805H17.7892V16.632H9.22744ZM9.22744 12.0898V14.8383H21.1728V12.0898H9.22744Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default DocumentIconTile
