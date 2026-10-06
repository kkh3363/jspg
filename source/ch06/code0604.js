let fruits = [
    { name: '바나나', price : 10000,
        print: function () { return `${this.name} 가격은 ${this.price}`;}
    },
    { name: '사과', price : 20000,
        print: function () { return `${this.name} 가격은 ${this.price}`;}
    },
    { name: '파인애플', price : 5000,
        print: function () { return `${this.name} 가격은 ${this.price}`;}
    },
    { name: '포도', price : 18000,
        print: function () { return `${this.name} 가격은 ${this.price}`;}
    }
];

for( let item of fruits)
    console.log(item.print());