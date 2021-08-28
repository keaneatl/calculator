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

  const decimalBtn = document.querySelector('#decimal');

  const clearBtn = document.querySelector('.calc-clearbtn');

  const operatorBtns = document.querySelectorAll('.calc-operator')

  const numberBtnsArr = Array.from(numberBtns);

  const operatorBtnsArr = Array.from(operatorBtns);
  
  const operatorBtnTransition = operatorBtnsArr.forEach( btn => {
    btn.addEventListener('transitionend', removeTransition)
    btn.addEventListener('click', () => btn.classList.add('activebtn'))
  })

  decimalBtn.addEventListener('click', () => {
    let displayArr = Array.from(calcDisplay.textContent);
    if (displayArr.includes('.')){
      alert('Warning: you have already added another decimal, press AC')
    }
  })

  clearBtn.addEventListener('transitionend', removeTransition)
  clearBtn.addEventListener('click', () => {
    clearBtn.classList.add('activebtn')
    calcDisplay.textContent = 0;
    firstNum = '';
    secondNum = '';
    operation = '';
    result = '';
    operator = '';
  })
  
  
  let firstNum = '';
  let secondNum = '';
  let operation = '';
  let result = '';
  let operator = '';
  
  // OPERATORS' EVENT LISTENERS
  const addBtn = document.querySelector('#add');
  addBtn.addEventListener('click', () => {
    if (firstNum !== '' && secondNum !== ''){
      firstNum = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
      calcDisplay.textContent = firstNum;
      secondNum = '';
      operator = 'add';
    }

    else if (operation === 'active'){
      calcDisplay.textContent = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
      operator = 'add';
    }
    else{
    operator = 'add';
    operation = 'active';
    }
  })

  const subtractBtn = document.querySelector('#subtract');
  subtractBtn.addEventListener('click', () => {
    if (firstNum !== '' && secondNum !== ''){
      firstNum = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
      calcDisplay.textContent = firstNum;
      secondNum = '';
      operator = 'subtract';
    }

    else if (operation === 'active'){
      calcDisplay.textContent = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
      operator = 'subtract';
    }
    else{
    operator = 'subtract';
    operation = 'active';
    }
  })

  const multiplyBtn = document.querySelector('#multiply');
  multiplyBtn.addEventListener('click', () => {
    if (firstNum !== '' && secondNum !== ''){
      firstNum = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
      calcDisplay.textContent = firstNum;
      secondNum = '';
      operator = 'multiply';
    }

    else if (operation === 'active'){
      calcDisplay.textContent = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
      operator = 'multiply';
    }
    else{
    operator = 'multiply';
    operation = 'active';
    }
  })

  const divideBtn = document.querySelector('#divide');
  divideBtn.addEventListener('click', () => {
    if (firstNum !== '' && secondNum !== ''){
      firstNum = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
      calcDisplay.textContent = firstNum;
      secondNum = '';
      operator = 'divide';
    }

    else if (operation === 'active'){
      calcDisplay.textContent = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
      operator = 'divide';
    }
    else{
    operator = 'divide';
    operation = 'active';
    }
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
    firstNum = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
    calcDisplay.textContent = `${firstNum}`;
    secondNum = '';
    operation = '';
    result = '';
    }
  })

// WORK ON THIS
let displayNum = numberBtnsArr.forEach( btn => {
  btn.addEventListener('transitionend', removeTransition)
  btn.addEventListener('click', () => {
    if (firstNum !== '' && operation === 'active' && secondNum === ''){
      calcDisplay.textContent = btn.textContent;
      secondNum += btn.textContent;
      btn.classList.add('activebtn')
    }

    else if (firstNum !== '' && operation === 'active'){
      calcDisplay.append(btn.textContent);
      secondNum += btn.textContent;
      btn.classList.add('activebtn')
    }

    else if (operation === '' && secondNum === '' && operator !== ''){
      firstNum = '';
      calcDisplay.textContent = btn.textContent;
      firstNum += btn.textContent;
      operator = '';
      btn.classList.add('activebtn')
    }

    else if (firstNum === ''){
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
