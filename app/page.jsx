import '/public/styles/page.module.scss';

import Hexagone from '../components/Parallax/hexaHeader.js'

import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skill from '../components/Skill';
import Animation from '../components/Project';

export default function Home() {

  
  return (
    <div className='container' >
      <Header />
      <Hexagone />
      <Presentation />
      <Skill />
    </div>
  )
}
