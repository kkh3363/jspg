// 모듈을 추출합니다.
const url = require('url');
// 모듈을 사용합니다.
const parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parsedObject);