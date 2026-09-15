
let input =prompt('금액을 입력하시오');
// input 숫자로 구성된 문자열인 경우만 사용
if ( isNaN(input) == false) {
    const COFFEE = 600;
    let count, remaind;
    count = Number(input) / COFFEE;
    remaind = Number(input) % COFFEE;
    console.log(`가능 커피는 ${count}이고 잔돈은 ${remaind} 입니다.`);            
}else {
    console.log("숫자를 입력하시오.");
}
//----------------------------------------------------------------
let input =prompt('금액을 입력하시오');
// input 숫자로 구성된 문자열인 경우만 사용
if ( isNaN(input) == false) {
    const COFFEE = 600;
    let count, remaind;
    count = parseInt(input / COFFEE );
    remaind = Number(input) % COFFEE;
    console.log(`가능 커피는 ${count}이고 잔돈은 ${remaind} 입니다.`);            
}else {
    console.log("숫자를 입력하시오.");
}
