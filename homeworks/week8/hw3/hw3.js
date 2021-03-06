const wrapper = document.querySelector('.wrapper');
const xhr = new XMLHttpRequest();
const url = 'https://api.twitch.tv/kraken/streams/';
const parmams = '?game=League%20of%20Legends&limit=20';
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    const result = JSON.parse(xhr.responseText);
    for (let i = 0; i < 20; i += 1) {
      const title = result.streams[i].channel.status;
      const { streams: { [i]: { channel: { name, logo } } } } = result;
      const img = result.streams[i].preview.medium;

      const gamebox = document.createElement('div');
      gamebox.classList.add('gamebox');
      wrapper.appendChild(gamebox);

      const simage = document.createElement('div');
      simage.style.backgroundImage = `url('${img}')`;
      simage.classList.add('img');
      gamebox.appendChild(simage);

      const slogo = document.createElement('div');
      slogo.style.backgroundImage = `url('${logo}')`;
      slogo.classList.add('logo');
      gamebox.appendChild(slogo);

      const content = document.createElement('div');
      content.classList.add('content');
      gamebox.appendChild(content);

      const stitle = document.createElement('div');
      stitle.innerText = title;
      stitle.classList.add('title');
      content.appendChild(stitle);

      const sname = document.createElement('div');
      sname.innerText = name;
      content.appendChild(sname);
    }
  }
};

xhr.open('GET', url + parmams, true);
xhr.setRequestHeader('client-ID', 'rklf5s7p0lfxjwwxalc7z1hik5g9w2');
xhr.send();
