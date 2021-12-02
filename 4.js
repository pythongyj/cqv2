// 实现一个方法reverDomain,将域名倒置

function reverDomain(url) {
  let reverUrl = url.split(".");
  let start = 0,
    end = reverUrl.length - 1;

  while (start <= end) {
    let s = reverUrl[start];
    reverUrl[start] = reverUrl[end];
    reverUrl[end] = s;
    start++;
    end--;
  }
  return reverUrl.join(".");
}
// console.log(reverDomain("www.baidu.com"));

// 实现一个方法 sameNumbers,找出同时存在于两个数组的所有数子

function sameNumbers(arr1, arr2) {
  let sameArr = [];
  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++)
      if (arr1[i] === arr2[j]) sameArr.push(arr2[j]);
  return sameArr;
}

console.log(sameNumbers([1, 2, 3, 45], [2, 3]));

// 实现一个方法flatten，将对象扁平化
function flatten(input) {
  return input;
}

// console.log(flatten({ a: { b: { c: 4 } } }));
