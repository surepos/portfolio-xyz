import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { icons } from '@/constants';
import { useTheme } from 'next-themes';

const NextJs = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }
  return (
    <div className={`${theme == 'light' ? 'bg-[#CFE2F9]' : 'bg-[#0a0a0a] border-[0.1px] border-white/[0.4]'} w-[25px] sm:w-[35px] h-[25px] sm:h-[35px] flex items-center justify-center rounded-full  p-[2px]`}>
     <Image src={theme == 'light' ? icons.NextLight : icons.NextJs} alt='Next'/>
    </div>
  );
};

export default NextJs;
