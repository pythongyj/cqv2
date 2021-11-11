// /**
//  * @description 给定两个字符串形式的非负整数 num1 和n um2 ，计算它们的和并同样以字符串形式返回。
//  * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger），也不能直接将输入的字符串转换为整数形式
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function (num1, num2) {
//   let x = num1.length - 1;
//   let y = num2.length - 1;
//   let step = 0;
//   const list = [];
//   while (x >= 0 || y >= 0 || step != 0) {
//     const a = x >= 0 ? num1[x] * 1 : 0;
//     const b = y >= 0 ? num2[y] * 1 : 0;
//     const count = a + b + step;
//     list.unshift(count % 10);
//     step = (count - (count % 10)) / 10;
//     x -= 1;
//     y -= 1;
//     console.log("list", list, a, b);
//   }
//   return list.join("");
// };

// console.log(addStrings("121", "11"));
