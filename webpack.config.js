const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development', // Set mode to development or production
  
  // Entry point of your application
  entry: './src/index.js',

  // Output configuration for Webpack
  output: {
    // Output directory as an absolute path
    path: path.resolve(__dirname, 'dist'),
    // Filename of the bundled file
    filename: 'bundle.js',
  },

  // Plugins configuration
  plugins: [
    // Plugin to automatically generate index.html
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'), // Path to your source index.html
    }),
  ],

  // Module rules for processing different file types
  module: {
    rules: [
      {
        // Rule for JavaScript and JSX files
        test: /\.(js|jsx)$/, // RegEx to match js and jsx files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader  
        },
      },        
          

      {
        // Rule for CSS files
        test: /\.css$/, // RegEx to match css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      // ... add other rules for different file types if needed
    ],
  },

  // Resolve configuration
  resolve: {
    // Automatically resolve these extensions
    extensions: ['.js', '.jsx'], // Webpack will resolve .js and .jsx files
  },

  // Webpack Dev Server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve content from the dist directory
    },
    compress: true, // Enable gzip compression for everything served
    port: 3000, // Port to serve
    open: true, // Open the page in browser
    host: '0.0.0.0', // Allow access from external network
    client: {
      overlay: true, // Show errors in browser
      progress: true, // Show compilation progress in browser console
    },
    allowedHosts: 'all', // Allow all hosts
  },

  // ... other configurations (like plugins, etc.) can be added here
};

