<?php
require_once('./conn.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="style.css">
  <title>Logout</title>
</head>
<body>
  <div class="container">
	<h1><a href='./index.php'>Message board</a></h1>
	<p class="warn">※本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</p>

  <div class="logout__box">
  <h2>Do You Want to Logout</h2>
  <form method="POST" action="./handle_logout.php">
    <input type="submit" value="Yes">
  </form>
  <button class="stop__logout"><a href="./index.php">No</a></button>
</div>
</div>
</body>
</html>