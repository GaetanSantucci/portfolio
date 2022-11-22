import gsap from 'gsap';

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

  gsap.to('.logo', {
    scrollTrigger: {
      trigger: 'header',
      scrub: true,
      start: "bottom 90%",

    },
    duration: 2,
    autoAlpha: 0,
    y: 400,
  })
  gsap.to('.small', {
    scrollTrigger: {
      trigger: '.header',
      scrub: true,
      start: "bottom 80%"
    },
    y: -200,
  })
  gsap.to('.medium', {
    scrollTrigger: {
      trigger: '.header',
      scrub: true,
      start: "bottom 80%"
    },
    // delay: 0.2,
    y: 200,
    autoAlpha: 0
  }),
    gsap.to('.large', {
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

  gsap.to('.container__presentation__card', {
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
      trigger: '.container__presentation',
      scrub: true,
      start: "top center"
    },
    delay: -0.2,
    y: 600,
  })
  gsap.to('.scrollIntro', {
    scrollTrigger: {
      trigger: '.container__presentation',
      scrub: true,
      start: "top 40%"
    },
    y: 200,
  })
  gsap.to('.container__presentation__card__image--me', {
    scrollTrigger: {
      trigger: '.scrollTitle',
      scrub: true,
      start: 'top 70%',
    },
    x: 0,
    autoAlpha: 1,
  })
  gsap.to('.container__presentation__card__description', {
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

  gsap.to('.container__skill__title', {
    scrollTrigger: {
      trigger: '.container__skill',
      scrub: true,
      start: 'top +=1000',
    },
    y: 250
  })
  gsap.to('.container__skill__intro', {
    scrollTrigger: {
      trigger: '.container__skill',
      scrub: true,
      start: 'top +=800',
    },
    y: -150
  })

  gsap.to('.container__skill__list__details',
    {
      scrollTrigger: {
        trigger: '.container__skill__intro',
      },
      autoAlpha: 1,
      y: 0,
    }
  )

  gsap.to('.box-shadow-left', {
    scrollTrigger: {
      trigger: '.container__skill__intro',
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
      trigger: '.container__skill__title',
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

export function project() {
  gsap.registerPlugin(Draggable, InertiaPlugin);

  var cards = gsap.utils.toArray(".creative-pro"),
    dragDistancePerRotation = 3000,
    radius = 520,
    proxy = document.createElement("div"), // just a dummy element that'll get dragged, but we don't care about it.
    progressWrap = gsap.utils.wrap(0, 1),
    spin = gsap.fromTo(cards, {
      rotationY: i => i * 360 / cards.length
    }, {
      rotationY: "-=360",
      duration: 20,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50% " + -radius + "px"
    }),
    startProgress;

  Draggable.create(proxy, {
    trigger: ".demoWrapper", // activate the dragging when the user presses on the .demoWrapper
    type: "x", // we only care about movement on the x-axis.
    inertia: true,
    allowNativeTouchScrolling: true,
    onPress() {
      gsap.killTweensOf(spin); // if it's in the middle of animating the spin back to timeScale: 1, kill that.
      spin.timeScale(0); // stop the spin.
      startProgress = spin.progress(); // remember the current progress value because we'll make the drag relative to that.
    },
    onDrag: updateRotation,
    onThrowUpdate: updateRotation,
    onRelease() {
      if (!this.tween || !this.tween.isActive()) { // if the user clicked and released (no inertia flick), resume the spin
        gsap.to(spin, { timeScale: 1, duration: 1 });
      }
    },
    onThrowComplete() { // resume the spin after the inertia tween finishes
      gsap.to(spin, { timeScale: 1, duration: 1 });
    }
  });

  function updateRotation() {
    let p = startProgress + (this.startX - this.x) / dragDistancePerRotation;
    spin.progress(progressWrap(p));
  }
}