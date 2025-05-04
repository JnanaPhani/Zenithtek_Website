import React from 'react';

export const LogoPrimary: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      <div className="rounded-full bg-primary w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
        <span className="text-white font-audiowide text-base md:text-xl">ZT</span>
      </div>
      <span className="text-primary font-audiowide text-lg md:text-2xl">Zenith Tek</span>
    </div>
  );
};

export const LogoFooter: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      <div className="rounded-full bg-white w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
        <span className="text-primary font-audiowide text-base md:text-xl">ZT</span>
      </div>
      <span className="text-white font-audiowide text-lg md:text-2xl">Zenith Tek</span>
    </div>
  );
};

export default LogoPrimary;