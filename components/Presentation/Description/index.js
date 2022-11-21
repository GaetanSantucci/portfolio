import user from '/data/owner.js';

export default function Description() {
  user.map((elem) => console.log(elem.customer.name))
  return (
    <div className='container__presentation-card-description'>

      <p><span >name :</span> Santucci</p>
      <p><span >firstname :</span> Gaëtan</p>
      <p><span >nationality :</span> french fries</p>
      <p>I'am a web fullstack developper <span className='blob'>J</span><span className='blob'>A</span><span className='blob'>V</span><span className='blob'>A</span><span className='blob'>S</span><span className='blob'>C</span><span className='blob'>R</span><span className='blob'>I</span><span className='blob'>P</span><span className='blob'>T</span></p>
      <p><span >why this job :</span> I like the possibility of being able to create endlessly and to constantly explore new horizons.</p>
      <p><span className='container__presentation-card-description-object'>personnality :</span> curious, caring, listening, perfectionnist... a little to much</p>
      <p><span className='container__presentation-card-description-object'>hobbies :</span> gaming, basketball (I'm a Celtic's fan), photography</p>
    </div>
  )
}