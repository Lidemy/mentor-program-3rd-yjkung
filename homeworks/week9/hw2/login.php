<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="style.css">
  <title>Login</title>
</head>
<body>
  <div class="container">
	<h1><a href='./index.php'>Message board</a></h1>
	<p class="warn">※本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</p>

  <div class="login__box">
  <h2>Login</h2>
  <form method="POST" action="./handle_login.php">
    <label>username:<input name="username"></label><br>
    <label>password:<input name="password" type="password"></label>
    <a href="./sign_up.php">join now</a><br>
    <input type="submit">
  </form>
</div>
</div>
</body>
</html>