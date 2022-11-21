import { gsap } from 'gsap';

export function letteringHover() {
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

export function headerAnimation() {

  const logo = document.querySelector('.logo')
  const hexaSma = document.querySelectorAll('.small')
  const hexaMed = document.querySelectorAll('.medium')
  const hexaLar = document.querySelectorAll('.large')

  gsap.to(logo, {
    scrollTrigger: {
      trigger: '.header',
      scrub: true,
      start: "bottom 90%",

    },
    duration: 2,
    autoAlpha: 0,
    y: 400,
  })
  gsap.to(hexaSma, {
    scrollTrigger: {
      trigger: '.header',
      scrub: true,
      start: "bottom 80%"
    },
    // delay: 0.2,
    y: -200,
  })
  gsap.to(hexaMed, {
    scrollTrigger: {
      trigger: '.header',
      scrub: true,
      start: "bottom 80%"
    },
    // delay: 0.2,
    y: 200,
    autoAlpha: 0
  }),
    gsap.to(hexaLar, {
      scrollTrigger: {
        trigger: '.header',
        scrub: true,
        start: "bottom 75%"
      },
      delay: -0.2,
      y: 400,
    })
}

export function presentationAnimation() {

  gsap.to('.container__presentation-card', {
    scrollTrigger: {
      trigger: '.container__presentation',
      scrub: true,
      start: "+=700"
    },
    y: 100,
    autoAlpha: 0
  })
  gsap.to('.scrollTitle', {
    scrollTrigger: {
      trigger: '.presentation__card',
      scrub: true,
      start: "top top"
    },
    delay: -0.2,
    y: 600,
  })
  gsap.to('.scrollIntro', {
    scrollTrigger: {
      trigger: '.presentation__card',
      scrub: true,
      start: "top top"
    },
    y: 200,
  })
  gsap.to('.container__presentation-card-image--me', {
    scrollTrigger: {
      trigger: '.scrollTitle',
      scrub: true,
      start: 'top 70%',
    },
    x: 0,
    autoAlpha: 1,
  })
  gsap.to('.container__presentation-card-description', {
    scrollTrigger: {
      trigger: '.scrollTitle',
      scrub: true,
      start: 'top 70%',
    },
    x: 0,
    autoAlpha: 1,
  })
}

export function skillAnimation() {
  const title = document.querySelector('.container__skill__title');
  const intro = document.querySelector('.container__skill__intro');

  gsap.to(title, {
    scrollTrigger: {
      trigger: '.container__skill',
      scrub: true,
      start: 'top +=1000',
    },
    y: 250
  })
  gsap.to(intro, {
    scrollTrigger: {
      trigger: '.container__skill',
      scrub: true,
      start: 'top top',
    },
    y: -150
  })

  gsap.to('.container__skill__list__details',
    {
      scrollTrigger: {
        trigger: intro,
      },
      autoAlpha: 1,
      y: 0,
    }
  )

  gsap.to('.box-shadow-left', {
    scrollTrigger: {
      trigger: intro,
      scrub: true,
    },
    autoAlpha: 1,
    x: 0,
  })
  gsap.to('.box-shadow-right', {
    scrollTrigger: {
      trigger: '.box-shadow-left',
      scrub: true,
    },
    autoAlpha: 1,
    x: 0,
  })
  gsap.to('.box-shadow-left-two', {
    scrollTrigger: {
      trigger: '.box-shadow-right',
      scrub: true,
    },
    autoAlpha: 1,
    x: 0,
  })
  gsap.to('.skillcard', {
    scrollTrigger: {
      trigger: title,
      scrub: true,
    },
    y: 50,
  })
}

export function projectAnimation() {
  const TLProject = gsap.timeline();

  TLProject.to('.container__project__scrollTitle', {
    scrollTrigger: {
      trigger: '.container__project',
      scrub: true,
    },
    y: 200,
  })
    .to('.container__project__scrollIntro', {
      scrollTrigger: {
        trigger: '.container__project__scrollTitle',
        scrub: true,
      },
      y: -100,
    })
    .to('.container__project__card', {
      scrollTrigger: {
        trigger: '.container__project__scrollTitle',
        scrub: true,
      },
      y: 50,
    })
}