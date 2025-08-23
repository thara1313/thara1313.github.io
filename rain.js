const rain = document.querySelector('.rain');

for (let i = 0; i < 50; i++) {  // やさしい雨なので粒は少なめ
  const drop = document.createElement('div');
  drop.className = 'drop';

  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = (3 + Math.random() * 2) + 's'; // ゆっくり落ちる
  drop.style.animationDelay = Math.random() * 5 + 's';          // バラつき

  rain.appendChild(drop);
}
