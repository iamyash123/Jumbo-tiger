import React from "react";

const GradientStepMark = ({
    size = 64,
    radius = 12,
    background = "#3A3A3A",
    className = "",
    ariaLabel = "Gradient step mark",
}) => {
    const boxSize = typeof size === "number" ? `${size}px` : size;

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center ${className}`}
            role="img"
            aria-label={ariaLabel}
            style={{
                width: boxSize,
                height: boxSize,
                borderRadius: radius,
                background,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Top Gradient Block */}
            <span
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "28%",
                    height: "32%",
                    top: "22%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background:
                        "linear-gradient(180deg, #FFF 0%, rgba(187, 148, 255, 0.80) 50%, rgba(187, 148, 255, 0.00) 100%), linear-gradient(180deg, #FFF 0%, rgba(187, 148, 255, 0.00) 100%)",
                }}
            />

            {/* Bottom Block */}
            <span
                aria-hidden="true"
                style={{
                    position: "absolute",
                    width: "28%",
                    height: "18%",
                    bottom: "22%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#FFF",
                }}
            />
        </span>
    );
};

export default GradientStepMark;