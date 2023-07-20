const buttonA = getNode('.a');
const buttonB = getNode('.b');
const buttonC = getNode('.c');
const buttonD = getNode('.d');
/*
const buttons = getNodes('button');
console.log();
buttons.forEach((item)=>{
  item.addEventListener('click',()=> {
    console.log('hit');
  })
})
*/ const container = getNode('.container');

function handleDelegation(e) {
  let target = e.target;

  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }
}

container.addEventListener('click', handleDelegation);
