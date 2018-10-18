<?php
	header("Content-type:text/html;charset=utf-8");
	$phone=$_POST['phone'];
	$pass=$_POST['password'];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo"连接失败";
	}
	else{
		mysql_select_db("mysql01",$con);
		$selectr="select * from wjw where phone='$phone'";
		$set=mysql_query($selectr,$con);
		$rows=mysql_num_rows($set);
		if($rows<=0){
			$selectr="insert into wjw() values('$phone',$pass)";
			$set=mysql_query($selectr,$con);
			if($set==1){
				echo "1";//成功
			}else{
				echo "0";
			}	
		}
		else{
			echo "-1";
		}
	}
?>