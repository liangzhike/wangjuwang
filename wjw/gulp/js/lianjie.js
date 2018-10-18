function lianJie(){	
	$(window).scroll(function(e){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>=1910){
			$(".lianjie").css({
				display:"block"
			});
		}
		if(scrollTop<1910){
			$(".lianjie").css({
				display:"none"
			});
		}
	});	
	
	$(".ianjlie a span").each(function(i){
		$(".lianjie a").slice(i).click(function(){
			$(".lianjie a span").slice(i).css({top:0});
			$(".lianjie a span").not($(".lianjie a span")[i]).css({top:40});
		});
		
		
	});
	
}
//$(function(){
//      var _index=0;
//      $(".ianjlie a span").click(function(){
//          _index=$(this).index()+1;
//          //通过拼接字符串获取元素，再取得相对于文档的高度
//          var _top=$("#cont_01"+_index).offset().top;
//          //scrollTop滚动到对应高度
//          $("body,html").animate({scrollTop:_top},500);
//      });
//}  