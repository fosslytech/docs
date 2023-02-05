import React from 'react';

const Logo: React.FC<{ width: number; fill: string }> = ({ width, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="153.6 128 204.8 256"
      xmlSpace="preserve"
      width={width}
      style={{ fill: fill }}
    >
      <g transform="matrix(12.8 0 0 12.8 256 256)" id="_8oF_AxUq1FyN-H2kOm7a">
        <path
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeDashoffset: 0,
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            fill: fill,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          vectorEffect="non-scaling-stroke"
          transform=" translate(-12, -12)"
          d="M 12 2 L 12 8 C 12 9.10457 12.8954 10 14 10 L 20 10 L 20 20 C 20 21.1046 19.1046 22 18 22 L 6 22 C 4.89543 22 4 21.1046 4 20 L 4 4 C 4 2.89543 4.89543 2 6 2 L 12 2 Z M 13.5 2.5 L 13.5 8 C 13.5 8.27614 13.7239 8.5 14 8.5 L 19.5 8.5 L 13.5 2.5 Z"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Logo;
