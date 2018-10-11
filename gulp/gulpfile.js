var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>
var sass=require("gulp-sass");


//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("sass",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("sass/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\34\\file\\css"));
});
gulp.task("imgs",function(){
	gulp.src("wjw/imgs/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\wangjiuwang\\imgs"));
});
//css
gulp.task("wjw",function(){
	gulp.src("wjw/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\wangjiuwang"));
});

//监听
gulp.task("watchall",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;
	gulp.watch("sass/**/*.scss",["sass"]);
	gulp.watch("wjw/imgs/**/*",["imgs"]);
	gulp.watch("wjw/**/*",["wjw"]);
});
