import React from 'react';

const AppCalc: React.FC<{ size?: number; color?: string }> = ({ color, size }) => {
  return (
    <svg width={size || 24} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 15v-2h4v1.5a.5.5 0 0 1-.5.5H9Zm4-4.5V12H9v-2h3.5c.28 0 .5.22.5.5ZM7 13h1v2h-.5a.5.5 0 0 1-.5-.5V13Zm1-1v-2h-.5a.5.5 0 0 0-.5.5V12h1Zm2-5.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4 4C6 9.67 6.67 9 7.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 14.5v-4Zm5-4V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z"
        fill={color || '#212121'}
      ></path>
    </svg>
  );
};

export default AppCalc;
