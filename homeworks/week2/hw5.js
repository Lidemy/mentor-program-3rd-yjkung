// 其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！

// 我們要實作的函式有兩個：join以及repeat。（再次強調，這一題要你自己實作這些函式，所以你不會用到內建的join以及repeat）

// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。

// repeat 的話就是回傳重複n 次之後的字串。

// join([1, 2, 3], '')，正確回傳值：123
// join(["a", "b", "c"], "!")，正確回傳值：a!b!c
// join(["a", 1, "b", 2, "c", 3], ',')，正確回傳值：a,1,b,2,c,3

// repeat('a', 5)，正確回傳值：aaaaa
// repeat('yoyo', 2)正確回傳值：yoyoyoyo

var str =[]
var concaStr= ""
function join(str, concatStr) {
	var result = ""
	for (var i = 0 ; i < str.length ; i++){ //陣列的每個元素(n個元素跑n圈)
		var strElement = str[i] //列出每個元素
		if (i < str.length-1){
		result = result+ (strElement + concatStr)
		}else if(i == str.length-1){
			result = result + strElement
		}
	}
  return result;
}

var str=""
var times 
function repeat(str, times) {
	var answer = ""
	for (var i = 1 ; i <= times ; i++){
		answer = answer + str
		}
  return answer	;
}

console.log(join(["a", "b", "c"],'!'));
console.log(repeat('h', 6));
