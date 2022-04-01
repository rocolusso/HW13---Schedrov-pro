'use strict';


// 4. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива выведите ее в консоль

const arr = [1, 2, 3, 4, 5];
let summa = 0

for(let i = 0; i < arr.length; i++){
   summa += arr[i];
}
console.log(summa);
