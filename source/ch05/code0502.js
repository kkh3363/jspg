function printString(str, age=0){
    console.log(`${str}님 나이는 ${age}세 환영합니다.`);
}
printString("홍길동", 19);
printString("아무개" );

let greeting = function (str, age){
    console.log(`${str}님 나이는 ${age}세 환영합니다.`);
    };
greeting('남서울', 24);

let arrowGreeting =  str  => {console.log(`${str}님 나이는 세 환영합니다.`);};
arrowGreeting( '동서울', 20);