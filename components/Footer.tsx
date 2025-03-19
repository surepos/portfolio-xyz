import React from 'react';
import FooterItems from './FooterItems';
import { FooterLinks} from '@/constants';
import { LinkPreview } from './ui/LinkPreview';
import { ModeToggle } from '@/app/ThemeSwitcher';
import { useModal } from "@/lib/modalContext";

const Footer = () => {
 const { toggleModal} = useModal();
  return (
    <div className="w-full flex flex-col justify-evenly items-center pb-30 max-w-6xl mt-0 md:mt-40 mx-auto px-8 z-10 relative">
        <div className='flex w-full justify-between'>

      <div className="footer-link hidden sm:inline">
        <span>©</span> Sura 2025 <span>.</span> <span>
            <LinkPreview url="https://tailwindcss.com" className="footer-link">
            Colophon
            </LinkPreview>
        </span>
      </div>
      <div className="flex gap-25 sm:gap-50 footer-link">
        <div className="flex flex-col gap-5">
          <p className="mb-7 font-bold footer-title">ElseWhere</p>
          {FooterLinks.map((item) => (
            <FooterItems label={item.label} link={item.link} key={item.id} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <p className="mb-7 font-bold footer-title">Contact</p>
          <div className='footer-link'>
            <div onClick={() => toggleModal()} className='cursor-pointer'>Message</div>
          </div>
        </div>
      </div>
      </div>

      <ModeToggle />
    </div>
  );
};

export default Footer;
