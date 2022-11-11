import './card.scss';
import github from '/public/images/githubLogo.png';
import mongo from '/public/images/mongo.png';
import nextjs from '/public/images/nextjs.png';
import node from '/public/images/node.png';
import postgres from '/public/images/postgres.png';
import react from '/public/images/react.png';
import sass from '/public/images/sass.png';
import linux from '/public/images/linux-platform.png';
import windows from '/public/images/windows.png';
import Image from 'next/image';


export default function SkillCard() {
  const skill = [
    {
      name: 'Front',
      desc: 'React'
    }, {
      name: 'Front',
      desc: 'NextJS'
    }, {
      name: 'Front',
      desc: 'Html / Css'
    }, {
      name: 'Front',
      desc: 'Sass'
    }, {
      name: 'Back',
      desc: 'NodeJS'
    }, {
      name: 'Back',
      desc: 'Express'
    }, {
      name: 'Back',
      desc: 'PostgreSQL'
    }, {
      name: 'Back',
      desc: 'MongoDB'
    }, {
      name: 'Front',
      desc: 'Gsap'
    }, {
      name: 'Front',
      desc: 'Tailwind'
    }, {
      name: 'Other',
      desc: 'Github'
    }, {
      name: 'Other',
      desc: 'Sqitch'
    }, {
      name: 'Other',
      desc: 'Windows'
    }, {
      name: 'Other',
      desc: 'Linux'
    }, {
      name: 'Back',
      desc: 'PgAdmin'
    }, {
      name: 'Other',
      desc: 'Vsc'
    }
  ]
  return (
    <div className='container__skillcard__front'>
      <div className='container__skill__list left'>
        <div className='box-shadow'>
          <ul className='container__skill__list--left'>
            {
              skill.map((spec) => {
                if (spec.name === 'Front') {
                  return <li classname='skill' key={spec.desc}>- {spec.desc}</li>
                }
              })
            }
          </ul>
        </div>
        <div className='container__skill__list__details'>
          <h2>FRONT</h2>
          <div className='images'>
            <Image src={react} alt='logo react' />
            <Image src={nextjs} alt='logo nextjs' />
            <Image src={sass} alt='logo sass' />
          </div>
        </div>
      </div>
      <div className='container__skill__list right'>
        <div className='container__skill__list__details'>
          <div className='images'>
            <Image src={node} alt='logo nodejs' />
            <Image src={mongo} alt='logo mongodb' id='mongo' />
            <Image src={postgres} alt='logo postgresql' />
          </div>
          <h2>BACK</h2>
        </div>
        <div className='box-shadow'>
          <ul className='container__skill__list--right'>
            {
              skill.map((spec) => {
                if (spec.name === 'Back') {
                  return <li classname='skill' key={spec.desc}>{spec.desc} -</li>
                }
              })
            }
          </ul>
        </div>
      </div>
      <div className='container__skill__list left'>
        <div className='box-shadow'>
          <ul className='container__skill__list--left'>
            {
              skill.map((spec) => {
                if (spec.name === 'Other') {
                  return (
                    <li classname='skill' key={spec.desc}>- {spec.desc}</li>

                  )
                }
              })
            }
          </ul>
        </div>
        <div className='container__skill__list__details'>
          <h2>TOOLS</h2>
          <div className='images'>
            <Image src={windows} alt='logo windows' />
            <Image src={linux} alt='logo linux' />
            <Image src={github} alt='logo github' />

          </div>
        </div>
      </div>
    </div >
  )
}