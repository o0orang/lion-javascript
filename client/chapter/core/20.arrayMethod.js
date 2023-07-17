/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray typeof의 가장 큰 문제점 언어상의 오류가 남아 있어 null 넣으면 object가 나온다~
const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

function nomalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

/* 요소 순환 -------------------------------------------------------------- */

// forEach는 값을 반환하지 않는다 **중요 그냥 일처리만 하고 끝냄
arr.forEach((item, index) => {
  console.log(item, index);
});

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

/* 원형 파괴 -------------------------------------------------------------- */
//배열의 원형 파괴 실제의 배열 데이터가 훼손이 된다
// push
// pop
// unshift
// shift
// reverse
arr.reverse();
console.log(arr);
// splice
arr.splice(1, 2);
console.log(arr);

// sort

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

const user = ['선범', '효윤', '준석'];
const newArray = [...arr, ...user, 'javascript'];
console.log(newArray);
// concat
// slice
const slice = arr.slice(2, 5);
console.log(slice);
// map
const job = people.map((item, index) => {
  return /* html */ `
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `;
});

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

//toSorted
//toReversed
//toSliced

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

//array에 이거 포함하고 있어? 어디에 몇번째에 있어?라고 물어보는 거
console.log(arr.indexOf(10));
// lastIndexOf
//얘는 뒤에서부터 찾고 앞에서부터 반환
// includes

/* 요소 찾기 -------------------------------------------------------------- */

// find
const find = people.find((item) => {
  console.log(item);
});
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
// filter
const filter = people.filter((item) => {
  return item.id > 2;
});

console.log(filter);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight
// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

// console.log(totalAge);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

document.body.insertAdjacentHTML('beforeend', template);

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join
