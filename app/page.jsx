'use client';
import '/public/styles/page.module.scss';

import Hexagone from '../components/Parallax/hexaHeader.js'

import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Footer from '../components/Footer';
// import Loading from '../components/Loading';
import { useEffect } from 'react';
import gsap  from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { headerAnimation, letteringHover, presentationAnimation, projectAnimation, skillAnimation } from '../utils/gsap.js';

export default function Home() {

  // const isLoading =  true/* useSelector((state) => state.isLoading) */
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    // scrollSmoother.create();
    headerAnimation();
    letteringHover();
    presentationAnimation();
    skillAnimation();
    projectAnimation();
  }, [])

  // if(isLoading){
  //   return <Loading />
  // }

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
