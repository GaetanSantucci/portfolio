'use client';

import HexaProject from '../Parallax/hexaProject';
import './project.scss';
import Link from 'next/link';
import projects from '/data/project';


export default function Project() {

  return (
    <div className='container__project'>
      <h2 className='container__project__title '>WORK</h2>
      <h3 className='container__project__subtitle '>My <span className='container__project__effect'>
        <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></span></h3>
      <div className='container__project__card demoWrapper'>
        <div className='container__project__card__line '></div>
        {
          projects.map((project) => {
            return (

              <div key={project.name} className='container__project__card__hexa creative-pro' >
                <HexaProject className='container__project__card__hexa__svg' />
                <Link href={project.slug} className='container__project__card__hexa__link' target='blank'>
                  <p>{project.name}</p>
                </Link>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}