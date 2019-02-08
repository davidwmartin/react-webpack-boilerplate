const colorConverter = require('css-color-converter');

module.exports = {
  plugins: [
  	require('postcss-simple-vars')({
  		variables:function(){
  			return require('./colors');
  		}
  	}),
    require('postcss-nested'),
    require('postcss-functions')({
    	functions: {
    		fontSize: function(degree){
    			let base = 15;
    			let ratio = 1.5;
    			return `${base * Math.pow(ratio, degree)}px`;
    		},
    		darken: function(value, frac){
    			var darken = 1 - parseFloat(frac);
					var rgba = colorConverter(value).toRgbaArray();
					var r = rgba[0] * darken;
					var g = rgba[1] * darken;
					var b = rgba[2] * darken;
					return colorConverter([r,g,b]).toHexString();
    		},
    		lighten: function(value, frac){
					var lighten = 1 - parseFloat(frac);
					var rgba = colorConverter(value).toRgbaArray();
					var r = rgba[0] / lighten;
					var g = rgba[1] / lighten;
					var b = rgba[2] / lighten;
					return colorConverter([r,g,b]).toHexString();
    		}
    	}
    })
  ]
}