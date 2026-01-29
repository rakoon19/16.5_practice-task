const numbers = [12, 98, 5, 41, 23, 78, 46];

let evenNum = [];
i = 0;
for(let num of numbers){
    if( num % 2 == 0){
        evenNum[i] = num;
        i++;
    }
}
console.log(evenNum);