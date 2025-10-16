import React from 'react';

interface LogoProps {
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ textColor = 'text-secondary' }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer" title="ERP Pro">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#0052cc"/>
            <path d="M13 29V11H21.5C23.9853 11 26 13.0147 26 15.5C26 17.9853 23.9853 20 21.5 20H13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 20L27 29" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className={`text-2xl font-bold ${textColor}`}>ERP Pro</span>
    </div>
  );
};

export default Logo;