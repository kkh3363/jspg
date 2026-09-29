
let printCurrentTime = function(){
    let time = new Date();
    console.log(`${time.getMinutes()}:${time.getSeconds()}`);
}
printCurrentTime();

//setTimeout( printCurrentTime, 3000);
let timerId = setInterval(printCurrentTime, 2000);

setTimeout( function(){
    clearInterval(timerId);
    console.log('stop 타이머');
}, 10000);