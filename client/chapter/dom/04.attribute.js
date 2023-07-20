/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.
const first = getNode('.first');
console.dir(first.className);

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.
first.hasAttribute('class'); //first에 클래스라는 속성이 있어? 있으면 true 없으면 false
first.getAttribute('class'); // 특정 대상의 속성값 가져올 때 클래스 값 가져와줘!
first.setAttribute('title', '메세지'); // 속성이름과, 그 값

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.setAttribute('', '');
first.getAttribute('id'); //

function getAttr(node, prop) {
  return node.getAttribute(prop);
}
getAttr('.first', 'id');

//‘.first’.getAttribute(’id’);
//문자에 이 속성 쓸 수 없지 ! element노드에게만 쓸 수 있다고 선언. 이 자체는 실행되지 않기 때문에
//문자의 실제 엘리먼트 노드를 찾아주는 것까지 .
//조건처리 필요
/*
if(typeof node === 'string'){
 node = getNode(node); (이안에문자를받으면그문자를가져가 document.querySelector실제엘리먼트노드를반환)
}
return node.getAttribute(prop)
}
*/
setAttr('.first', 'title', '인사멘트');

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  node.setAttribute(prop, value);
}

function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }
}
