export default function ENFullLogo({
  className = "flex flex-col items-start gap-2",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative flex items-center gap-0">
        {/* Луч света */}
        <svg
          viewBox="0 0 120 40"
          className="w-[92px] md:w-[112px] select-none pointer-events-none"
          style={{ filter: "drop-shadow(0 0 3px rgba(200,240,255,0.35))" }}
          aria-label="Elaira Novan light logo"
        >
          <defs>
            <linearGradient id="enBeam" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6CCBFF" stopOpacity="0.58" />
              <stop offset="45%" stopColor="#C8ECFF" stopOpacity="0.96" />
              <stop offset="100%" stopColor="#F4FFFF" stopOpacity="1" />
            </linearGradient>

            <radialGradient id="enGlow" cx="100%" cy="0%" r="40%">
              <stop offset="0%" stopColor="#F5FFFF" stopOpacity="1" />
              <stop offset="40%" stopColor="#B7E7FF" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#001019" stopOpacity="0" />
            </radialGradient>

            <filter id="enCrystalGlow">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  0 0 0 0 0.78
                  0 0 0 0 0.93
                  0 0 0 0 1
                  0 0 0 0.6 0
                "
                result="glowColor"
              />
              <feMerge>
                <feMergeNode in="glowColor" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glowDot">
              <feGaussianBlur stdDeviation="1.8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#enCrystalGlow)">
            <circle cx="70" cy="8" r="9" fill="url(#enGlow)" />
            <line
              x1="18"
              y1="30"
              x2="70"
              y2="8"
              stroke="url(#enBeam)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="70"
              cy="8"
              r="2.2"
              fill="#F8FFFF"
              filter="url(#glowDot)"
            />
          </g>
        </svg>

        <div className="en-logo-text leading-tight ml-1">
          <span className="en-logo-main">ELAIRA</span>
          <span className="en-logo-sub">NOVAN</span>
        </div>
      </div>
    </div>
  );
}
