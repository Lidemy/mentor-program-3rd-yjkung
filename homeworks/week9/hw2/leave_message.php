<?php
require_once('./conn.php');

$nickname = $_POST['nickname'];
$content = $_POST['content'];

if (empty($nickname) || empty($content)) {
	die('請檢查資料');
}

$sql = "INSERT INTO comment(nickname,content) VALUES ('$nickname', '$content')";
$result = $conn->query($sql);

if ($result){
	header('Location: ./index.php');
} else {
  echo 'failed' . $conn->error;
}

?>