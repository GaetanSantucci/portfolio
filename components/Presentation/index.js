'use client';

import './presentation.scss';

import me from '/public/images/portrait.jpg'
import Image from 'next/image';

import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Presentation() {

  useEffect(() => {
    const blob = document.querySelectorAll('span');
    blob.forEach(element => {
      element.addEventListener('mouseover', () => {
        gsap.to(element, { color: '#ffffffdf', duration: 0.5 });
      })
      element.addEventListener('mouseout', () => {
        gsap.to(element, { color: '#fe800c', delay: 0.1 });
      })
    });
  }, [])


  return (
    <div className='container-presentation'>
      <h2 className='scrollTitle'>WHO I AM</h2>
      <h3 className='scrollIntro'>INTRODUCING</h3>
      <h3 className='scrollMyself'>MYSELF</h3>
      <section className='container-presentation-card'>
        <div className='container-presentation-card-image'>

          <Image src={me} className='container-presentation-card-image--me' alt='Gaetan Santucci' />
        </div>
        <div className='container-presentation-card-description'>
          <p><span >name :</span> Santucci</p>
          <p><span >firstname :</span> Gaëtan</p>
          <p><span >nationality :</span> french fries</p>
          <p>I'am a web fullstack developper <span className='blob'>J</span><span className='blob'>A</span><span className='blob'>V</span><span className='blob'>A</span><span className='blob'>S</span><span className='blob'>C</span><span className='blob'>R</span><span className='blob'>I</span><span className='blob'>P</span><span className='blob'>T</span></p>
          <p><span >why this job :</span> I like the possibility of being able to create endlessly and to constantly explore new horizons.</p>
          <p><span className='container-presentation-card-description-object'>personnality :</span> curious, caring, listening, perfectionnist... a little to much</p>
          <p><span className='container-presentation-card-description-object'>hobbies :</span> gaming, basketball (I'm a Celtic's fan), photography</p>
        </div>
      </section>
    </div>
  )
}