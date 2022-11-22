import SkillCard from './Card';
import './skill.scss';

export default function Skill() {


  const skillBack = ['NodeJS', 'PostgreSQL', 'Express', 'NPM', 'MongoDB']
  const skillFront = ['HTML', 'CSS / SCSS', 'React', 'NextJS', 'EJS', 'Redux']
  return (
    <div className="container__skill">
      <h2 className='container__skill__title '>SKILL</h2>
      <h3 className='container__skill__subtitle '>Languages and <span className='container__skill__knowledges'>
        <span>K</span><span>n</span><span>o</span><span>w</span><span>l</span><span>e</span><span>d</span><span>g</span><span>e</span><span>s</span></span></h3>
      <SkillCard />
    </div>
  )
}