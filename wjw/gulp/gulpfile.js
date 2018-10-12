var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>
var sass=require("gulp-sass");


// 定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("sass",function(){
	gulp.src("css/**/*")
	.pipe(sass())
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\wangjiuwang\\css"));
});
gulp.task("imgs",function(){
	gulp.src("imgs/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\wangjiuwang\\imgs"));
});

gulp.task("js",function(){
	gulp.src("js/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\wangjiuwang\\js"));
});
gulp.task("html",function(){
	gulp.src("*.html").pipe(gulp.dest("E:\\phpStudy\\WWW\\wangjiuwang"));
});




gulp.task("build",["sass","imgs","js","html"],function(){
	console.log("ok");
});
//监听
gulp.task("watchall",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;
	gulp.watch("sass/**/*.scss",["sass"]);
	gulp.watch("imgs/**/*",["imgs"]);
	gulp.watch("js/**/*",["js"]);
});
