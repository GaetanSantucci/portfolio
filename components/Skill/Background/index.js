import './background.scss'

import Image from 'next/image';
import node from '/public/images/node.png';
import css from '/public/images/css.png';
import html from '/public/images/html.png';
import postgres from '/public/images/postgres.png';
import reactLogo from '/public/images/react.png';
import nextLogo from '/public/images/nextjs.png';
import mongo from '/public/images/mongo.png';
import javascript from '/public/images/javascript.png';
import gsap from '/public/images/gsap.png';
import heroku from '/public/images/heroku.png';
import npm from '/public/images/npm.png';

export default function HexagoneHover() {
  return (
    <div className="container__skill__card">
      <div className='container__hexagone'>
        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>

        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>

        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>NodeJS</h2>
            <Image src={node} alt='logo NodeJS' width={50} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>React</h2>
            <Image src={reactLogo} alt='logo React' width={55} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>Javascript</h2>
            <Image src={javascript} alt='logo Javascript' width={50} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>

        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>

          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>Css</h2>
            <Image src={css} alt='logo CSS' width={50} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>Gsap</h2>
            <Image src={gsap} alt='logo GSAP' width={50} height='auto' className='gsap-logo' />

          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>

        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>PostgreSQL</h2>
            <Image src={postgres} alt='logo Postgres' width={50} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>NextJS</h2>
            <Image src={nextLogo} alt='logo nextjs' width={60} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>

        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>Npm</h2>
            <Image src={npm} alt='logo npm' width={60} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>MongoDB</h2>
            <Image src={mongo} alt='logo MongoDB' width={40} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>

        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>Html</h2>
            <Image src={html} alt='logo HTML' width={45} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'>
            <h2>Heroku</h2>
            <Image src={heroku} alt='logo Heroku' width={50} height='auto' />
          </div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>

        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>

        <div className='row'>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
          <div className='hexagon'></div>
        </div>
      </div>
    </div>
  )
}