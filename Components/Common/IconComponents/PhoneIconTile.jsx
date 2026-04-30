import React from 'react'
import IconGradient, { getIconFill } from '@/Components/Common/IconComponents/IconGradient'

const PhoneIconTile = ({
    className = '',
    sizeClass = 'size-16',
    radiusClass = 'rounded-xl',
    backgroundClass = 'bg-white',
    shadowClass = 'shadow-[0_3.413px_3.413px_0_rgba(0,0,0,0.25)]',
    iconColor = 'black',
    iconGradient = null,
    gradientId = 'phone-icon-tile-gradient',
    ariaLabel = 'Phone',
}) => {
    const iconFill = getIconFill(iconColor, iconGradient, gradientId)
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${sizeClass} ${radiusClass} ${backgroundClass} ${shadowClass} ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <IconGradient id={gradientId} stops={iconGradient} />
                <path
                    d="M26.5175 19.8935V23.8935C26.519 24.2648 26.4429 24.6324 26.2942 24.9726C26.1454 25.3128 25.9272 25.6182 25.6536 25.8693C25.38 26.1203 25.0569 26.3114 24.7052 26.4304C24.3534 26.5494 23.9807 26.5936 23.6108 26.5601C19.5079 26.1143 15.5668 24.7123 12.1042 22.4668C8.88259 20.4197 6.15127 17.6884 4.10416 14.4668C1.85079 10.9884 0.44848 7.02812 0.0108223 2.9068C-0.0224971 2.53809 0.0213222 2.16648 0.139489 1.81563C0.257657 1.46478 0.447583 1.14238 0.697177 0.868957C0.94677 0.595533 1.25056 0.377075 1.58921 0.227492C1.92786 0.0779087 2.29394 0.000477909 2.66416 0.00012927H6.66416C7.31123 -0.00623932 7.93854 0.222901 8.42917 0.644839C8.9198 1.06678 9.24026 1.65272 9.33082 2.29346C9.49965 3.57355 9.81276 4.83043 10.2642 6.04013C10.4435 6.51736 10.4824 7.03602 10.376 7.53464C10.2697 8.03326 10.0226 8.49094 9.66416 8.85346L7.97082 10.5468C9.8689 13.8849 12.6328 16.6487 15.9708 18.5468L17.6642 16.8535C18.0267 16.495 18.4844 16.2479 18.983 16.1416C19.4816 16.0352 20.0003 16.0741 20.4775 16.2535C21.6872 16.7049 22.9441 17.018 24.2242 17.1868C24.8718 17.2782 25.4634 17.6044 25.8862 18.1035C26.309 18.6025 26.5337 19.2396 26.5175 19.8935Z"
                    fill={iconFill}
                />
            </svg>
        </span>
    )
}

export default PhoneIconTile
