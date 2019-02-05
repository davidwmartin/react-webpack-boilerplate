const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', 
          {
          	loader:'css-loader',
          	options: {
          		modules: true,
          		localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          	}
          },
          {
          	loader: 'postcss-loader',
          	options: {
          		config: {
          			path: __dirname + '/postcss.config.js'
          		}
          	}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};