// 모듈을 추출합니다.
const fs = require('fs');

// 파일A를 읽습니다.
fs.readFile('fileA.txt', (error, fileA) => {
    // 파일B를 읽습니다.
    fs.readFile('fileB.txt', (error, fileB) => {
        // 파일C를 읽습니다.
        fs.readFile('fileC.txt', (error, fileC) => {
            console.log(fileA);
            console.log(fileB);
            console.log(fileC);
        });
    });
});