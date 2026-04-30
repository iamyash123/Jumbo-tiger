import React from "react";

const StepMark = ({
    size = 64,
    radius = 10,
    background = "#fff",
    color = "#000",
    gradient = "",
    className = "",
    ariaLabel = "Step mark",
}) => {
    const markSize = typeof size === "number" ? `${size}px` : size;
    const markColor = gradient || color;

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${className}`}
            role="img"
            aria-label={ariaLabel}
            style={{
                width: markSize,
                height: markSize,
                borderRadius: radius,
                background,
                position: "relative",
                overflow: "hidden",

                // ✅ Added styles (no other changes)
                border: "1px solid #EDEDED", // acts like stroke
                filter: "drop-shadow(0 3.413px 3.413px rgba(0, 0, 0, 0.25))",
            }}
        >
            <span
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "30%",
                    height: "30%",
                    left: "26%",
                    top: "30%",
                    background: markColor,
                }}
            />
            <span
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "15%",
                    height: "15%",
                    left: "55%",
                    top: "59%",
                    background: markColor,
                }}
            />
        </span>
    );
};

export default StepMark;
