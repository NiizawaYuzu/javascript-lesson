//Q1 変数
let nickname ='ごっしー'; //let:変数を宣言する var.const
let age = 28;
let greet = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + 'です。';
console.log(greet); //変数の中身を出力する

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let languagetext = '私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。';
console.log(languagetext);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);//オブジェクト名.key(プロパティ名)

//Q4 配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5 四則演算
let sum = 0;

for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}
average = sum / playerList.length;//3人の年齢の合計を配列の長さで割っている
console.log(average);
  
//Q6 関数
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
}
sayWorld();

//Q7 メソッド
//Q7-1
user.birthday = '2000-09-27';
console.log(user.birthday);

//Q7-2
user.sayHello = function() {
  console.log('Hello!');
}
user.sayHello();

//Q8

let calc =  {};

calc.add = function(x,y) {
  console.log(x + y);
}
calc.add(4,3);

calc.subtract = function(x,y) {
  console.log(x - y);
}
calc.subtract(20,10);

calc.multiply = function(x,y) {
  console.log(x * y);
}
calc.multiply(7,7);

calc.divide = function(x,y) {
  console.log(x / y);
}
calc.divide(10,2);

//Q9
let x = 5;
let y = 3;
function remainder(x,y) {
  return x % y;//15/2のあまり(%)が1
}

console.log(x + 'を' + y + 'で割った余りは' + remainder(x,y) + 'です。');

//Q10

//関数fooの中だけしかスコープ（変数ｘの有効範囲）が有効でないため、エラーが起きます。
//関数の外で変数を定義すれば、関数の中からでも参照することができる。

// function foo() {
//   let x = 1;    
// }
// console.log(x);

//応用編 問題
//Q1
let random = Math.floor(Math.random() * 10);//floor:小数点を切り捨てる
console.log(random);

//Q2
function time(){
  console.log('Hello World!');
}
setTimeout(time,3000);

//Q3
let num = 2;
if(num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log ('num is 0');
}

//Q4
let numbers = [];
for (let i = 0; i < 100; i++) {
   numbers.push(i);//pushメソッドは配列の値の追加
}
console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i <mixed.length; i++) {
  if (typeof mixed[i] === 'number'  &&  mixed[i] % 2 === 0) {
    console.log('even');
  } else if (typeof mixed[i] === 'number' && mixed[i] % 2 !== 0) {
    console.log('odd');
  } else {
    console.log('not number');
  }
}

