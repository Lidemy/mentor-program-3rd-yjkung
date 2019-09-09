<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="style.css">
  <title>signup</title>
</head>
<body>
  <div class="container">
	<h1><a href='./index.php'>Message board</a></h1>

  <div class="login__box">
  <h2>Sign up</h2>
  <form method="POST" action="./handle_signup.php">
    <label>username:<input name="username"></label><br>
    <label>password:<input name="password" type="password"></label>
    <label>nickname:<input name="nickname"></label><br>
    <a href="./login.php">Login</a><br>
    <input type="submit">
  </form>
</div>
</div>
</body>
</html>