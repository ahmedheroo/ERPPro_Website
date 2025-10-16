import React from 'react';

interface LogoProps {
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ textColor }) => {
  const logoSrc = '/assets/logo.png';

  return (
    <div className="flex items-center space-x-2">
      <img
      src={logoSrc}
      alt="ERP Pro"
      className="object-contain"
      style={{ width: 150, height: 70 }}
      />
    </div>
  );
};

// Fix: Add default export to make the component available for import.
export default Logo;
