const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンがクリックされました！';
});

setTimeout(() => {
  console.log('処理（非同期処理）');
}, 2);
