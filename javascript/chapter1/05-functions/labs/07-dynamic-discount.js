// 할인율을 입력받아 할인 가격을 계산하는 함수를 반환하세요.

function createDiscount(rate) {
  return function(amount) {
    return amount * (1 -rate);
  }
}

const blackFriday = createDiscount(0.3);
console.log(blackFriday(100000)); // → 70000
console.log(blackFriday(70000));
const halfSale = createDiscount(0.5);
console.log(halfSale(100000));