<?php
require_once('./conn.php');

$username = $_POST['username'];
$nickname = $_POST['nickname'];
$password = $_POST['password'];

if (empty($username) || empty($nickname) || empty($password)) {
    die('請檢查資料');
}

$sql = "INSERT INTO users(username, nickname, `password`) VALUES ('$username', '$nickname', '$password')";
$result = $conn->query($sql);

if ($result) {
    header('Location: ./login.php');
} else {
    echo 'failed' . $conn->error;
}

?>