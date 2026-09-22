let array =[120, 35, 75 , 64, 9 , 8];
let max;
let min;
max = array[0];
min = array[0];

for( let i=1; i < array.length; i++ ){
    if ( max < array[i])
        max =  array[i];
    if ( min > array[i])
        min =  array[i];
}
console.log(`최대값은 ${max} 입니다.`);
console.log(`최소값은 ${min} 입니다.`);
// 짝수만 출력
for( let i=0; i < array.length; i++ ){
    if ( array[i] % 2 == 0)
        console.log(array[i]);
        
}
