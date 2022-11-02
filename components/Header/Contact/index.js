import Image from 'next/image';
import Link from 'next/link';
import './contact.scss';

import github from '/public/images/github.png'
import linkedin from '/public/images/linkedin.png'
import twitter from '/public/images/twitter.png'

export default function Contact() {
  return (
    <div className='navigation'>
      <a className='email' href='mailto:'>
        gaetan.santucci@outlook.com
      </a>
      <div className='social'>
        <Link href='https://github.com/GaetanSantucci'>
          <Image className='icon' src={github} alt='logo github' />
        </Link>
        <Image className='icon' src={linkedin} alt='logo linkedin' />
        <Image className='icon' src={twitter} alt='logo twitter' />
      </div>
    </div>
  )
}