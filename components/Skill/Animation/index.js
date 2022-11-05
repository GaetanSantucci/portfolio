'use client';
import './animation.scss'
import node from '/public/images/node.png';
import Image from 'next/image';


import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function AnimatedSVG() {

  useEffect(() => {
    console.clear();
    const svg = document.querySelectorAll('.svgAnim')

    gsap.set(svg, { autoAlpha: 1 })
    var angles = [0, 45, 90, 140, 180, 225, 270, 315, 0, 45, 90, 140, 180, 225, 270, 315];
    var rays = gsap.utils.toArray('.ray');

    var lines = gsap.utils.toArray(".ray line");
    var allText = gsap.utils.toArray(".ray text");

    // the prep =====
    gsap.timeline({
      delay: 1,
      onComplete: () => {
        gsap.delayedCall(1, action)
      }
    })
      .to(rays, {
        rotation: function (i, target, list) {
          return -angles[i]
        },
        duration: function (i, target, list) {
          return 0.5 + (i * 0.1)
        },
        ease: 'none',
        transformOrigin: 'left center',
        stagger: -0.5
      })


    function action() {
      gsap.utils.toArray(".ray circle").forEach(function (dot, i) {

        var action = gsap.timeline({ repeat: -1, yoyo: true, delay: i * 0.3 })
          .to(lines[i], { attr: { x1: '+=10' }, duration: 2, ease: 'none' })
          //.to(allText[i], {attr:{x:'+=10'}, duration:2, ease:'none'},0)
          .to(dot, { attr: { cx: '+=10' }, duration: 2, ease: 'none' }, 0)
          .to(lines[i], { attr: { y1: '+=10' }, duration: 2, ease: 'power2.out' }, 0)
          //.to(allText[i], {attr:{y:'+=10'}, duration:2, ease:'none'},0)
          .to(dot, { attr: { cy: '+=10' }, duration: 2, ease: 'power2.out' }, 0)



        dot.addEventListener("mouseenter", function () {
          action.pause();
          gsap.to(dot, { scale: 1.5, transformOrigin: 'center', fill: '#fe800C' })
          // gsap.to(allText[i], { autoAlpha: 1 })

        });

        dot.addEventListener("mouseleave", function () {
          action.play();
          gsap.to(dot, { scale: 1, fill: '#fe800C' })
          // gsap.to(allText[i], { autoAlpha: 0 })
        })
      })

    }

  }, [])

  return (
    <>
      <svg className='svgAnim' viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" >
        <g class="ray">
          {/* <clipPath id="myCircle"> */}
          <line x1="300" y1="150" x2="150" y2="150" />
          <circle cx="300" cy="150" r='55' />
          {/* </clipPath> */}
          {/* <Image src={node} width='50px' height='50px' clipPath="url(#myCircle)" alt='node logo' /> */}
          {/* <text class="" x="320" y="155" text-anchor="middle">90</text> */}
        </g>
        <g class="ray">
          <line x1="300" y1="150" x2="150" y2="150" />
          <circle cx="300" cy="150" r='55' />
          <text class="" x="320" y="155" text-anchor="middle">45</text>
        </g>
        <g class="ray">
          <line x1="300" y1="150" x2="150" y2="150" />
          <circle cx="300" cy="150" r='55' />
          <text class="" x="320" y="155" text-anchor="middle">0</text>
        </g>
        <g class="ray">
          <line x1="300" y1="150" x2="150" y2="150" />
          <circle cx="300" cy="150" r='55' />
          <text class="" x="320" y="155" text-anchor="middle">315</text>
        </g>
        <g class="ray">
          <line x1="300" y1="150" x2="150" y2="150" />
          <circle cx="300" cy="150" r='55' />
          <text class="" x="320" y="155" text-anchor="middle">270</text>
        </g>
        <g class="ray">
          <line x1="300" y1="150" x2="150" y2="150" />
          <circle cx="300" cy="150" r='55' />
          <text class="" x="320" y="155" text-anchor="middle">225</text>
        </g>
        <g class="ray">
          <line x1="300" y1="150" x2="150" y2="150" />
          <circle cx="300" cy="150" r='55' /><text class="" x="320" y="155" text-anchor="middle">180</text>
        </g>
        <g class="ray">
          <line x1="300" y1="150" x2="150" y2="150" />
          <circle cx="300" cy="150" r='55' />
          <text class="" x="320" y="155" text-anchor="middle">140</text>
        </g>


      </svg>

    </>
  )
}