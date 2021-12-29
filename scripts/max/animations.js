export const openingAnimation = () => {
    TweenMax.to('.first', 1.5, {
        delay: .2,
        left: '-100%',
        ease: Expo.easeInOut
    })
    TweenMax.to('.second', 1.5, {
        delay: .4,
        left: '-100%',
        ease: Expo.easeInOut
    })
    TweenMax.to('.third', 1.5, {
        delay: .6,
        left: '-100%',
        ease: Expo.easeInOut
    })
    TweenMax.staggerFrom('.nav__logo', 1, {
        delay: 1,
        opacity: 0,
        x: -40,
        ease: Expo.easeInOut
      })
    TweenMax.staggerFrom('.nav__menu li', 1, {
        delay: 1.2,
        opacity: 0,
        x: -30,
        ease: Power4.easeInOut
      }, 0.1)
      TweenMax.staggerFrom('.nav__menu-btn', 1, {
          delay: 1.2,
          opacity: 0,
          x: -40,
          ease: Power4.easeInOut
      })
    TweenMax.staggerFrom('.home__title', 1, {
        delay: 1.6,
        opacity: 0,
        x: -100,
        ease: Expo.easeInOut
    })
    TweenMax.to('.first-image', 1, {
        delay: 2.2,
        width: '100%',
        ease: Expo.easeInOut
    })
    TweenMax.to('.second-image', 1, {
        delay: 2.2,
        width: '100%',
        ease: Expo.easeInOut
    })
    TweenMax.to('.socials--bar', 1, {
        delay: 2.4,
        opacity: 1,
        ease: Expo.easeInOut
    })
}