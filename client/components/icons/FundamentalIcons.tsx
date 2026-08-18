import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * 01. Color Pillar Icon - Chromatic aperture & color harmony spectrum nodes
 */
export const ColorPillarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <defs>
      <linearGradient id="colorIconGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff6b35" />
        <stop offset="50%" stopColor="#ff9e00" />
        <stop offset="100%" stopColor="#00f5d4" />
      </linearGradient>
    </defs>
    {/* Outer Chromatic Wheel Track */}
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    <path
      d="M 12 3 A 9 9 0 0 1 21 12"
      stroke="url(#colorIconGrad)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Palette Aperture Core */}
    <circle cx="12" cy="12" r="4.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    {/* Color Harmony Satellites (Triad Nodes) */}
    <circle cx="12" cy="5" r="2" fill="#ff6b35" />
    <circle cx="18" cy="16" r="2" fill="#00f5d4" />
    <circle cx="6" cy="16" r="2" fill="#c084fc" />
    <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
    {/* Spectrum Ray Guides */}
    <path d="M 12 7 L 12 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M 16.5 14.5 L 14.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M 7.5 14.5 L 9.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

/**
 * 02. Typography Pillar Icon - Swiss typographic 'Aa' glyph with baseline & cap-height metric guide rules
 */
export const TypographyPillarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <defs>
      <linearGradient id="typeIconGrad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00f5d4" />
        <stop offset="100%" stopColor="#00b4d8" />
      </linearGradient>
    </defs>
    {/* Typographic Metric Guides: Cap-Height, X-Height, Baseline */}
    <line x1="2" y1="5" x2="22" y2="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
    <line x1="2" y1="10.5" x2="22" y2="10.5" stroke="#00f5d4" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
    <line x1="2" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    {/* Serif 'A' Letterform */}
    <path
      d="M 4 19 L 8.5 6.5 C 8.8 5.6 9.7 5 10.7 5 C 11.7 5 12.6 5.6 12.9 6.5 L 17.5 19"
      stroke="url(#typeIconGrad)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M 6.5 14.5 L 15 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Lowercase 'a' Counter & Bowl */}
    <path
      d="M 18.5 12.5 C 17.5 10.8 15.2 10.5 14 11.5 C 13 12.3 13 14 14.2 14.8 C 15.5 15.5 18.5 15 18.5 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10.7" cy="5" r="1" fill="#00f5d4" />
  </svg>
);

/**
 * 03. Visual Hierarchy Pillar Icon - Layered 3D visual scale stack with focal depth elevation
 */
export const HierarchyPillarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <defs>
      <linearGradient id="hierGrad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#7928ca" />
      </linearGradient>
    </defs>
    {/* Tier 3 (Tertiary Card - Base Foundation) */}
    <rect x="3" y="15" width="18" height="5" rx="2" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    {/* Tier 2 (Secondary Card - Mid Importance) */}
    <rect x="5" y="9.5" width="14" height="4.5" rx="2" fill="currentColor" fillOpacity="0.25" stroke="#c084fc" strokeWidth="1.4" opacity="0.8" />
    {/* Tier 1 (Primary Hero Element - Focal Peak) */}
    <rect x="7" y="4" width="10" height="4.5" rx="2" fill="url(#hierGrad)" stroke="#ffffff" strokeWidth="1.5" />
    {/* Focal Beam / Depth Connection Rays */}
    <path d="M 12 2 L 12 4" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="2" r="1.5" fill="#ff6b35" />
    <path d="M 7 6.2 L 5 11.5" stroke="#c084fc" strokeWidth="1" strokeDasharray="1.5 1.5" opacity="0.6" />
    <path d="M 17 6.2 L 19 11.5" stroke="#c084fc" strokeWidth="1" strokeDasharray="1.5 1.5" opacity="0.6" />
  </svg>
);

/**
 * 04. Contrast Pillar Icon - WCAG 21:1 / 4.5:1 ratio high-contrast split aperture
 */
export const ContrastPillarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <defs>
      <linearGradient id="contrastGlow" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#ff6b35" />
      </linearGradient>
    </defs>
    {/* Outer Precision Ring with Ratio Markers */}
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    {/* High-Luminance Split Chamber */}
    <path d="M 12 3 A 9 9 0 0 1 12 21 Z" fill="url(#contrastGlow)" />
    <path d="M 12 3 A 9 9 0 0 0 12 21 Z" fill="currentColor" fillOpacity="0.2" />
    <line x1="12" y1="2" x2="12" y2="22" stroke="#ff6b35" strokeWidth="1.5" />
    {/* Contrast Ratio Focal Indicator Pip */}
    <circle cx="12" cy="12" r="2.8" fill="#050508" stroke="#00f5d4" strokeWidth="1.5" />
    {/* Dynamic Luminescence Sparkles */}
    <circle cx="17" cy="8" r="1" fill="#050508" />
    <circle cx="7" cy="16" r="1" fill="#ffffff" />
  </svg>
);

/**
 * 05. Alignment Pillar Icon - Precision Swiss layout grid, golden ratio column guides & crosshairs
 */
export const AlignmentPillarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <defs>
      <linearGradient id="alignGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffd166" />
        <stop offset="50%" stopColor="#ff6b35" />
        <stop offset="100%" stopColor="#00f5d4" />
      </linearGradient>
    </defs>
    {/* Swiss Multi-Column Layout Grid */}
    <rect x="3" y="4" width="4.5" height="16" rx="1.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    <rect x="9.75" y="4" width="4.5" height="16" rx="1.5" fill="currentColor" fillOpacity="0.2" stroke="url(#alignGrad)" strokeWidth="1.5" />
    <rect x="16.5" y="4" width="4.5" height="16" rx="1.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    {/* Magnetic Alignment Snapping Beam */}
    <line x1="1.5" y1="12" x2="22.5" y2="12" stroke="#00f5d4" strokeWidth="1.5" strokeDasharray="3 2" />
    {/* Precision Crosshair Snapping Points */}
    <circle cx="5.25" cy="12" r="1.5" fill="#ff6b35" />
    <circle cx="12" cy="12" r="2.2" fill="#ffd166" stroke="#050508" strokeWidth="1" />
    <circle cx="18.75" cy="12" r="1.5" fill="#00f5d4" />
  </svg>
);

/**
 * Design Fundamentals Master Logo Icon (Cyber-Growth Emblem)
 */
export const DFLogoIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size, ...props }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <defs>
      <linearGradient id="dfBg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0c0d16" />
        <stop offset="100%" stopColor="#040508" />
      </linearGradient>
      <linearGradient id="dfBorder" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff6b35" />
        <stop offset="50%" stopColor="#ff9e00" />
        <stop offset="85%" stopColor="#00f5d4" />
        <stop offset="100%" stopColor="#7928ca" />
      </linearGradient>
      <linearGradient id="dfOrange" x1="10" y1="12" x2="28" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff8f5e" />
        <stop offset="100%" stopColor="#ff6b35" />
      </linearGradient>
      <linearGradient id="dfCyan" x1="24" y1="12" x2="38" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00f5d4" />
        <stop offset="100%" stopColor="#00b4d8" />
      </linearGradient>
    </defs>
    {/* Outer Rounded Squircle with Cyber Border */}
    <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#dfBg)" stroke="url(#dfBorder)" strokeWidth="1.8" />
    
    {/* Micro Alignment Corner Ticks */}
    <path d="M 6 10 L 6 6 L 10 6" stroke="#ff6b35" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    <path d="M 42 10 L 42 6 L 38 6" stroke="#00f5d4" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    <path d="M 6 38 L 6 42 L 10 42" stroke="#00f5d4" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    <path d="M 42 38 L 42 42 L 38 42" stroke="#ff6b35" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

    {/* 'D' Structure */}
    <path
      d="M 12 14 L 19 14 C 23.5 14 26.5 17 26.5 22 C 26.5 27 23.5 30 19 30 L 12 30 Z M 16 18 L 16 26 L 18.5 26 C 21 26 22.5 24.5 22.5 22 C 22.5 19.5 21 18 18.5 18 Z"
      fill="url(#dfOrange)"
    />

    {/* 'F' Interlocking Structure */}
    <path
      d="M 26 14 L 35 14 L 35 17.5 L 30 17.5 L 30 20.5 L 34 20.5 L 34 24 L 30 24 L 30 30 L 26 30 Z"
      fill="url(#dfCyan)"
    />

    {/* 5 Fundamentals Constellation Anchor Nodes */}
    <circle cx="12" cy="14" r="1.5" fill="#ff6b35" />
    <circle cx="35" cy="14" r="1.5" fill="#00f5d4" />
    <circle cx="34" cy="20.5" r="1.2" fill="#c084fc" />
    <circle cx="30" cy="30" r="1.2" fill="#ffffff" />
    <circle cx="12" cy="30" r="1.2" fill="#ffd166" />
  </svg>
);
