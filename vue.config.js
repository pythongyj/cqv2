const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // "button-primary-background-color": "#2f3238",
          hack: `true; @import "${path.resolve(
            __dirname,
            "src/styles/theme.less"
          )}";`,
        },
      },
    },
  },
};
