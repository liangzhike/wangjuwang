function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
}
function login(){
	$("#login")[0].onclick=function(){
		console.log(123);
		let xhr=new XMLHttpRequest();
		xhr.open("post","login.php",true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				let str=xhr.responseText;
				if(str=="-1"){
					$("#tishi")[0].style.display="block";
					$("#tishi")[0].innerHTML="登录失败，用户名不存在";
				}
				if(str=="1"){
					$("#tishi")[0].style.display="block";
					location="index.html";
					$("#tishi")[0].innerHTML="登录成功";
				}				
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let ste="phone="+$("#phone")[0].value+"&password="+$("#password")[0].value;
		xhr.send(ste);
	}
}
