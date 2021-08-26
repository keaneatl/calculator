    const add = function(firstNum, secondNum) {
    let simpleSum = firstNum + secondNum;
    return simpleSum;
    };
    
    const subtract = function(n1, n2) {
      let difference = n1 - n2;
      return difference;
    };
    
    const sum = function(numbers) {
        let finalSum = 0;
      numbers.forEach(item => {
        finalSum += item;
        })
        return finalSum
    }
    
    const divide = function(firstNum, secondNum){
      let quotient = firstNum / secondNum;
      return quotient;
    }
    
    const multiply = function(nums) {
        let finalProduct = 1;
      nums.forEach(item => {
        finalProduct *= item;
        })
        return finalProduct
    };

    const simpleMultiply = function(n1, n2){
      let product = n1*n2;
      return product;
    }

    
    function operate(operator, firstNum, secondNum){
        switch (operator){

        case 'add':
        result = add(firstNum, secondNum);
        break;

        case 'subtract':
        result = subtract(firstNum, secondNum);
        break;

        case 'divide':
        result = divide(firstNum, secondNum);
        break;

        case 'multiply':
        result = simpleMultiply(firstNum, secondNum)
        break;
      }
      return result;
    }

    function removeTransition(e){
      if (e.propertyName !== 'transform')return
      this.classList.remove('activebtn');
    }

  
  

  const calcDisplay = document.querySelector('.calc-display');
  
  const numberBtns = document.querySelectorAll('.calc-numbtn');

  const clearBtn = document.querySelector('.calc-clearbtn');

  const operatorBtns = document.querySelectorAll('.calc-operator')

  const numberBtnsArr = Array.from(numberBtns);

  const operatorBtnsArr = Array.from(operatorBtns);
  
  const operatorBtnTransition = operatorBtnsArr.forEach( btn => {
    btn.addEventListener('transitionend', removeTransition)
    btn.addEventListener('click', () => btn.classList.add('activebtn'))
  })

  clearBtn.addEventListener('transitionend', removeTransition)
  clearBtn.addEventListener('click', () => {
    clearBtn.classList.add('activebtn')
    calcDisplay.textContent = 0;
    firstNum = '';
    secondNum = '';
    operation = '';
  })
  
  
  let firstNum = '';
  let secondNum = '';
  let operation = '';
  let result = '';
  
  // OPERATORS' EVENT LISTENERS
  const addBtn = document.querySelector('#add');
  addBtn.addEventListener('click', () => {
    if (firstNum !== '' && secondNum !== ''){
      result = operate(operator, parseInt(firstNum), parseInt(secondNum));
      calcDisplay.textContent = `${result}`;
      firstNum = '';
      secondNum = '';
    }

    else if (firstNum !== '' && result !== ''){
     result = operate(operator, parseInt(firstNum), result);
     calcDisplay.textContent = result;
     firstNum = '';
    }

    else if (operation === 'active'){
      calcDisplay.textContent = operate(operator, parseInt(firstNum), parseInt(secondNum))
    }
    else{
    operator = 'add';
    operation = 'active';
    calcDisplay.textContent = '0';
    }
  })

  const subtractBtn = document.querySelector('#subtract');
  subtractBtn.addEventListener('click', () => {
    operator = 'subtract';
    operation = 'active';
    calcDisplay.textContent = '0';
  })

  const multiplyBtn = document.querySelector('#multiply');
  multiplyBtn.addEventListener('click', () => {
    operator = 'multiply';
    operation = 'active';
    calcDisplay.textContent = '0';
  })

  const divideBtn = document.querySelector('#divide');
  divideBtn.addEventListener('click', () => {
    operator = 'divide';
    operation = 'active';
    calcDisplay.textContent = '0';
  })

  const equalsBtn = document.querySelector('#operate');
  equalsBtn.addEventListener('click', () => {

    if (operation === '' || firstNum === '' || secondNum === ''){
      alert('ERROR: Please Enter a first and second number, and choose an operator.')
    }

    else if (operator === 'divide' && secondNum === '0'){
      alert('Syntax Error')
      calcDisplay.textContent = 0;
      firstNum = '';
      secondNum = '';
      operation = '';
    }

    else {
    result = operate(operator, parseInt(firstNum), parseInt(secondNum));
    calcDisplay.textContent = `${result}`;
    operation = '';
    firstNum = '';
    secondNum = '';
    }
  })

// WORK ON THIS
let addFirstNum = numberBtnsArr.forEach( btn => {
  btn.addEventListener('transitionend', removeTransition)
  btn.addEventListener('click', () => {
    if (operation === 'active' && calcDisplay.textContent === '0'){
      calcDisplay.textContent = btn.textContent;
      secondNum += btn.textContent;
      btn.classList.add('activebtn')
    }

    else if (result !== '' && operation === 'active'){
      calcDisplay.textContent = btn.textContent;
      firstNum += btn.textContent;
      btn.classList.add('activebtn')
    }

    else if (result !== '' && operation === 'active' && calcDisplay.textContent.length >= 1){
      calcDisplay.append(btn.textContent);
      firstNum += btn.textContent;
      btn.classList.add('activebtn')
    }

    else if (result !== ''){
      calcDisplay.textContent = btn.textContent;
      result = '';
      firstNum += btn.textContent;
      btn.classList.add('activebtn')
    }

    else if (operation === 'active'){
    calcDisplay.append(btn.textContent);
    secondNum += btn.textContent;
    btn.classList.add('activebtn')
    }

    else if (calcDisplay.textContent === '0'){
        calcDisplay.textContent = btn.textContent;
        firstNum =+ btn.textContent;
        btn.classList.add('activebtn')
    }

    else {
    calcDisplay.append(btn.textContent);
    firstNum += btn.textContent;
    btn.classList.add('activebtn')
    }
  })
})


// THINGS TO WORK ON
// 

// for (let i = 0; i < numberBtnsArr.length; i++){
//   if (i === 0){
//     item.addEventListener('click', () => {
//     calcDisplay.textContent = `${item.textContent}`;
//     })
//   }

//   else {
//     item.addEventListener('click', () => {
//     calcDisplay.append(item.textContent)
//     })
//   }
// }


  