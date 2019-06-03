// 參考別人的作業，要再自己練習一遍

const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'rklf5s7p0lfxjwwxalc7z1hik5g9w2',
  },
};

const callback = (error, response, body) => {
  const json = JSON.parse(body).data;
  for (let i = 0; i < json.length; i += 1) {
    console.log(`${json[i].id} ${json[i].name}`);
  }
};

request(options, callback);
