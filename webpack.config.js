const path = require('path');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',
  output: {
    // Output directory and filename
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Rule for JavaScript and JSX files
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        // Rule for CSS files
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    // File extensions that should be resolved
    extensions: ['.js', '.jsx']
  },
  devServer: {
    // Static content served from the 'dist' directory
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  mode: 'development'
};