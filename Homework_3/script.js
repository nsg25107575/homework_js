// Task 1 

function checkNumber(a){
    switch(Math.sign(a)){
        case 1:
            return 'Положительное';
            break;
            case -1:
                return 'Отрицательное';
                break;
                case 0:
                    return 'Ноль';
                    break;        
    }

}
console.log(checkNumber(0));

// // Task 2

function dayWeek(d){
if(typeof d == 'number'){ 
    switch(d){
        case 1:
            return 'Понедельник';
            break;
            case 2:
                return 'Вторник';
                break;
                case 3:
                    return 'Среда';
                    break;        
                case 4:
                    return 'Четверг';
                    break;        
                case 5:
                    return 'Пятница';
                    break;        
                case 6:
                    return 'Суббота';
                    break;        
                case 7:
                    return 'Воскресенье';
                    break;        
    }
}
else {
return 'Не число'
}
}
console.log(dayWeek(2));

// // Task 3

function area(a, b){
if(b == null){
    return a * a
}else{
  return a * b;
}

}
console.log(area(5, 3));

// // Task 4 

function leapYear(year){
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
return 'Год высокосный';

}else{
return 'Год не высокосный'
}
}
console.log(leapYear(2000));

// // Task 5

function getGrade(score){
if(score >= 90 && score <= 100){
    return 'A';
}else if (score >= 80 && score < 90){
    return 'B';
}else if(score >= 70 && score < 80){
    return 'C'
}else if(score >= 60 && score < 70){
    return 'D'
}else if(score >= 0 && score < 60){
    return 'F'
}else{
    return 'Неверное значение баллов';
}
}
console.log(getGrade(98));

// // Task 6

function even(a){
return a % 2 == 0 ?  'Четное': 'Нечетное'
}
console.log(even(-9));

// Task 7

function typeTriangle(a, b, c){
if(a == b && a == c && b == c){
return 'Треугольник равносторонний'
}
else if(a == b || a == c || b == c){
    return 'Треугольник равнобедренный'
}else{
return 'Треугольник односторонний'
}
}
console.log(typeTriangle(4,2,4));


// Task 8

function factorial(a){
let sum = 1;
if(a < 0){
return 'Введите положительное число'
}
if(a == 0){
return 1
}
for(let i = 1; i <= a; i++){
sum = sum * i;
}
return sum;
}
console.log(factorial(5)); 

// Task 9

function monthы(n){
return n == 1 ? 'Январь':
n == 2 ? 'Февраль':
n == 3 ? 'Март':
n == 4 ? 'Апрель':
n == 5 ? 'Май':
n == 6 ? 'Июнь':
n == 7 ? 'Июль':
n == 8 ? 'Август':
n == 9 ? 'Сентябрь':
n == 10 ? 'Октябрь':
n == 11 ? 'Ноябрь':
n == 12 ? 'Декабрь':0
}
console.log(monthы(12));

// Task 10
function vowel(letter){
letter = letter.toLowerCase();

if(letter.length > 1){
return 'Вы ввели больше одной буквы'
}
if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
return 'гласная';
}else if(letter > 'a' && letter <= 'z'){
return 'согласная';
}else{
return 'некорректный ввод'
}
}
console.log(vowel('akh'));