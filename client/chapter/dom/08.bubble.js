/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', () => {
  console.log('section');
});
article.addEventListener('click', () => {
  console.log('article');
});
p.addEventListener(
  'click',
  (e) => {
    //e.stopPropagation();
    console.log('%c p', 'color:hotpink');
  },
  true
);

/* 캡처링 ----------------------------------------------------------------- */
