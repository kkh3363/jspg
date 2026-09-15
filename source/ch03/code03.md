
```
  let input =prompt("숫자를 입력하시오.");
  // 입력된 값이 숫자인지 검사
  if ( isNaN(Number(input)) == false ){
      if ( input % 2 == 0)
          console.log('짝수입니다.');
      else
          console.log('홀수입니다.');
  } else {
      console.log('숫자가 아닙니다.');
  }
```


```
// 1. 커피 : 700
        // 2. 콜라 : 600
        // 3. 녹차 : 800
        let menu = prompt('1. 커피, 2. 콜라 , 3. 녹차 메뉴를 선택하시오:');
        
        let input =prompt("커피 1캔은 700원입니다. 현금을 입력하시오");
        // 입력된 값이 숫자인지 검사
        if ( isNaN(Number(input)) == false ){
            let unit = 700;
            let coffee = parseInt(input / unit);
            let remain = input % unit;
            console.log(`${coffee}개와 잔돈은 ${remain} 입니다.`);

        } else {
            console.log('숫자가 아닙니다.');
        }


```
