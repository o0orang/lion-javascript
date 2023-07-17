// ------------------------------------------------------
// 함수 용어
// ------------------------------------------------------

// 1. 이 (표름이 없는 함수현식)
var nextEl = function (el) {};

// 2. 이름이 있는 함수 (선언)
function prevEl(el) {}

// 3. 중첩하는(바깥) 함수, 중첩된(안쪽) 함수 (클로저)
function countDownMaker(count) {
  return function countDown() {};
}

// 4. 재귀(Recursion)호출 함수
//    예시: factorial(https://goo.gl/RWXyxz)
function factorial(n) {
  // 0(1), 1(1), 2(2), 3(6), ...
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Factorial 패턴 찾기
// factorial(0);   //   1
// factorial(1);   //   1
// factorial(2;   //   2 = 2 * factorial(2 - 1)
// factorial(3);   //   6 = 3 * factorial(3 - 1)
// factorial(4);   //  24 = 4 * factorial(4 - 1)
// .
// .
// .
// factorial(n);   // 결과 = n * factorial(n - 1)

// 5. 즉시 실행 함수 표현식 (IIFE)
(function () {
  // 코드 보호
})();

// ------------------------------------------------------
// 함수 가이드
// ------------------------------------------------------

// 함수 정의(선언/표현식, `function`, `var`)

// 함수 실행(호출, `()`)

// 함수 결과 반환 or 종료(return)
function square(x) {
  if (!x || typeof x !== 'number') {
    return;
  } // 종료
  console.log('run square function');
  return Math.pow(x, 2); // 반환
}

// 함수 재귀(Recursion)
function loop(n) {
  if (n > 15) {
    return;
  }
  loop(++n); // loop(11), loop(12), ...
}

// loop(10); // 11, 12, 13, 14, 15, 16

// 함수 스택(Stack)
// LIFO(Last In First Out)
// DevTools > Sources > Call Stack(with Breakpoint) 확인

// 중첩 함수(Closure)

// 다중 중첩 함수(Scope Chaining)

// 함수 실행 주체 참조(this)

// 전달인자 객체(arguments, 유사배열(Array-like Object))

function sum() {
  for (var total = 0, i = arguments.length, arg; (arg = arguments[--i]); ) {
    total += arg;
  }
  return total;
}

// ------------------------------------------------------
// 함수 객체의 속성과 메서드
// ------------------------------------------------------

function thisIsFunction(you) {
  console.log('name ⥤', thisIsFunction.name);
  console.log('length ⥤', thisIsFunction.length);
  console.log('caller ⥤', thisIsFunction.caller);
  console.log('arguments.length:', arguments.length);
  console.log('this ⥤', this);
}

// 속성 //

// function.name
// function.length
// function.caller [사용 권장하지 않음, 함수 이름으로 재귀해야]

// thisIsFunction({function_is: 'JavaScript 프로그래밍의 중추(中樞)'}, [], {}, true);

// 메서드 활용 //

// 일반적인 함수 호출
// thisIsFunction(10, 20, 30);

// call() 메서드 (바로 실행)
// thisIsFunction.call(document.body, 10, 20, 30);

// apply() 메서드 (바로 실행)
// thisIsFunction.apply(document.documentElement, [10, 20, 30]);

// ES 5+
// bind() 메서드 (바로 실행되지 않음)
// var onClickFn = thisIsFunction.bind(document, 10, 20, 30);
// document.addEventListener('click', onClickFn);

// document.addEventListener('click', thisIsFunction.bind(document, 10, 20, 30));

// -----------------------------------------------------
// 배열 객체의 속성과 메서드
// -----------------------------------------------------

// 배열(Array) 객체는 JavaScript의 모든 데이터 유형을
// 수집(collection)한 후, 관리 할 수 있습니다.
var collection = [
  '배열은 모든 데이터 유형을 포함/관리할 수 있다.',
  {
    nothing: [null, undefined],
    objects: [Object, Function, Array, Number, String, Boolean],
    is_support_dictionary: false,
    index: 9,
  },
  function (obj, key) {
    return obj[key];
  },
];

// 하지만, 배열은 다양한 데이터를 관리하기 보다는
// 패턴(규칙)을 가진 데이터를 수집해 관리하는데 탁월합니다.
var members = [
  {
    gender: '여성',
    name: '손민하',
    email: 'son-minha@example.com',
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  {
    gender: '남성',
    name: '최우',
    email: 'choi-woo@example.com',
    picture: 'https://randomuser.me/api/portraits/men/90.jpg',
  },
  {
    gender: '여성',
    name: '이다운',
    email: 'lee-dawoon@example.com',
    picture: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
];

// 배열 객체 생성
// [] 또는 new Array()

// 인덱스(index)로 배열 아이템에 접근
// array[index]

// 배열 객체 아이템들을 순환 처리
// array.forEach(function(item, index){})

// 배열 객체에 새로운 아이템 추가 (Last In)
// array.push(item)

// 배열 객체의 마지막 아이템 제거
// array.pop()

// 배열 객체에 새로운 아이템 추가 (First In)
// array.unshift(item)

// 배열 객체의 첫번째 아이템 제거
// array.shift()

// 배열 객체 아이템 인덱스 찾기
// array.indexOf(item)

// 배열 객체 아이템 1개 제거
// array.splice(index, 1)

// 배열 객체 여러 개 아이템 제거
// array.splice(index, n)

// 배열 객체 아이템 모두 제거
// array.length = 0

// 배열 복사
// copy_array = array.slice()

// 배열 검증
// Array.isArray(array)

// 배열 순서 정렬
// array.sort()

// 배열 순서 뒤집기
// array.reverse()

// 속성 // ------------------------------------------
// array.length

// 메서드 // ------------------------------------------

// 변경 메서드 (원본 배열 데이터 수정) //
// array.push()
// array.pop()
// array.unshift()
// array.shift()
// array.reverse()
// array.sort()
// array.splice()

// 접근 메서드 (원본 배열 데이터 보존) //
// array.concat()
// array.indexOf()
// array.lastIndexOf()
// array.join()
// array.slice()
// array.toString()

// 반복 메서드 //
// array.map(function(item, index){})
