// Task 1 
function numberCheck(){
    const num = prompt('Введите число!');
    if(!isNaN(num)){
        num == ''  ? alert('Попробуйте еще раз') :
        num > 0 ? alert('Число положительное') :
        num < 0 ? alert('Число отрицательное') :
        num == 0 ? alert('Число равно нулю') : 0
    }else{
        alert('Введите корректные данные')
    }
}

// Task 2 
function yearCheck(){
    const year = prompt('Введите год');
    if(!isNaN(year)){
        if(year == null){
            alert('Нужно ввести год');
        }else if( year === ''){
            alert('Вы ничего не ввели');
        }else if(( year % 4 === 0 && year % 100 !== 0) || year % 400 == 0){
            alert('Год высокосный');
        }else{
            alert('Год не высокосный');
        } 
    }else{
        alert('Введите корректные данные')
    }
    
}
// Task 3
const evenNumber = () =>{
    const evenNum = prompt('Введите число для проверки');
    if(evenNum === ''){
        alert('Вы ничего не ввели')
    }else if(evenNum == null){
    alert('Повторите попытку')
    }else if(evenNum % 2 == 0 && evenNum > 0){
        alert('Число четное и положительное')
    }else{
        alert('Число не соответствует условиям')
    }    
}

// Task 4
const multiple = () => {
    const multipleNum = prompt('Введите число для проверки');
   if(!isNaN(multipleNum)) {
    if(multipleNum == '' ){
        alert('Вы ничего не ввели')
    }
    if(multipleNum == null){
        alert('Повторите попытку')
    }
    if(multipleNum % 3 == 0 || multipleNum % 5 == 0){
        alert('Число кратно 3 или 5')
    }else{
        alert ('Число не кратно 3 или 5')
    }
   }else{
    alert ('Введите корректные данные')
   }
}

// Task 5
function mathOper(){
    let firstNum = prompt('Введите первое число');
    let secondNum = prompt('Введите второе число');
firstNum = parseFloat(firstNum);
secondNum = parseFloat(secondNum)
    if(!isNaN(firstNum) && !isNaN(secondNum)){
        let sum = firstNum + secondNum;
        let differ = firstNum - secondNum;
        let mult = firstNum * secondNum;
        let divid = firstNum / secondNum;
        alert('Сумма введенных чисел = ' + sum);
        alert('Разница чисел = ' + differ);
        alert('Произведение чисел = ' + mult);
        alert('Результат деления = ' + divid.toFixed(1));
    }else{
        alert('Введите числа корректно')
    }  
}
