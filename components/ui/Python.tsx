import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes"
const Python = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }
  return (
    <div className={`${theme == 'light' ? 'bg-[#CFE2F9]' : 'bg-[#0a0a0a] border-[0.1px] border-white/[0.4]'} w-[32px] sm:w-[35px] h-[32px] sm:h-[35px] flex items-center justify-center rounded-full  p-[8px]`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 12H1.5C0.671573 12 0 11.3284 0 10.5V5.5C0 4.67157 0.671573 4 1.5 4H8V3H7V2H6V3H4V1.5C4 0.671573 4.67157 0 5.5 0H9.5C10.3284 0 11 0.671573 11 1.5V6.5C11 6.77614 10.7761 7 10.5 7H4.5C3.67157 7 3 7.67157 3 8.5V12Z"
          fill={`${theme == 'light' ? '#026AF9' : 'rgba(255, 255, 255, 0.8)'}`}
        />
        <path
          d="M12 3V6.5C12 7.32843 11.3284 8 10.5 8H4.5C4.22386 8 4 8.22386 4 8.5V13.5C4 14.3284 4.67157 15 5.5 15H9.5C10.3284 15 11 14.3284 11 13.5V12H9V13H8V12H7V11H13.5C14.3284 11 15 10.3284 15 9.5V4.5C15 3.67157 14.3284 3 13.5 3H12Z"
          fill={`${theme == 'light' ? '#026AF9' : 'rgba(255, 255, 255, 0.8)'}`}
        />
      </svg>
    </div>
  );
};

export default Python;
