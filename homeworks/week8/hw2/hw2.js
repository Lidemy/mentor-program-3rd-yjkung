const submit = document.querySelector('.submit');
const mymessage = document.querySelector('.mymessage');
const url = 'https://lidemy-book-store.herokuapp.com/posts';
const xhr = new XMLHttpRequest();
let content = '';

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    content = JSON.parse(xhr.responseText);
    for (let i = 0; i < content.length; i += 1) {
      const message = document.createElement('div');
      message.classList.add('message');
      message.innerHTML = `#${i + 1}<br>${content[i].content}`;
      document.querySelector('.board').appendChild(message);
    }
  } else {
    console.log('err');
  }
};
xhr.open('GET', `${url}?_limit=15`, true);
xhr.send();

function sendMsg() {
  xhr.open('POST', `${url}/`, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  const comment = `content=${mymessage.value}`;
  xhr.send(comment);
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (mymessage.value === '') {
    alert('沒輸入東西欸');
  } else {
    sendMsg();
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = `#${content.length + 1}<br>${mymessage.value}`;
    document.querySelector('.board').appendChild(newMessage);
  }
});
