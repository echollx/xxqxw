//引入使用到的模板
let gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"),//引入css样式
	uglify = require("gulp-uglify"),//引入js文件
	htmlmin = require("gulp-htmlmin"),//引入html文件
	sass = require("gulp-sass"),
	connect = require("gulp-connect");
	
//启动服务器
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	});
})
	
	
//定义gulp任务，压缩css样式
gulp.task("css",function(){
	gulp.src("css/*.css")
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css"));
});
// 定义 gulp 任务，压缩JS
gulp.task("js", function(){
	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

//压缩html文件
gulp.task("html",function(){
	gulp.src("html/*.html")
		.pipe(htmlmin({collapseWhitespace: true, minifyCSS:true, minifyJS:true}))
		.pipe(gulp.dest("dist/html"))
});
// 定义任务，编译 sass
gulp.task("sass", function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle:"compressed"}))
		.pipe(gulp.dest("dist/css"))
		.pipe(connect.reload());
});

gulp.task("watch",function(){
	gulp.watch("sass/**/*.scss",["sass"]);
})




// 定义默认任务
gulp.task("default", ["js", "html", "sass", "server", "watch"]);