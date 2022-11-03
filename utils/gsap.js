import { gsap } from 'gsap';

export function presentationHover() {
  const blob = document.querySelectorAll('span');
  blob.forEach(element => {
    element.addEventListener('mouseover', () => {
      gsap.to(element, { color: '#ffffffdf', duration: 0.5 });
    })
    element.addEventListener('mouseout', () => {
      gsap.to(element, { color: '#fe800c', delay: 0.1 });
    })
  });
} 