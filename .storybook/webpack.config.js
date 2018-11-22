const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader', options: { javascriptEnabled: true } }
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
};
