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

        case subtract:
        result = subtract(firstNum, secondNum);
        break;

        case divide:
        result = divide(firstNum, secondNum);
        break;

        case multiply:
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
  clearBtn.addEventListener('click', () => clearBtn.classList.add('activebtn'))
  clearBtn.addEventListener('click', () => calcDisplay.textContent = 0);
  
  let firstNum = '';
  let secondNum = '';
  let operation = '';
  let n1;
  let n2;
  
  // WORK ON THIS
  const addBtn = document.querySelector('#add');
  addBtn.addEventListener('click', () => {
    operator = 'add';
    operation = 'active';
    calcDisplay.textContent = '0';
  })

  const equalsBtn = document.querySelector('#operate');
  equalsBtn.addEventListener('click', () => {
  operate(operator, firstNum, secondNum);
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


  