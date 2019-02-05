module.exports = {
  plugins: [
  	require('postcss-simple-vars')({
  		variables:function(){
  			return require('./colors');
  		}
  	}) ,
    require('postcss-nested')

    // require('autoprefixer')
  ]
}