import React from 'react';

const Fossly: React.FC<{ width: number; fill2: string; fill4: string }> = ({ width, fill2, fill4 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      viewBox="0 0 120 120"
    >
      <defs>
        <linearGradient
          id="gradient0"
          gradientUnits="objectBoundingBox"
          x1="-0.155495776995765"
          y1="0.900637119914763"
          x2="0.678246030253576"
          y2="0.221868014381112"
          spreadMethod="pad"
        >
          <stop stop-color={fill4} offset="0" stop-opacity="1" />
          <stop stop-color={fill2} offset="1" stop-opacity="1" />
        </linearGradient>
        <linearGradient
          id="gradient1"
          gradientUnits="objectBoundingBox"
          x1="0.850416678689733"
          y1="0.146065048602397"
          x2="0.136698220219223"
          y2="0.704694576260757"
          spreadMethod="pad"
        >
          <stop stop-color={fill4} offset="0" stop-opacity="1" />
          <stop stop-color={fill2} offset="1" stop-opacity="1" />
        </linearGradient>
        <linearGradient
          id="gradient2"
          gradientUnits="objectBoundingBox"
          x1="0.937140736677863"
          y1="0.0567708275302131"
          x2="0.216755954395825"
          y2="0.756862113766937"
          spreadMethod="pad"
        >
          <stop stop-color={fill4} offset="0" stop-opacity="1" />
          <stop stop-color={fill2} offset="1" stop-opacity="1" />
        </linearGradient>
      </defs>
      <g
        id="group0"
        transform="matrix(1.81778036940328 0 0 1.81760400048645 0.240000000000029 4.68000000000001)"
        fill="none"
      >
        <path
          id="shape0"
          transform="translate(15.1431143748192, 36.8239932554374)"
          fill="url(#gradient0)"
          fill-rule="evenodd"
          stroke="none"
          stroke-width="0.24"
          stroke-linecap="square"
          stroke-linejoin="bevel"
          d="M24.1831 9.70723C25.6575 7.60722 30.9242 2.22 35.008 0C22.669 0.194558 1.18794 -0.29347 0 13.1013C5.11861 11.6812 7.50111 11.5076 12.9825 10.8103C13.8423 17.2426 13.7234 17.6479 19.2616 24.0474C19.6246 17.011 22.839 11.6215 24.1831 9.70723Z"
        />
        <path
          id="shape1"
          transform="translate(28.4981885213836, 0)"
          fill="url(#gradient1)"
          fill-rule="evenodd"
          stroke="none"
          stroke-width="0.48"
          stroke-linecap="square"
          stroke-linejoin="bevel"
          d="M29.7523 13.44C35.8723 8.50299 31.6587 11.7835 37.2523 7.44001C29.826 3.33648 25.4574 0.0132324 17.6323 1.45447e-05C11.1218 -0.0109828 1.36353e-15 6.21479 0 17.3488C-1.36353e-15 28.4829 8.51861 37.7914 19.6527 37.7914C28.8067 36.7114 40.1413 23.2257 29.7523 13.44Z"
        />
        <path
          id="shape2"
          transform="translate(0, 2.14120184120168)"
          fill="url(#gradient2)"
          fill-rule="evenodd"
          stroke="none"
          stroke-width="0.24"
          stroke-linecap="square"
          stroke-linejoin="bevel"
          d="M44.7426 27.7924C38.4593 13.7026 27.3974 1.57236 12.3426 0.252356C6.15909 -0.0429027 2.65579 -0.0719733 0.0913495 0.12804C-0.0123575 2.44937 -0.365137 4.15126 1.6187 11.2438C6.96443 25.0077 23.5677 35.4724 37.9026 35.8924C40.0041 36.0062 45.0663 35.88 48.4026 35.5924C47.2988 32.3047 45.0984 28.5903 44.7426 27.7924Z"
        />
      </g>
    </svg>
  );
};

export default Fossly;
