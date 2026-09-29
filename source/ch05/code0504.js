

function guguDan(dan, start, end ){
    if ( start == undefined) start = 1;
    if ( end == undefined) end = 9 ;

    for( i=start; i <= end; i++){
        console.log(`${dan} x ${i} = ${dan*i}`);
    }
}
function guguDan2(dan, start=1, end=9 ){
    
    for( i=start; i <= end; i++){
        console.log(`${dan} x ${i} = ${dan*i}`);
    }
}

//guguDan(2);
guguDan( 2, 10, 20);
guguDan2( 3);
guguDan2( 3, 5)
//guguDan( 4, 1, 9);
for ( let i=2; i <=9; i++)
    guguDan2(i);