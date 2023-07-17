/* --------------- */
/* While Loop      */
/* --------------- */

let repeat = 0;
while (repeat < 10) {
  console.log(repeat);
  repeat++;
}

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */
/*
console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
/* let i = 0;
while (i < 7) {
  console.log(frontEndDev[i]);
  i++;
}
*/

let i = 0;
while (i < frontEndDev.length) {
  console.log(frontEndDev[i]);
  i++;
}  <<이해안감.length 문자열의 길이 아닌가?? 배열의 길이?! 헷갈림

역방향. 6543210 반복문 돌 때마다 값 줄어들어야 
역방향이 오히려 더 성능이 좋음 성능 고려,, performance.now() 성능 체크


// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환
