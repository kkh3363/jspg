let product  = {
    '제품명' : '건조망고',
    '유 형' : '당절임',
    '출력' : function(){
            return 'product 객체';
        }
};
// 키 설정은 식별자 설정에 따른다....

console.log(product);
console.log(product['제품명']);
console.log(product.제품명);
console.log(product.출력());
