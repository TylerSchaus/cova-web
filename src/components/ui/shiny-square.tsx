"use client"

import React from "react"

interface ShinySquareProps {
  className?: string
}

export function ShinySquare({ className = "" }: ShinySquareProps) {
  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          to {
            rotate: 360deg;
          }
        }

        .shiny-square-wrap {
          --shiny-highlight: #0066FF;
          --duration: 12s;
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .shiny-square-inner {
          position: absolute;
          inset-inline-start: 50%;
          inset-block-start: 50%;
          translate: -50% -50%;
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(
            -50deg,
            transparent,
            var(--shiny-highlight),
            transparent
          );
          mask-image: radial-gradient(circle at bottom, transparent 40%, black);
          opacity: 0.15;
          animation: shimmer var(--duration) linear infinite;
        }
      `}</style>

      <div className={`shiny-square-wrap ${className}`}>
        <div className="shiny-square-inner" />
      </div>
    </>
  )
}
