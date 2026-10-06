import React from 'react';

interface WaveDividerProps {
  fillColor?: string;
  isFlipped?: boolean;
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fillColor = '#F2EDE2',
  isFlipped = false,
  className = '',
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none ${className}`}
      style={{ transform: isFlipped ? 'rotate(180deg)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 lg:h-16 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
