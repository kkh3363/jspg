let apple = {
    name : '사과',
    'price' : 1200,
    'count' : 3,
    array : ['red', 'green', 'blue'],
    print : function (){
        return `${this.name}이고 가격은 ${this.price}`;
    },
    print2: function(){
        return this.print();
    }
   
};

console.log( apple.print2());


