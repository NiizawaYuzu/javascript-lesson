let userA = '到着';
let userB = '到着';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}
let errMsg = '';
errMsg === '' ? console.log('ない！') : console.log('ある！');

let number = 1;

// numberを2で割った時
// 割り切れたら「偶数です」、割り切れなかったら「奇数です」
// という文字列をtextに代入する
let text = number % 2 === 0 ? '偶数です' : '奇数です';
console.log(text); // 奇数です

if (2) {
  console.log('hoge');
}

if (0) {
  console.log('piyo');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);