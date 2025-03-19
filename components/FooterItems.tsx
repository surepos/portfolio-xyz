import Link from 'next/link';
import React from 'react'

const FooterItems = ({label, link}:{label:string; link:string}) => {
  return (
    <div className='footer-link'>
        <Link href={link}>{label}</Link>
    </div>
  )
}

export default FooterItems
