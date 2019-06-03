## 請以自己的話解釋 API 是什麼
中國的翻譯其實蠻好理解的：接口。就像是插座，依照某種規格插(連接)上去以後就可以得到需要且對方有提供的資料。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
401 Unauthorized：未認證，可能需要登入或 Token。
403 Forbidden: 用戶端目前的身份不被允許此項請求
503 Service Unavailable：伺服器臨時維護或是快掛了，暫時無法處理請求。

418 I’m a teapot：我是一個茶壺，不會泡咖啡。 <== 這個太好笑了吧

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。


說明	              | Method |      path         | 參數
------------------|:------:|:-----------------:|------
回傳所有餐廳資料   | GET    | restaurants/      | 無 | 
回傳單一餐廳資料   | GET    | restaurants/:id   | 無 | 
刪除餐廳          | DELETE | restaurants/:id   | 無 |   
新增餐廳          | POST   | restaurants/      | name:餐廳名字、phone:餐廳電話
更改餐廳          | PATCH  | restaurants/:id   | name:餐廳名字、phone:餐廳電話