const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: true,
          localIdentName: "[local]_[hash:base64:5]"
        },
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      }
    }
  ]
};
