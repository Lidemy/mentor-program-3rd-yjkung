<?php
require_once('./conn.php');

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = '$username' AND `password` = '$password'";
$id = "SELECT id FROM users WHERE username = '$username' AND `password` = '$password'";
$result = $conn -> query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        if ($row['username'] == $username && $row['password'] == $password) {
            setcookie("member_id", $id, time() + 3600 * 24);
            header('Location: ./index.php');
        // setcookie("變數名稱","變數值","存活時間")
        } else {
            echo '帳號或密碼錯誤';
        }
    }
} else {
    echo '帳號或密碼錯誤';
}
