import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes"

const DB = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false);
    
      useEffect(() => {
        setMounted(true);
      }, []);
    
      if (!mounted) {
        return null; 
      }
  return (
    <div className={`${theme == 'light' ? 'bg-[#CFE2F9]' : 'bg-[#0a0a0a]'} w-[32px] sm:w-[35px] h-[32px] sm:h-[35px] flex items-center justify-center rounded-full border-[0.1px] border-white/[0.4] p-[6px]`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.1371 6.91018C13.4184 6.7695 13.7123 6.59981 14 6.40001V8C14 9.65685 11.3137 11 8 11C4.68629 11 2 9.65685 2 8V6.40001C2.28772 6.59981 2.58158 6.7695 2.86293 6.91018C4.28096 7.61919 6.09998 8 8 8C9.90002 8 11.719 7.61919 13.1371 6.91018Z"
          fill={`${theme == 'light' ? '#026AF9' : 'rgba(255, 255, 255, 0.8)'}`}
        />
        <path
          d="M2 11.4V13C2 14.6569 4.68629 16 8 16C11.3137 16 14 14.6569 14 13V11.4C13.7123 11.5998 13.4184 11.7695 13.1371 11.9102C11.719 12.6192 9.90002 13 8 13C6.09998 13 4.28096 12.6192 2.86293 11.9102C2.58158 11.7695 2.28772 11.5998 2 11.4Z"
          fill={`${theme == 'light' ? '#026AF9' : 'rgba(255, 255, 255, 0.8)'}`}
        />
        <path
          d="M8 0C11.3137 0 14 1.34315 14 3C14 4.65685 11.3137 6 8 6C4.68629 6 2 4.65685 2 3C2 1.34315 4.68629 0 8 0Z"
          fill={`${theme == 'light' ? '#026AF9' : 'rgba(255, 255, 255, 0.8)'}`}
        />
      </svg>
    </div>
  );
};

export default DB;
