// 原本以為上次就已經是最後一次幫忙，沒想到秋秋鞋還是又跑來找你了。他說他想要更多功能，他想把這整個書籍資料庫當作自己的來用，
// 必須能夠刪除、新增以及修改書本，這樣他就可以管理自己的書籍了。

// 雖然你很想問他說為什麼不用Excel 就好，但你問不出口，再加上你最近剛學成是需要練習的機會，於是你就答應了。

// 請閱讀開頭給的API 文件並串接，用node.js 寫出一個程式並接受參數，輸出相對應的結果，範例如下：

// node hw3 . js list //印出前二十本書的id與書名
// node hw3 . js read 1  //輸出id為1的書籍
// node hw3 . js  delete  1  //刪除id為1的書籍
// node hw3 . js create " I love coding "  //新增一本名為I love coding的書
// node hw3 . js update 1  " new name "  //更新id為1的書名為new name

const request = require('request');
const process = require('process');

const command = process.argv[2];

if (command === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const json = JSON.parse(body);
      for (let i = 0; i < json.length; i += 1) {
        console.log(json[i].id + json[i].name);
      }
    },
  );
} else if (command === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const json = JSON.parse(body);
      console.log(json.id + json.name);
    },
  );
} else if (command === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response) => {
      console.log(`${response.statusCode} id${process.argv[3]},刪除成功`);
    },
  );
} else if (command === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: {
        name: process.argv[3],
      },
    },
    (error, response, body) => {
      console.log(body);
    },
  );
} else if (command === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    },
    (error, response, body) => {
      console.log(response.statusCode);
      console.log(body);
    },
  );
}
