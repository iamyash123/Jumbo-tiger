import React from 'react'

export const getIconFill = (iconColor, iconGradient, gradientId) => (
    iconGradient ? `url(#${gradientId})` : iconColor
)

const getGradientStops = (iconGradient) => {
    if (!iconGradient) return []

    return iconGradient.map((stop, index) => {
        if (Array.isArray(stop)) {
            const [offset, color] = stop
            return { offset, color }
        }

        if (typeof stop === 'string') {
            return {
                offset: index === 0 ? '0%' : index === iconGradient.length - 1 ? '100%' : `${Math.round((index / (iconGradient.length - 1)) * 100)}%`,
                color: stop,
            }
        }

        return stop
    })
}

const IconGradient = ({ id, stops, x1 = "0", y1 = "0", x2 = "32", y2 = "32" }) => {
    if (!stops) return null

    return (
        <defs>
            <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2} gradientUnits="userSpaceOnUse">
                {getGradientStops(stops).map((stop) => (
                    <stop key={`${stop.offset}-${stop.color}`} offset={stop.offset} stopColor={stop.color} />
                ))}
            </linearGradient>
        </defs>
    )
}

export default IconGradient
