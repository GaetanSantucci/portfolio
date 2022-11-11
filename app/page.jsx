import '/public/styles/page.module.scss';

import Hexagone from '../components/Parallax/hexaHeader.js'

import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Loading from '../components/Loading';

export default function Home() {

  const isLoading =  true/* useSelector((state) => state.isLoading) */

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
    </div>
  )
}
