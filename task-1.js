const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let reverse = [];
colorsLen = colors.length;
for(let i = 0; i < colorsLen; i++){
    reverse[i] = colors[colorsLen - i - 1]; 
}
console.log(reverse);