'use client';
import '/public/styles/page.module.scss';

import Hexagone from '../components/Parallax/hexaHeader.js'
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import gsap  from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { headerAnimation, letteringHover, presentationAnimation, projectAnimation, skillAnimation } from '../utils/animation.js';

export default function Home() {
        
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    headerAnimation();
    letteringHover();
    presentationAnimation();
    skillAnimation();
    projectAnimation();
}, [])

  return (
  <div className='container' >
      <Header />
      <div><Hexagone /></div>
      <Presentation />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}
