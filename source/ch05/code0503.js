function add( x, y ) {
    return (x +y);
}
let hap1;
hap1 = add( 2 , 3);
console.log( hap1 );

let add2 = function (x,y){ return ( x+y);};

let arrowAdd =  (x,y) => x+y ;
console.log( arrowAdd(2,3));

let x = 3;
let y= 10;
let max ;

max = x > y ? x : y;

function maxNum( a, b){
    if ( a > b )
        return a;
    else
        return b;
}

max = maxNum( x, y);