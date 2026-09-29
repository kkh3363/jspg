let func = function (){
    console.log("함수를 실행 중입니다.");
    };
//func();

function callFunc( func ){
    for(let i=0; i < 5; i++)
        func();
}
callFunc(func);

callFunc( function(){
    console.log("익명합수를 실행 중입니다.");
});
