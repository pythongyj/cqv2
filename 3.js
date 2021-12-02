// var obj = {
//   code: function ({ _req, Mock }) {
//     let body = _req.body;
//     return body.username !== null && body.password == "123456" ? "1" : "0";
//   },

//   data: {
//     userInfo: function ({ _req, Mock }) {
//       let body = _req.body;
//       if (body.username == "admin" && body.password == "123456") {
//         return Mock.mock({
//           username: "@cname",
//           userId: "@id",
//           avator: "@image",
//           token: "e10adc3949ba59abbe56e057f20f883e",
//         });
//       } else {
//         return null;
//       }
//     },
//   },
//   msg: function ({ _req, Mock }) {
//     let body = _req.body;
//     return body.username !== null && body.password == "123456"
//       ? "注册成功,直接登陆成功"
//       : "注册失败";
//   },
// };

// const obj = {
//   code: "1",
//   data: function ({ _req, Mock }) {
//     let { pageNumber, pageSize } = _req.body;
//     let obj = {
//       pageNumber: pageNumber + 1,
//       pageSize: pageSize,
//       list: [],
//     };
//     for (let i = 0; i < pageSize; i++) {
//       const item = {
//         id: "@id",
//         images: ["http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg"],
//         name: "@cname",
//         distance: "@natural(50, 25)km",
//         industry: "互联网",
//         constellation: "射手座",
//         voice: "@natural(5, 20)",
//       };
//       obj.list.push(item);
//     }
//   },
//   msg: "获取成功",
// };

// console.log(obj);
