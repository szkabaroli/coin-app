var fs = require("fs")
var browserify = require('browserify')
var vueify = require('vueify')
var babelify = require('babelify')
var watchify = require('watchify')

/*var b = browserify({
  entries: ['client/index.js'],
  plugin: [watchify]
});

b.on('update', bundle);
bundle();

function bundle() {
  b.transform(babelify).transform(vueify).bundle().pipe(fs.createWriteStream("./server/bundle.js"))
}*/




browserify('./client/index.js')
    .transform(babelify)
    .transform(vueify)
    .bundle()
    .pipe(fs.createWriteStream("./server/bundle.js"))
	
