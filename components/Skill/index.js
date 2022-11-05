import './skill.scss';
import Hexaskill from '../Parallax/hexaSkill.js';
import node from '/public/images/node.png';
import javascript from '/public/images/javascript.png';
import react from '/public/images/react.png';
import nextjs from '/public/images/nextjs.png';
import postgres from '/public/images/postgres.png';
import html from '/public/images/html.png';
import css from '/public/images/css.png';
import mongo from '/public/images/mongo.png';
import Image from 'next/image';
import AnimatedSVG from './Animation';

export default function Skill() {
  return (
    <div className="container__skill">
      <h2 className='container__skill__title '>SKILL</h2>
      <h3 className='container__skill__intro '>Languages and <span className='container__skill__knowledges'>
        <span>K</span><span>n</span><span>o</span><span>w</span><span>l</span><span>e</span><span>d</span><span>g</span><span>e</span><span>s</span></span></h3>
      <div className="container__skill__card">
        <div className="container__skill__card__animation">
          <AnimatedSVG />
          <Hexaskill />
        </div>
        <div className="container__skill__card__animation">
          <AnimatedSVG />
          <Hexaskill />
        </div>
      </div>
    </div>
  )
}