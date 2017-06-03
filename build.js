var fs = require("fs")
var browserify = require('browserify')
var vueify = require('vueify')
var babelify = require('babelify')
var watchify = require('watchify')
var minifyify = require('minifyify')

/*var b = browserify({
  entries: ['client/index.js'],
  plugin: [watchify]
});

b.on('update', bundle);
bundle();

function bundle() {
  b.transform(babelify).transform(vueify).bundle().pipe(fs.createWriteStream("./server/bundle.js"))
}*/
bundler = new browserify()
bundler.add('./client/index.js')
bundler.plugin(minifyify, { map: null, output: null })


bundler.transform(babelify)
bundler.transform(vueify)
    
bundler.bundle().pipe(fs.createWriteStream("./server/bundle.js"))
	
