/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

const YEAR = 2023;
console.log(String(YEAR)); //명시적 형변환
console.log(YEAR + ''); //암시적 형변환

// undefined
let undef = undefined;
console.log(String(undefined)); //명시적 형변환
console.log(undefined + ''); //암시적 형변환

// null
let days = null;
console.log(String(null)); //명시적 형변환
console.log(null + ''); //암시적 형변환

// boolean
let isClicked = true; //isclicked 사용자가 클릭했어? 안했어?
console.log(String(isClicked));
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //<<NaN

// null
let bankbook = null;
console.log(Number(bankbook)); //<<0

// boolean
let cutie = false;
console.log(Number(cutie)); //<<0

let cutie = true;
console.log(Number(cutie)); //<<1

// string
let num = '250';
console.log(num); //<< string(typeof로 바꾸면)
console.log(Number(num)); //<<250
console.log(+num); //<<250
console.log(num * 1); //<<250
console.log(num / 1); //<<250

// numeric string
let width = '105.3px';
console.log(width); //<< 105.3px
console.log(Number(width)); //NaN

let w = parseInt(width);
console.log(w);
// 값 105.3만 뽑아내고 싶을 땐 window.parseFloat()

/* 데이터 → 불리언 ---------------------------------------------------------- */

console.log(Boolean(friend)); //<<false
console.log(Boolean(bankbook)); //<<false
console.log(Boolean(0)); //<<false
console.log(Boolean(1)); //<<true
console.log(Boolean(NaN)); //<<false
console.log(Boolean('')); //<<false
//명시적 형변환
console.log('암시적 형 변환 :' + !false);
//! 부정연산 기존의 값을 뒤집어 버림, true
console.log('암시적 형 변환 :' + !!false);
//! 부정의 부정 , false

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
