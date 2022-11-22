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

  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState(false)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
      setIsLoading(false);
      setAnimation(true)
    }, 2000);
  }
}, [isLoading]);
  
useEffect(()=>{
  if(animation){
    headerAnimation();
    letteringHover();
    presentationAnimation();
    skillAnimation();
    projectAnimation();
  }
}, [animation])

  if(isLoading){
    return <Loading />
  }

  return (
  <div className='container' >
      <Header />
      <Hexagone />
      <Presentation />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}
