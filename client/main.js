const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

// 1. input value 값 가져오기

// 2. 두 수의 합 더하기

// 3. result 출력 하기

function handleInput() {
  let firstValue = +first.value;
  let secondValue = second.value / 1;
  let total = firstValue + secondValue;

  clearContents(result);

  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
