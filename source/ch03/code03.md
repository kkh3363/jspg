
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
