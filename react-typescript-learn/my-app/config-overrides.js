/* config-overrides.js */
const { override, useBabelRc, fixBabelImports, addLessLoader } = require("customize-cra");

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   console.log(config, env)
//   return config;
// };

const theme = require("./src/theme");

module.exports = override(
  useBabelRc(),

  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { ...theme },
  })
);
