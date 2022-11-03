import './skill.scss';

export default function Skill() {
  return (
    <div className="container__skill">
      <h2 className='container__skill__title absolute'>MY SKILLS</h2>
      <h3 className='container__skill__intro  absolute'>Tools and <span className='container__skill__knowledges'>
        <span>K</span><span>n</span><span>o</span><span>w</span><span>l</span><span>e</span><span>d</span><span>g</span><span>e</span><span>s</span></span></h3>
      <div className="container__skill__card"></div>
    </div>
  )
}