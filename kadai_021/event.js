const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンがクリックされました！';
});

setTimeout(() => {
  text.textContent = '2秒後に表示します！';
}, 2000);