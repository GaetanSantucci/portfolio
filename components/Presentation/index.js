'use client';

import './presentation.scss';
import selfie from '/public/images/portrait.jpg'
import Image from 'next/image';
import Description from './Description';

export default function Presentation() {
  return (
    <div className='container__presentation'>
      <h2 className='container__presentation__title '>WHO AM I</h2>
      <h3 className='container__presentation__subtitle '>Introducing <span className='container__presentation__myself'>
        <span>M</span><span>y</span><span>s</span><span>e</span><span>l</span><span>f</span></span></h3>
      <section className='container__presentation__card'>
        <div className='container__presentation__card__image'>
          <Image src={selfie} className='container__presentation__card__image--me' alt='Gaetan Santucci' placeholder='blur' />
        </div>
        <Description />
      </section>
    </div>
  )
}