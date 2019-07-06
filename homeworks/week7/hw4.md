#####先用目前剩(?)的印象寫，確認過後的補充則用粗體標示
## 什麼是 DOM？
Document Object Model

把HTML的文件變成像物件(一層一層的)，**讓 JavaScript 可以抓到想要的HTML元素**

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
捕獲是由最外層到最內層，冒泡則相反，由內往外。

事件傳遞機制的順序是先捕獲再冒泡，點擊目標則由寫的順序決定。

addEventListener 的第三個參數則可以決定要將事件監聽放在冒泡或捕獲上(**true:捕獲 / false:冒泡(預設)**)

## 什麼是 event delegation，為什麼我們需要它？
事件代理跟 call back function 有點混淆，只記得點餐不會全部都在櫃台等= =

**利用捕獲及冒泡的性質，可以觸發上下層的動作，而不用一項一項加，也可處理動態新增的狀況**

結果差好多，混淆應該是因為資策會的老師在解釋 call back function 的時候，也是用類似點餐購物的情境，結果我整個搞混

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
`event.preventDefault()` 原本預設的功能會被阻止作用，像是表單的送出，`<a>`的連結

`event.stopPropagation()` 停止事件的往上傳遞，**stopImmediaPropagation() 立刻阻止其他所有的 event listener**