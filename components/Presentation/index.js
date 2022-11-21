'use client';

import './presentation.scss';
import me from '/public/images/portrait.jpg'
import Image from 'next/image';
import Description from './Description';

export default function Presentation() {
  return (
    <div className='container__presentation'>
      <h2 className='scrollTitle absolute'>WHO I AM</h2>
      <h3 className='scrollIntro absolute'>Introducing <span className='scrollMyself'>
        <span>M</span><span>y</span><span>s</span><span>e</span><span>l</span><span>f</span></span></h3>
      <section className='container__presentation__card'>
        <div className='container__presentation__card__image'>
          <Image src={me} className='container__presentation__card__image--me' alt='Gaetan Santucci' />
        </div>
        <Description />
      </section>
    </div>
  )
}