// npm install request 명령어를 실행해주세요.
// 모듈을 추출합니다.
const request = require('request');
// request 모듈을 사용합니다.
const url = 'http://www.hanbit.co.kr/store/books/new_book_list.html';
request(url, (error, response, body) => {
    console.log(body);
});