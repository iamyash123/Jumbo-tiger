import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const CircleGridIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'circle-grid-icon-tile-gradient',
    ariaLabel = 'Circle grid',
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
                    d="M11.4258 20.916C15.704 21.1331 19.1064 24.6708 19.1064 29.0029L19.0957 29.4199C18.8786 33.6981 15.3409 37.1005 11.0088 37.1006L10.5918 37.0898C6.45157 36.8799 3.13199 33.5601 2.92188 29.4199L2.91113 29.0029C2.9112 24.5309 6.53672 20.9053 11.0088 20.9053L11.4258 20.916ZM11.0088 24.9053C8.74586 24.9053 6.9112 26.74 6.91113 29.0029C6.91123 31.2658 8.74588 33.1006 11.0088 33.1006C13.2716 33.1005 15.1063 31.2658 15.1064 29.0029C15.1064 26.7401 13.2716 24.9054 11.0088 24.9053Z"
                    fill={iconFill}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.4082 20.916C33.6864 21.1331 37.0888 24.6708 37.0889 29.0029L37.0781 29.4199C36.861 33.6981 33.3233 37.1005 28.9912 37.1006L28.5742 37.0898C24.4341 36.8798 21.1144 33.56 20.9043 29.4199L20.8936 29.0029C20.8936 24.531 24.5193 20.9054 28.9912 20.9053L29.4082 20.916ZM28.9912 24.9053C26.7284 24.9054 24.8936 26.7401 24.8936 29.0029C24.8937 31.2657 26.7284 33.1005 28.9912 33.1006C31.254 33.1005 33.0888 31.2658 33.0889 29.0029C33.0888 26.7401 31.2541 24.9054 28.9912 24.9053Z"
                    fill={iconFill}
                />
                <path d="M11.0088 2.89941C15.4808 2.89951 19.1064 6.52505 19.1064 10.9971C19.1064 15.4691 15.4808 19.0946 11.0088 19.0947C6.53668 19.0947 2.91113 15.4692 2.91113 10.9971C2.91117 6.52499 6.5367 2.89941 11.0088 2.89941Z" fill={iconFill} />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.4082 2.91016C33.6864 3.12727 37.0887 6.66499 37.0889 10.9971L37.0781 11.4141C36.861 15.6922 33.3233 19.0946 28.9912 19.0947L28.5742 19.084C24.4341 18.8739 21.1144 15.5542 20.9043 11.4141L20.8936 10.9971C20.8937 6.52515 24.5193 2.89955 28.9912 2.89941L29.4082 2.91016ZM28.9912 6.89941C26.7284 6.89955 24.8937 8.73429 24.8936 10.9971C24.8937 13.2599 26.7284 15.0946 28.9912 15.0947C31.254 15.0946 33.0888 13.2599 33.0889 10.9971C33.0887 8.73427 31.254 6.89951 28.9912 6.89941Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default CircleGridIconTile
