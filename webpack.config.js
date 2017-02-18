
var config = {
   entry: {
      index:'./main.js',
      productAssert:'./product.js',
      instroductionAssert:'./instroduction.js'
    },
	
   output: {
      path:'./build',
      filename: '[name].js',
   },
	
   devServer: {
      inline: true,
      port: 8001 
   },
	
   module: {
      loaders: [ {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }

      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },]
   }
	
}

module.exports = config;
