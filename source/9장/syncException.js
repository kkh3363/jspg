// 모듈을 추출합니다.
const fs = require('fs');
// 예외 처리합니다.
try {
    // 파일을 읽어 들이고 출력합니다.
    const file = fs.readFileSync('none.txt');
    console.log(file);
    console.log(file.toString());
} catch (exception) {
    // 예외가 발생했을 때
    console.log('파일을 읽어 들이는데 문제가 발생했습니다.');
    console.log(exception);
}