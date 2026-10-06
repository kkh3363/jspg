class Student{
    constructor(name, kor, eng, math){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
    getTotal(){  return this.kor + this.eng + this.math; }
    getAverage(){ return this.getTotal() / 3; }
    print(){ return `${this.name}  총점 ${this.getTotal()} 평균 ${this.getAverage()}`;}
}

let students =[
    new Student('철수', 90,80, 70),
    new Student('영희', 80,88,77),
    new Student('서울', 100,80,	90),
    new Student('천안', 90,	70,	66),

];
for ( let item of students)
    console.log(item.print());
    
// 출력 : 이름, 국어, 영어, 수학 총점, 평균