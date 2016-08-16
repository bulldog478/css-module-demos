var path = require('path')

module.exports = {
	entry : './src/index.js',
	output: {
		path:'dist',
		filename:'bundle.js',
	},
	module:{
			loaders:[
			{
				test:/\.html$/,
				loader: 'html?interpolate'
			},
			{
				test:/\.css$/,
				loaders: ['style','css?modules&localIdentName=[path][name]--[local]--[hash:base64:5]']
			}
		]
	}
}