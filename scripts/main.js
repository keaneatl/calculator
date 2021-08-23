    const add = function(n1, n2) {
    let simpleSum = n1 + n2;
    return simpleSum;
    };
    
    const subtract = function(n1, n2) {
      let difference = n1 -n2;
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
    
    const power = function(num1, num2) {
        return Math.pow(num1, num2);
    };
    
    const factorial = function(n) {
        return n > 1 ? n * factorial(n - 1) : 1;
    };
    
    function operate(operator, n1, n2){
        if (operator === 'add'){
        let result = add(n1, n2);
        return result;
        }
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
  
  // WORK ON THIS
  // const addBtn = document.querySelector('#add');
  // addBtn.addEventListener('click', () => {
  //   operator =

  // })

// WORK ON THIS
let addFirstNum = numberBtnsArr.forEach( btn => {
  btn.addEventListener('transitionend', removeTransition)
  btn.addEventListener('click', () => {
    if (calcDisplay.textContent === '0'){
        calcDisplay.textContent = btn.textContent;
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


  