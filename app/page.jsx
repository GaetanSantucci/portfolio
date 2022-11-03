import '/public/styles/page.module.scss';

import Header from '../components/Header';
import Presentation from '../components/Presentation';

export default function Home() {

  
  return (
    <div className='container' >
      <Header />
      <Presentation />
    </div>
  )
}
