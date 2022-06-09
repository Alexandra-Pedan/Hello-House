// const swiper2 = new Swiper('.swiper-building-bottom', {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 6,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// const swiper3 = new Swiper('.swiper-building', {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.building-next',
//     prevEl: '.building-prev',
//   },
//   thumbs: {
//     swiper: swiper2,
//   },
// });

const buildPopupActive = 'build-popup-active';
let slider = null;
const currentCountSlides = 0;
function getBuildData(id) {
  const data = new FormData();
  // data.append('action', 'buildProgress');
  data.append('id', id);
  return fetch('/wp-admin/admin-ajax.php', {
    method: 'POST',
    body: data,
  });
}
function getBuildData(id) {
  const data = new FormData();
  data.append('action', 'buildProgress');
  data.append('id', id);
  return fetch('/wp-admin/admin-ajax.php', {
    method: 'POST',
    body: data,
  });
}
function createBuildCard(build) {
  return `
  <li class="building-item js-build-card ${build.section}  data-build-id="${build.id}">
    <div class="building-item__info">
      <div class="month">${build.month}</div>
      <div class="info-container">
        <p class="foto"><span class="num">${build.slider.length}</span>фото</p>
        <p class="date"><span data-build-date="">${build.date.d}</span>
          <span  data-build-month=""> ${build.date.m}</span>
          <span data-build-year=""> ${build.date.y}</p>
      </div>
    </div>
    <div class="building-item__img">
      <img src="${build.slider[0]}">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <path d="M53.0918 39V45.4801C49.6844 45.4801 46.9225 42.5791 46.9225 39H40V60H46.9297C46.9297 56.4209 49.6915 53.5199 53.099 53.5199V60H60V39H53.0918Z" fill="#008B64"/>
      </svg>
    </div>
  </li>`;
}

function createBuilds(currentCount, builds, count = 6) {
  const renderingBuilds = [];
  for (let i = currentCount; i < currentCount + count; i += 1) {
    renderingBuilds.push(createBuildCard(builds[i]));
  }
  return renderingBuilds.join('');
}

function loadMoreHandler(state, containers) {
  const count =
    state.countShowBuild + 6 < state.builds.length ? 6 : state.builds.length - state.countShowBuild;
  if (count < 6 || state.countShowBuild + 6 === state.builds.length) {
    // eslint-disable-next-line no-param-reassign
    containers.loadMore.style.display = 'none';
  }
  const buildsHtml = createBuilds(state.countShowBuild, state.builds, count);
  containers.buildContainer.insertAdjacentHTML('beforeend', buildsHtml);
}

function initBuildPopup(build, containers) {
  containers.buildPopup.classList.add(buildPopupActive);
  updateContentPopup(build, containers);
}

function buildContainerHandler(event, state, containers) {
  const card = event.target.closest('.js-build-card');
  // const isTouchCard = card.classList.contains('js-build-card');
  const id = +card.dataset.buildId;
  console.log(124);
  // if (!id) return;
  // state.updateCurrentId(id);

  const build = state.builds.filter(build => build.id === id);
  console.log(125);
  // if (build.length === 0) return;
  initBuildPopup(build[0], containers);
}

function closeHandler(containers) {
  containers.buildPopup.classList.remove(buildPopupActive);
}

function nextBuildHandler(state, containers) {
  const index = state.nextBuildId();
  updateContentPopup(state.builds[index], containers);
}

function prevBuildHandler(state, containers) {
  const index = state.prevBuildId();
  updateContentPopup(state.builds[index], containers);
}

async function getBuilds() {
  const data = [
    {
      date: {
        d: '19',
        m: '05',
        y: '2021',
      },
      id: '723',
      month: 'Травень',
      section: 'section1',
      slider: [
        './assets/images/building/building-sw1.jpg',
        './assets/images/building/building-sw2.jpg',
        './assets/images/building/building-sw3.jpg',
        './assets/images/building/building-sw4.jpg',
      ],
      slider_bottom: [
        './assets/images/building/building1.jpg',
        './assets/images/building/building2.jpg',
        './assets/images/building/building3.jpg',
        './assets/images/building/building4.jpg',
      ],
      isIncludeVideo: true,
    },
    {
      date: {
        d: '17',
        m: '03',
        y: '2021',
      },
      id: '533',
      month: 'Березень',
      section: 'section2',
      slider: [
        './assets/images/building/building-sw2.jpg',
        './assets/images/building/building-sw1.jpg',
        './assets/images/building/building-sw3.jpg',
        './assets/images/building/building-sw4.jpg',
      ],
      slider_bottom: [
        './assets/images/building/building2.jpg',
        './assets/images/building/building1.jpg',
        './assets/images/building/building3.jpg',
        './assets/images/building/building4.jpg',
      ],
      isIncludeVideo: false,
    },
    {
      date: {
        d: '10',
        m: '04',
        y: '2021',
      },
      id: '724',
      month: 'Травень',
      section: 'section3',
      slider: [
        './assets/images/building/building-sw3.jpg',
        './assets/images/building/building-sw1.jpg',
        './assets/images/building/building-sw2.jpg',
        './assets/images/building/building-sw4.jpg',
      ],
      slider_bottom: [
        './assets/images/building/building3.jpg',
        './assets/images/building/building1.jpg',
        './assets/images/building/building2.jpg',
        './assets/images/building/building4.jpg',
      ],
      isIncludeVideo: true,
    },
    {
      date: {
        d: '19',
        m: '09',
        y: '2020',
      },
      id: '725',
      month: 'Травень',
      section: 'section1',
      slider: [
        './assets/images/building/building-sw4.jpg',
        './assets/images/building/building-sw1.jpg',
        './assets/images/building/building-sw2.jpg',
        './assets/images/building/building-sw3.jpg',
      ],
      slider_bottom: [
        './assets/images/building/building4.jpg',
        './assets/images/building/building1.jpg',
        './assets/images/building/building2.jpg',
        './assets/images/building/building3.jpg',
      ],
      isIncludeVideo: false,
    },
    {
      date: {
        d: '29',
        m: '05',
        y: '2020',
      },
      id: '726',
      month: 'Травень',
      section: 'section2',
      slider: [
        './assets/images/building/building-sw1.jpg',
        './assets/images/building/building-sw2.jpg',
        './assets/images/building/building-sw3.jpg',
        // './assets/images/building/building-sw4.jpg',
      ],
      slider_bottom: [
        './assets/images/building/building1.jpg',
        './assets/images/building/building2.jpg',
        './assets/images/building/building3.jpg',
        // './assets/images/building/building4.jpg',
      ],
      isIncludeVideo: true,
    },
    {
      date: {
        d: '05',
        m: '05',
        y: '2019',
      },
      id: '727',
      month: 'Травень',
      section: 'section3',
      slider: [
        './assets/images/building/building-sw1.jpg',
        './assets/images/building/building-sw2.jpg',
        './assets/images/building/building-sw3.jpg',
        './assets/images/building/building-sw4.jpg',
      ],
      slider_bottom: [
        './assets/images/building/building1.jpg',
        './assets/images/building/building2.jpg',
        './assets/images/building/building3.jpg',
        './assets/images/building/building4.jpg',
      ],
      isIncludeVideo: true,
    },
    {
      date: {
        d: '19',
        m: '01',
        y: '2019',
      },
      id: '728',
      month: 'Травень',
      section: 'section1',
      slider: [
        './assets/images/building/building-sw1.jpg',
        './assets/images/building/building-sw2.jpg',
        './assets/images/building/building-sw3.jpg',
        './assets/images/building/building-sw4.jpg',
      ],
      slider_bottom: [
        './assets/images/building/building1.jpg',
        './assets/images/building/building2.jpg',
        './assets/images/building/building3.jpg',
        './assets/images/building/building4.jpg',
      ],
      isIncludeVideo: true,
    },
  ];
  return JSON.stringify(data);
  // const data = new FormData();
  // data.append("action", "buildProgressList");
  // return fetch("/wp-admin/admin-ajax.php", {
  //   method: "POST",
  //   body: data,
  // });
}

async function initBuild() {
  const builds = await getBuilds().then(res => JSON.parse(res));
  const buildsId = builds.map(build => +build.id);
  const state = {
    builds,
    countShowBuild: 0,
    buildsList: buildsId,
    currentBuildId: null,
    nextBuildId: function nextBuildId() {
      const index = this.buildsList.indexOf(this.currentBuildId);
      if (index >= this.buildsList.length - 1) return 0;
      return index + 1;
    },
    prevBuildId: function prevBuildId() {
      const index = this.buildsList.indexOf(this.currentBuildId);
      if (index <= 0) return this.buildsList.length - 1;
      return index - 1;
    },
    updateCurrentId: id => {
      this.currentBuildId = id;
    },
  };

  const buildPopup = document.querySelector('[data-build-popup-container]');
  const containers = {
    buildContainer: document.querySelector('[data-build-container]'),
    buildPopup,
    closePopup: document.querySelector('[data-close-build-popup]'),
    // nextBuildCard: document.querySelector('[data-next-build]'),
    // prevBuildCard: document.querySelector('[data-prev-build]'),
    buildDate: buildPopup.querySelector('[data-build-date]'),
    buildMonth: buildPopup.querySelector('[data-build-month]'),
    buildYear: buildPopup.querySelector('[data-build-year]'),
    // loadMore: document.querySelector('[data-build-load-more]'),
  };

  containers.buildContainer.addEventListener(
    'click',
    event => buildContainerHandler(event, state, containers),
    {},
  );
  containers.closePopup.addEventListener('click', () => closeHandler(containers));
  // containers.nextBuildCard.addEventListener('click', () => nextBuildHandler(state, containers));
  // containers.prevBuildCard.addEventListener('click', () => prevBuildHandler(state, containers));

  // containers.loadMore.addEventListener('click', () => loadMoreHandler(state, containers));
  loadMoreHandler(state, containers);
  // init filter location in filter.js
  // initFilter();

  // sideSwitchArrow(
  //   document.querySelector('.btn-gallery'),
  //   document.querySelector('.gallery-swiper'),
  // );
}

window.addEventListener('DOMContentLoaded', () => {
  initBuild();
});

// ---------------------

function createSliderPopup(slides) {
  const slidesHtml = slides.map(createSlide).join('');
  const bigSliderContainer = document.querySelector('.js-build-big .swiper-wrapper');
  const smallSliderContainer = document.querySelector('.js-build-mini .swiper-wrapper');
  if (slider) {
    slider.destroy();
    sliderSmall.destroy();
  }

  // function addZero(num) {
  //   return num > 9 ? num : `0${num}`;
  // }
  bigSliderContainer.innerHTML = slidesHtml;
  smallSliderContainer.innerHTML = slidesHtml;
  sliderSmall = new Swiper('.js-build-mini', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    // watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // thumbs: {
    //   swiper: swiperBig,
    // },
  });
  const swiperBig = new Swiper('.js-build-big', {
    loop: true,
    spaceBetween: 10,
    // preloadImages: false,
    // lazy: true,
    // watchSlidesVisibility: true,
    thumbs: {
      swiper: sliderSmall,
    },
    navigation: {
      nextEl: '.building-next',
      prevEl: '.building-prev',
    },
  });

  return swiperBig;
}

function createSlide(src) {
  // const regExp = new RegExp(/(.jpg|.png|.jpeg)$/g);
  // const isImage = regExp.test(src);
  // return isImage
  //   ? `<div class="swiper-slide"><img src="${src}" alt=""></div>`
  //   : `<div class="swiper-slide"><iframe class="building-swiper-video" width="560" height="315" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  return `<div class="swiper-slide"><div class="swiper-slide__img"><img src="${src}" alt=""></div></div>`;
}

function handleSlider() {
  slider.slideTo(currentCountSlides);
}
function updateContentPopup(build, containers) {
  const { buildDate, buildMonth, buildYear } = containers;
  console.log('aaaaaaaaa');
  // buildDate.textContent = build.date.d;
  // buildMonth.textContent = build.month;
  // buildYear.textContent = build.date.y;

  slider = createSliderPopup(build.slider);
  // currentCountSlides = build.slider.length;
  slider.updateSlides();

  // const slidesHtml = build.slider.map(createSlide).join('');
  // swiperBig.wrapperEl.innerHTML = slidesHtml;
  // swiperMini.wrapperEl.innerHTML = slidesHtml;
  // swiperBig.update();
  // swiperMini.update();
  // swiperBig.updateSlides();
  // swiperMini.updateSlides();
}

// filter start
const buildList = document.querySelectorAll('.js-build-card');
const btnBuild = document.querySelectorAll('.building-filter__item');

btnBuild.forEach(el =>
  el.addEventListener('click', event => {
    if (event.target.tagName != 'BUTTON') return false;
    const target = event.target.dataset.view;
    btnBuild.forEach(button => button.classList.remove('active'));
    el.classList.add('active');
    buildList.forEach(elem => {
      elem.classList.remove('hide');
      document.querySelector('[data-build-container]').insertAdjacentElement('afterbegin', elem);
      if (!elem.classList.contains(target) && target != 'all') {
        elem.remove();
      }
    });
  }),
);
// filter end
