import React from 'react';

const AppWriter: React.FC<{ size?: number; color?: string }> = ({ color, size }) => {
  return (
    <svg width={size || 24} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2-4c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm3-8V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z"
        fill={color || '#212121'}
      ></path>
    </svg>
  );
};

export default AppWriter;
