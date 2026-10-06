import React from 'react';
import { Flavor } from '../types';

interface CanIllustrationProps {
  flavor: Flavor;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isFloating?: boolean;
  tiltAngle?: number;
}

export const CanIllustration: React.FC<CanIllustrationProps> = ({
  flavor,
  size = 'md',
  className = '',
  isFloating = false,
  tiltAngle = 0,
}) => {
  // Dimensions based on size
  const dimensions = {
    sm: { width: 100, height: 180 },
    md: { width: 150, height: 270 },
    lg: { width: 200, height: 360 },
    xl: { width: 280, height: 490 },
  }[size];

  const { canColor, accentColor, name } = flavor;

  // Derive unique flavor fruit / motif graphics
  const renderFlavorMotif = () => {
    switch (flavor.slug) {
      case 'strawberry-vanilla':
        return (
          <g transform="translate(100, 195)">
            {/* Strawberries & vanilla blossom */}
            <circle cx="-16" cy="10" r="14" fill="#E11D48" />
            <circle cx="-12" cy="7" r="1.5" fill="#FEF08A" />
            <circle cx="-18" cy="12" r="1.5" fill="#FEF08A" />
            <path d="M-22 0 C-18 -8, -10 -8, -6 0 Z" fill="#15803D" />
            <circle cx="16" cy="15" r="12" fill="#BE123C" />
            <circle cx="14" cy="13" r="1.5" fill="#FEF08A" />
            {/* Vanilla flower petals */}
            <circle cx="0" cy="-2" r="6" fill="#FFFDF0" opacity="0.95" />
            <circle cx="-6" cy="-6" r="6" fill="#FFFDF0" opacity="0.95" />
            <circle cx="6" cy="-6" r="6" fill="#FFFDF0" opacity="0.95" />
            <circle cx="0" cy="-10" r="3" fill="#FACC15" />
          </g>
        );
      case 'vintage-cola':
      case 'cherry-cola':
        return (
          <g transform="translate(100, 195)">
            {/* Cola kola nut & spices / cherries */}
            <circle cx="-14" cy="12" r="12" fill="#450A0A" />
            <circle cx="14" cy="10" r="11" fill="#7F1D1D" />
            <path d="M-14 0 Q 0 -12 14 -2" stroke="#15803D" strokeWidth="2.5" fill="none" />
            <circle cx="0" cy="5" r="7" fill="#F59E0B" opacity="0.8" />
            <path d="M-8 8 L-1 15 L7 6" stroke="#FEF08A" strokeWidth="1.5" fill="none" opacity="0.8" />
          </g>
        );
      case 'orange-squeeze':
      case 'peaches-and-cream':
        return (
          <g transform="translate(100, 195)">
            {/* Orange slice / peach */}
            <circle cx="0" cy="8" r="20" fill="#F97316" />
            <circle cx="0" cy="8" r="16" fill="#FFEDD5" />
            <circle cx="0" cy="8" r="13" fill="#EA580C" />
            {/* Orange segments */}
            <path d="M-9 1 L9 15 M-9 15 L9 1 M0 -5 L0 21" stroke="#FFEDD5" strokeWidth="1.5" />
            <path d="M-12 -12 Q -2 -22 8 -12" stroke="#15803D" strokeWidth="3" fill="none" />
          </g>
        );
      case 'classic-root-beer':
        return (
          <g transform="translate(100, 195)">
            {/* Root beer birch & barrel leaf */}
            <rect x="-22" y="0" width="44" height="18" rx="6" fill="#78350F" opacity="0.9" />
            <path d="M-18 6 H18 M-18 12 H18" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 2" />
            <path d="M-12 -8 C-4 -18, 4 -18, 12 -8 Z" fill="#15803D" />
          </g>
        );
      case 'lemon-lime':
      case 'ridge-rush':
        return (
          <g transform="translate(100, 195)">
            {/* Lemon and Lime halves */}
            <path d="M-18 18 A 16 16 0 0 1 -2 2 Z" fill="#EAB308" />
            <path d="M2 2 A 16 16 0 0 1 18 18 Z" fill="#65A30D" />
            <circle cx="0" cy="2" r="3" fill="#FEF08A" />
            <path d="M-8 -6 Q 0 -14 8 -6" stroke="#166534" strokeWidth="2" fill="none" />
          </g>
        );
      case 'crisp-apple':
        return (
          <g transform="translate(100, 195)">
            {/* Crisp Honeycrisp Apple */}
            <circle cx="-8" cy="8" r="15" fill="#16A34A" />
            <circle cx="8" cy="8" r="15" fill="#22C55E" />
            <path d="M0 -7 Q 6 -16 14 -12" stroke="#78350F" strokeWidth="2.5" fill="none" />
            <ellipse cx="6" cy="-12" rx="6" ry="3" fill="#15803D" transform="rotate(-20 6 -12)" />
          </g>
        );
      case 'doctor-goodwin':
      case 'classic-grape':
        return (
          <g transform="translate(100, 195)">
            {/* Blackberry & plum / grape cluster */}
            <circle cx="-10" cy="5" r="7" fill="#581C87" />
            <circle cx="0" cy="2" r="8" fill="#3B0764" />
            <circle cx="10" cy="5" r="7" fill="#6B21A8" />
            <circle cx="-5" cy="14" r="7" fill="#4C1D95" />
            <circle cx="5" cy="14" r="7" fill="#581C87" />
            <path d="M0 -8 L0 2" stroke="#15803D" strokeWidth="2.5" />
          </g>
        );
      case 'tropical-punch':
        return (
          <g transform="translate(100, 195)">
            {/* Pineapple & passionfruit */}
            <ellipse cx="-10" cy="8" rx="10" ry="14" fill="#F59E0B" />
            <circle cx="10" cy="10" r="11" fill="#E11D48" />
            <circle cx="10" cy="10" r="8" fill="#FDE047" />
            <circle cx="8" cy="9" r="1.5" fill="#7F1D1D" />
            <circle cx="12" cy="12" r="1.5" fill="#7F1D1D" />
            <path d="M-10 -6 L-10 -16 M-14 -12 L-6 -12" stroke="#15803D" strokeWidth="2.5" />
          </g>
        );
      default:
        return (
          <g transform="translate(100, 195)">
            {/* Default botanical leaves & spark */}
            <circle cx="0" cy="10" r="14" fill={accentColor} opacity="0.9" />
            <path d="M-12 0 C-6 -12, 6 -12, 12 0 C6 12, -6 12, -12 0 Z" fill="#15803D" />
          </g>
        );
    }
  };

  return (
    <div
      className={`relative inline-block select-none ${isFloating ? 'animate-float' : ''} ${className}`}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        transform: tiltAngle ? `rotate(${tiltAngle}deg)` : undefined,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <svg
        viewBox="0 0 200 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        <defs>
          {/* Metallic can highlights */}
          <linearGradient id={`silverLid-${flavor.id}`} x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="25%" stopColor="#F1F5F9" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="75%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* 3D cylindrical lighting across the can body */}
          <linearGradient id={`canBody-${flavor.id}`} x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={canColor} stopOpacity="0.85" />
            <stop offset="18%" stopColor={canColor} stopOpacity="1" />
            <stop offset="38%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="55%" stopColor={canColor} stopOpacity="1" />
            <stop offset="90%" stopColor={canColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.35" />
          </linearGradient>

          {/* Can drop shadow */}
          <radialGradient id={`canShadow-${flavor.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#1E293B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Ground contact shadow */}
        <ellipse cx="100" cy="350" rx="72" ry="9" fill={`url(#canShadow-${flavor.id})`} />

        {/* 2. Top Aluminum Lip & Rim */}
        {/* Taper neck */}
        <path
          d="M 46 22 L 154 22 C 160 22 166 26 166 32 L 166 40 L 34 40 L 34 32 C 34 26 40 22 46 22 Z"
          fill={`url(#silverLid-${flavor.id})`}
        />
        {/* Upper rim bead */}
        <ellipse cx="100" cy="22" rx="55" ry="10" fill={`url(#silverLid-${flavor.id})`} />
        <ellipse cx="100" cy="21" rx="51" ry="8" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        {/* Pull tab indentation */}
        <ellipse cx="100" cy="20" rx="22" ry="4" fill="#94A3B8" opacity="0.6" />
        <rect x="94" y="17" width="12" height="5" rx="2" fill="#E2E8F0" />

        {/* 3. Main Can Body (Cylinder) */}
        {/* Can main background */}
        <rect x="30" y="38" width="140" height="295" rx="4" fill={canColor} />
        {/* 3D Sheen overlay */}
        <rect x="30" y="38" width="140" height="295" rx="4" fill={`url(#canBody-${flavor.id})`} />

        {/* 4. Bottom Taper & Base Rim */}
        <path
          d="M 30 330 C 30 338 42 344 56 345 L 144 345 C 158 344 170 338 170 330 Z"
          fill={`url(#silverLid-${flavor.id})`}
        />
        <ellipse cx="100" cy="344" rx="44" ry="4" fill="#64748B" opacity="0.4" />

        {/* 5. Authentic OLIPOP Label Badge */}
        {/* Outer scallop / wavy badge background */}
        <rect
          x="38"
          y="65"
          width="124"
          height="235"
          rx="18"
          fill="#FFFDF7"
          stroke={accentColor}
          strokeWidth="2.5"
        />

        {/* Inner thin decorative border line */}
        <rect
          x="42"
          y="69"
          width="116"
          height="227"
          rx="14"
          fill="none"
          stroke="#183B2B"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          opacity="0.3"
        />

        {/* Top Arc Tagline: "A NEW KIND OF SODA" */}
        <text
          x="100"
          y="85"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          letterSpacing="1.2"
          fill="#183B2B"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          opacity="0.85"
        >
          A NEW KIND OF SODA
        </text>

        {/* Iconic Bouncy OLIPOP Wordmark */}
        <g transform="translate(100, 114)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fontFamily="'Fraunces', Georgia, serif"
            fontSize="30"
            fontWeight="900"
            letterSpacing="-0.5"
            fill="#183B2B"
          >
            OLIPOP
          </text>
          {/* Leaf dot over the 'i' */}
          <path
            d="M -7 -22 C -4 -27 1 -26 0 -22 C -2 -19 -6 -20 -7 -22 Z"
            fill="#15803D"
          />
        </g>

        {/* Flavor Name in curved/bold label */}
        <g transform="translate(100, 142)">
          <rect
            x="-52"
            y="-14"
            width="104"
            height="22"
            rx="11"
            fill={canColor}
          />
          <text
            x="0"
            y="1"
            textAnchor="middle"
            fontFamily="'Fraunces', Georgia, serif"
            fontSize={name.length > 14 ? '9' : '10.5'}
            fontWeight="800"
            fill="#FFFFFF"
          >
            {name.toUpperCase()}
          </text>
        </g>

        {/* Subtitle / Prebiotic callout */}
        <text
          x="100"
          y="163"
          textAnchor="middle"
          fontSize="7"
          fontWeight="600"
          letterSpacing="0.8"
          fill="#183B2B"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          opacity="0.9"
        >
          PREBIOTIC SODA
        </text>

        {/* Flavor Motif (Fruit, Spices, Flowers) */}
        {renderFlavorMotif()}

        {/* Bottom Nutrition Stamp Banner */}
        <g transform="translate(100, 260)">
          <rect
            x="-50"
            y="-12"
            width="100"
            height="22"
            rx="6"
            fill="#F3ECE0"
            stroke="#183B2B"
            strokeWidth="0.8"
          />
          <text
            x="0"
            y="-1"
            textAnchor="middle"
            fontSize="7"
            fontWeight="800"
            fill="#183B2B"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            {flavor.fiber}g FIBER • {flavor.sugar}g SUGAR
          </text>
          <text
            x="0"
            y="7"
            textAnchor="middle"
            fontSize="5.5"
            fontWeight="600"
            letterSpacing="0.5"
            fill="#183B2B"
            opacity="0.75"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            {flavor.calories} CALORIES • BOTANICALS
          </text>
        </g>

        {/* Real condensation water droplets for mouth-watering freshness */}
        <g opacity="0.4" fill="#FFFFFF">
          <ellipse cx="44" cy="55" rx="1.5" ry="3" />
          <circle cx="48" cy="95" r="1.5" />
          <ellipse cx="160" cy="70" rx="1.8" ry="3.5" />
          <circle cx="156" cy="140" r="1.8" />
          <ellipse cx="38" cy="220" rx="1.5" ry="3" />
          <ellipse cx="162" cy="245" rx="1.8" ry="3" />
          <circle cx="46" cy="310" r="2" />
        </g>
      </svg>
    </div>
  );
};
