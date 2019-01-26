const svgStore = require('webpack-svgstore-plugin');

module.exports = () => {
	return {
		test: /\.(jpe?g|png|gif)$/i,
		use: [
			'url-loader?limit=10000',
			'img-loader'
    ]
	}
}