function menu(){
		
		var left=document.getElementById("left");
		var right=document.getElementById("right");
		var As=left.children;
		var con=right.children;
		
		for(let i=0; i<As.length-1;i++){
			As[i].index=i;
			As[i].onmouseover=function(){
				for(let j=0; j<As.length-1;j++){
					con[j].style.display="none";
					con[this.index].style.display="block";
				}
			}
		}
	}
function product(){
	var product=document.getElementsByClassName("product")[0];
	var boxbb=document.getElementsByClassName("box_bb")[0];
	console.log(boxbb);
	product.onmouseenter=function(){
			boxbb.style.display="block";
	}
	boxbb.onmouseleave=function(){
			boxbb.style.display="none";
	}
}






// window.onload=function(){
// 		$("As").hover(
// 			function(){
// 				$(this).css({background:"#ebebeb",color:"#666"});
// 				$(this).find("div").show("slow");
// 			},
// 			function(){
// 				$(this).css({background:"black",color:"white"});
// 				$(this).find("div").hide();
// 			},
// 		)
// 	}





