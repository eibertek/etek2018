var path = require('path');
const config = {
    context: path.resolve(__dirname, "../"),
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../../build'),
    },
    resolve: {
      modules: [
        path.resolve('./node_modules')
      ],
    },    
    module: {
      rules: [
        {
          test: /\.js$/, // a regular expression that catches .js files
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.scss$/, // a regular expression that catches .js files
          exclude: /node_modules/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default            
          ],
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
              } 
          }]
      }        
      ]
    },
    watch: true,
};

module.exports = config;
  