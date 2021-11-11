// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function (nums) {
//   if (nums.length == 0) {
//     throw new Error("数组不能为空");
//   }
//   if (nums.length == 1) {
//     return nums[0];
//   }
//   let start = 0;
//   let maxNum = null;
//   let current = nums[0];
//   let currentArr = [nums[0]];

//   for (let i = 1; i < nums.length; i++) {
//     const e = nums[i];
//     if (current < e) {
//       start += 1;
//       current = e;
//       currentArr.push(e);
//       if (nums.length - 1 == i) {
//         let a = currentArr[0];
//         for (let j = 1; j < currentArr.length; j++) {
//           const el = currentArr[j];
//           a *= el;
//         }
//         if (maxNum == null) {
//           maxNum = a;
//         } else {
//           if (maxNum < a) {
//             maxNum = a;
//           }
//         }
//         start = 0;
//         currentArr = [nums[i]];
//         current = e;
//       }
//     } else {
//       let a = currentArr[0];
//       for (let j = 1; j < currentArr.length; j++) {
//         const el = currentArr[j];
//         a *= el;
//       }
//       if (maxNum == null) {
//         maxNum = a;
//       } else {
//         if (maxNum < a) {
//           maxNum = a;
//         }
//       }
//       start = 0;
//       currentArr = [nums[i]];
//       current = e;
//     }
//     console.log(start, maxNum, current, currentArr, "---");
//   }

//   return maxNum;
// };

// // function maxNum(params) {

// // }

// const nums = [2, 3, 4, -2, 4, 5];
// // console.log(maxProduct(nums));
// // console.log(maxProduct([-2,0,-1]));
// // console.log(maxProduct([-3,-1,-1]));
// console.log(maxProduct([-4, -3]));
