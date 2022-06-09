import LocomotiveScroll from 'locomotive-scroll';
import i18next from 'i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';

/** ******************************* */
/*
 * smooth scroll start
 */
global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;

/* eslint-disable-next-line */
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
//   smoothMobile: false,
//   inertia: 1.1,
// });

// global.locoScroll = locoScroll;
/*
 * smooth scroll end
 */
/** ******************************* */

/** ******************************* */
/*
 * form handlers start
 */
// const forms = ['[data-home-contact]'];
// const formsWithRedirect = ['[data-callback-form], [data-home-contact]'];
const formsWithRedirect = ['[data-callback-form]'];
const formsTel = ['[data-home-contact]'];

formsWithRedirect.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          const backdrop = document.querySelector('.thanks-page');
          gsap.to(backdrop, { autoAlpha: 1 });
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-name]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-phone]'),
              typeInput: 'phone',
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(16, i18next.t('field_too_short', { cnt: 19 - 7 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },
      },
    });
  }
});

formsTel.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          const backdrop = document.querySelector('.thanks-page');
          gsap.to(backdrop, { autoAlpha: 1 });
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-name]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          email: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-email]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-phone]'),
              typeInput: 'phone',
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(16, i18next.t('field_too_short', { cnt: 19 - 7 })),

            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },
      },
    });
  }
});

// forms.forEach(form => {
//   const $form = document.querySelector(form);
//   if ($form) {
//     /* eslint-disable */
//     new FormMonster({
//       /* eslint-enable */
//       elements: {
//         $form,
//         showSuccessMessage: false,
//         successAction: () => {
//           window.location.href = 'message';
//         },
//         $btnSubmit: $form.querySelector('[data-btn-submit]'),
//         fields: {
//           name: {
//             inputWrapper: new SexyInput({
//               animation: 'none',
//               $field: $form.querySelector('[data-field-name]'),
//             }),
//             rule: yup
//               .string()
//               .required(i18next.t('required'))
//               .trim(),
//             defaultMessage: i18next.t('name'),
//             valid: false,
//             error: [],
//           },
//           // email: {
//           //   inputWrapper: new SexyInput({
//           //     animation: 'none',
//           //     $field: $form.querySelector('[data-field-email]'),
//           //   }),
//           //   rule: yup
//           //     .string()
//           //     .required(i18next.t('required'))
//           //     .trim(),
//           //   defaultMessage: i18next.t('name'),
//           //   valid: false,
//           //   error: [],
//           // },
//           phone: {
//             inputWrapper: new SexyInput({
//               animation: 'none',
//               $field: $form.querySelector('[data-field-phone]'),
//               typeInput: 'phone',
//             }),
//             rule: yup
//               .string()
//               .required(i18next.t('required'))
//               .min(17, i18next.t('field_too_short', { cnt: 17 - 5 })),

//             defaultMessage: i18next.t('phone'),
//             valid: false,
//             error: [],
//           },
//         },
//       },
//     });

//     $form.querySelector('.js-mask-absolute').addEventListener(
//       'click',
//       () => {
//         $form.querySelector('[name="phone"]').focus();
//       },
//       false,
//     );
//   }
// });

/*
 * form handlers end
 */
// function disableScroll() {
//   const containersScroll = document.querySelectorAll('[data-disable-page-scroll]');
//   containersScroll.forEach((block) => {
//     block.addEventListener('mouseenter', () => {
//       locoScroll.stop();
//     });
//     block.addEventListener('mouseleave', () => {
//       locoScroll.start();
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   disableScroll();
//   window.locoScroll.update();
// });
/** ******************************* */
// const paralaxImages = document.querySelectorAll('[data-paralax]');
// paralaxImages.forEach(image => {
//   const wrap = document.createElement('div');
//   wrap.style.overflow = 'hidden';
//   wrap.style.height = '100%';
//   image.parentElement.prepend(wrap);
//   gsap.set(image, { willChange: 'transform', scale: 1.1 });
//   wrap.prepend(image);

//   gsap
//     .timeline({
//       ease: 'none',
//       scrollTrigger: {
//         trigger: wrap,
//         scrub: 0.5,
//         onLeave: () => {
//           // console.log('leave');
//         },
//         // markers: true,
//       },
//     })
//     .fromTo(
//       image,
//       {
//         y: -35,
//       },
//       {
//         y: 35,
//         ease: 'linear',
//       },
//     );
// });
