import './footer.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='footer'>
      <p>Created by <Link href='https://www.linkedin.com/in/gaetan-santucci/'>Gaetan Santucci</Link></p>
    </footer>
  )
}