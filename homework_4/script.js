'1. Цикл for:'
for(let i = 1; i <= 100; i++){
    console.log(i);
}

for(let i = 11; i <= 33; i++){
    console.log(i);
}

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

let sum = 0;
for(let i = 0; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);

'2. Цикл while:'

let i = 1;
while(i <= 100){
    console.log(i);
    i++;
}

'3. Цикл do...while:'
let j = 1;
do{
    console.log(j);
    j++;
}while (j <= 10);
