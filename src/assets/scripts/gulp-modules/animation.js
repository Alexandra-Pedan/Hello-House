// gsap.registerPlugin(ScrollTrigger);
// /* eslint-disable no-undef */
// locoScroll.on('scroll', () => {
//   // eslint-disable-next-line no-unused-expressions
//   ScrollTrigger.update;
// });

// ScrollTrigger.scrollerProxy(document.querySelector('.page__inner'), {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: document.querySelector('.page__inner').style.transform ? 'transform' : 'fixed',
// });
// ScrollTrigger.addEventListener('fixed', () => locoScroll.update());

// ScrollTrigger.refresh();

const spanBezier1 = 'power4.ease';
const spanEntries1 = document.querySelectorAll('[data-span-entry1]');
const spanEntries2 = document.querySelectorAll('[data-span-entry2]');
const spanEntries3 = document.querySelectorAll('[data-span-entry3]');
spanEntries1.forEach((section, index) => {
  gsap.set(section, { overflow: 'hidden' });
  section.innerHTML = `
    <div>
      ${section.innerHTML}
    </div>
  `;
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 1,
      trigger: section,
      scroller: document.querySelector('.page__inner'),
      onEnter: () => {
        if (index === 0) console.log('enter');
      },
      once: true,
    },
  });
  tl.fromTo(
    section.querySelector('div'),
    {
      y: '50%',
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: spanBezier1,
    },
  );
});
// spanEntries2.forEach((section, index) => {
//   gsap.set(section, { overflow: 'hidden' });
//   section.innerHTML = `
//     <div>
//       ${section.innerHTML}
//     </div>
//   `;
//   const tl = gsap.timeline({
//     paused: true,
//     scrollTrigger: {
//       triggerHook: 1,
//       trigger: section,
//       scroller: document.body,
//       onEnter: () => {
//         if (index === 0) console.log('enter');
//       },
//       once: true,
//     },
//   });
//   tl.fromTo(
//     section.querySelector('div'),
//     { y: '50%', autoAlpha: 0 },
//     {
//       y: 0,
//       autoAlpha: 1,
//       delay: 0.3,
//       duration: 1,
//       ease: spanBezier1,
//     },
//   );
// });
// spanEntries3.forEach((section, index) => {
//   gsap.set(section, { overflow: 'hidden' });
//   section.innerHTML = `
//     <div>
//       ${section.innerHTML}
//     </div>
//   `;
//   const tl = gsap.timeline({
//     paused: true,
//     scrollTrigger: {
//       triggerHook: 1,
//       trigger: section,
//       scroller: document.body,
//       onEnter: () => {
//         if (index === 0) console.log('enter');
//       },
//       once: true,
//     },
//   });
//   tl.fromTo(
//     section.querySelector('div'),
//     { y: '50%', autoAlpha: 0 },
//     {
//       y: 0,
//       autoAlpha: 1,
//       delay: 0.5,
//       duration: 1,
//       ease: spanBezier1,
//     },
//   );
// });
const paralaxImages = document.querySelectorAll('[data-paralax]');
paralaxImages.forEach((image) => {
  const wrap = document.createElement('div');
  wrap.style.overflow = 'hidden';
  wrap.style.height = '100%';
  image.parentElement.prepend(wrap);
  gsap.set(image, { willChange: 'transform', scale: 1.1 });
  wrap.prepend(image);

  gsap
    .timeline({
      ease: 'none',
      scrollTrigger: {
        start: -100 % top,
        end: 100 % top,
        trigger: wrap,
        scrub: 0.5,
        onLeave: () => {
          // console.log('leave');
        },
        // markers: true,
      },
    })
    .fromTo(
      image,
      {
        y: -35,
        scale: 1,
      },
      {
        y: 35,
        scale: 1.1,
        ease: 'linear',
      },
    );
});
