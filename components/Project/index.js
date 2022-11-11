'use client';

import Hexaskill from '../Parallax/hexaSkill';
import './project.scss';
import Link from 'next/link';
import projects from '/data/project';


export default function Project() {

  // useEffect(() => {
  //   const link = document.querySelectorAll('.container__project__card__hexa__link');
  //   const stroke = document.querySelectorAll('.container__project__card__hexa__svg');
  //   link.document.addEventListener('mouseover', () => {
  //     stroke.style.stroke = '#fe800c'
  //   })
  // })
  return (
    <div className='container__project'>
      <h2 className='scrollTitle absolute'>WORK</h2>
      <h3 className='scrollIntro absolute'>MY <span className='scrollMyself'>
        <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></span></h3>
      <div className='container__project__card'>
        <div className='container__project__card__line'></div>
        {
          projects.map((project) => {
            return (<>
              <div className='container__project__card__hexa'>
                <Hexaskill className='container__project__card__hexa__svg' />
                <Link href={project.slug} className='container__project__card__hexa__link' target='blank'>
                  <p>{project.name}</p>
                </Link>
              </div>
            </>
            )
          })
        }
      </div>
    </div>
  )
}