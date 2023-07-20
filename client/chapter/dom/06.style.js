/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */
const first = getNode('.first'); //getter
console.log((first.className = 'box')); //setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

/* 스타일 변경 방법 --------------------------------------------------------- */
function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass함수의 두번째 인수는 문자 타입 이어야 합니다.'
    );
  }
  node.classList.add(className);
}

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
