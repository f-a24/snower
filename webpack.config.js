module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: `${__dirname}/src/app/index.tsx`,
  output: {
    path: `${__dirname}/docs`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [],
  performance: {
    hints: false
  },
  serve: {
    content: 'docs/',
    open: true,
    port: 3000
  }
};
