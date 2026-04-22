"use client"

import React from "react"

interface ShinyBorderProps {
  children: React.ReactNode
  className?: string
}

export function ShinyBorder({ children, className = "" }: ShinyBorderProps) {
  return (
    <>
      <style jsx>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-angle-offset {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-percent {
          syntax: "<percentage>";
          initial-value: 5%;
          inherits: false;
        }

        @property --gradient-shine {
          syntax: "<color>";
          initial-value: white;
          inherits: false;
        }

        .shiny-border {
          --shiny-bg: #030303;
          --shiny-highlight: #0066FF;
          --shiny-highlight-subtle: #0551ef;
          --animation: gradient-angle linear infinite;
          --duration: 4s;
          --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);

          isolation: isolate;
          position: relative;
          border-radius: 6px;
          background: linear-gradient(var(--shiny-bg), var(--shiny-bg)) padding-box,
            conic-gradient(
              from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
              transparent,
              var(--shiny-highlight) var(--gradient-percent),
              var(--gradient-shine) calc(var(--gradient-percent) * 2),
              var(--shiny-highlight) calc(var(--gradient-percent) * 3),
              transparent calc(var(--gradient-percent) * 4)
            ) border-box;
          border: 1px solid transparent;
          transition: var(--transition);
          transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine;
          animation: var(--animation) var(--duration),
            var(--animation) calc(var(--duration) / 0.4) reverse paused;
          animation-composition: add;
          animation-play-state: running;
        }

        @keyframes gradient-angle {
          to {
            --gradient-angle: 360deg;
          }
        }
      `}</style>

      <div className={`shiny-border ${className}`}>
        {children}
      </div>
    </>
  )
}
