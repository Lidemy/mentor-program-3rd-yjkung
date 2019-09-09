<?php
require_once('./conn.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>留言板</title>
	<link rel="stylesheet" href="style.css">

</head>
<body>
	<div class="container">
	<h1><a href='./index.php'>Message board</a></h1>
		<?php
		$memberId = '';
   if (! isset($_COOKIE[ "member_id"])) {
			echo "<button class='logout__conn'><a href='./login.php'> Login for leaving message</a> </button>";
			echo "<button class='signup__conn'><a href='./sign_up.php'>Sign up</a></button>";
    } else {
		 $memberId = $_COOKIE[ "member_id"];
			echo "<button class='logout__conn'><a href='./logout.php'> Logout</a> </button>";
		}
		?>

	<p class="warn">※本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</p>
		<!-- 輸入留言 -->		
		<div class="leave__comment">
		<?php
			if (! isset($_COOKIE[ "member_id"])) {
				echo "<form action='./login.php'>";
      } else {
		    $getId = $conn->query($memberId);
		    $theId = $getId->fetch_array();
		    $id =  $theId['id'];
				echo "<form method='POST' action='./leave_message.php'>";
				$sql = " SELECT * FROM users WHERE id = '$id'";
				$result = $conn->query($sql);
				if ($result->num_rows > 0){
					while ($row = $result->fetch_assoc()){
				      echo "<label><input name='nickname' type='text' value =". $row['nickname'] ."></label><br><br>";
							echo "<label><textarea name='content' cols='80' rows='5' placeholder='write your comment'></textarea></label><br>";
							echo "<input type='submit'>";
					}
				}
			}
     ?>	
			</form>
		</div>

	<hr>

	<!-- 留言板顯示區 -->
	<div class="message__board">
		<?php
			$sql = 'SELECT * from comment ORDER BY created_at DESC LIMIT 50 ';
			$result = $conn->query($sql);
			if ($result->num_rows > 0) {
					while ($row = $result->fetch_assoc()) {
							echo "<div class='message'>";
							echo  "<div class='board__name'>" . $row['nickname'] . "</div>";
							echo  "<div class='post__time'>" . $row['created_at'] . "</div>";
							echo  "<div class='board__content'>" . $row['content'] . "</div>";
							echo "</div>";
					}
			}  ?>
		</div>
	</div>

</body>
</html>