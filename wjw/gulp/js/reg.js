function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
}
function  reg(){
	console.log(123);
	$("#zhuce")[0].onclick=function(){
		console.log(123);
		let xhr=new XMLHttpRequest();
		xhr.open("post","reg.php",true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				let str=xhr.responseText;
				console.log(123);
				if(str=="1"){
					$("#tishi")[0].style.display="block";
					$("#tishi")[0].innerHTML="注册成功";
				}
				else if(str=="-1"){
					$("#tishi")[0].style.display="block";
					$("#tishi")[0].innerHTML="用户名已存在";
				}
				else{
					$("#tishi")[0].style.display="block";
					$("#tishi")[0].innerHTML="注册失败";
				}
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let ste="phone="+$("#phone")[0].value+"&password="+$("#password")[0].value;
		xhr.send(ste);
	}
}

//<style type="text/css">
//		#code
//			{
//				font-family:Arial;
//				font-style:italic;
//				font-weight:bold;
//				border:0;
//				letter-spacing:2px;
//				color:blue;
//			}
//
//</style>
//</head>
//<body>
//		<div>
//			<input type = "text" id = "input"/>
//			<input type = "button" id="code" onclick="createCode()"/>
//			<input type = "button" value = "验证" onclick = "validate()"/>
//		</div>
//</body>
//</html>
//<script>
	var code ; //在全局定义验证码 
	//产生验证码
	function createCode(){
		 code = ""; 
		 var codeLength = 4;//验证码的长度
		 var checkCode = document.getElementById("code"); 
		 var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
		 'S','T','U','V','W','X','Y','Z');//随机数
		 for(var i = 0; i < codeLength; i++) {//循环操作
			var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
			code += random[index];//根据索引取得随机数加到code上
		}
		checkCode.value = code;//把code值赋给验证码
	}
	//校验验证码
	function validate(){
		var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写      
		if(inputCode.length <= 0) { //若输入的验证码长度为0
			alert("请输入验证码！"); //则弹出请输入验证码
		}       
		else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
			alert("验证码输入错误"); //则弹出验证码输入错误
			createCode();//刷新验证码
			document.getElementById("input").value = "";//清空文本框
		}       
		else { //输入正确时
			alert("^-^"); //弹出^-^
		} 
	}
