// 分割代入
const profile1 = {
  name: "ryota",
  age: 36
};

const { name1, age1 } = profile1;
console.log(`名前は${name1}、年齢は${age1}です`);

const profile2 = ["ryota", "36"];
const [name2, age2] = profile2;
console.log(`名前は${name2}、年齢は${age2}です`);

// デフォルト値
const sayHello = (name = "guest") => console.log(`こんにちは${name}さん`);
sayHello();

// スプレッド構文 展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

sumFunc(...arr1);

// スプレッド構文　まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// スプレッド構文 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// map
const nameArr = ["たなか", "すずき", "やまだ"];
// nameArr.map((name) => console.log(name));
nameArr.map((name, index, etc) => console.log(`${index + 1}番目は${name}`));

// filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  // 奇数だけ返す
  return num % 2 === 1;
});
console.log(newNumArr);

// コード例
const newNameArr = nameArr.map((name) => {
  if (name === "たなか") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);
