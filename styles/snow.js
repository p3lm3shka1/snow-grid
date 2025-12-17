const container = document.getElementById("snow-container");
const SNOW_COUNT = 80;
const snowflakes = [];
function random(min, max) {
  return Math.random() * (max - min) + min;
}
function createSnowflake() {
  const el = document.createElement("div");
  el.className = "snowflake";
  el.textContent = "";
  const size = random(8, 20);
  const snowflake = {
    el,
    x: random(0, window.innerWidth),
    y: random(-window.innerHeight, 0),
    speedY: random(0.5, 2),
    speedX: random(-0.5, 0.5),
    size,
  };
  el.style.fontSize = `${size}px`;
  container.appendChild(el);
  snowflakes.push(snowflake);
}
for (let i = 0; i < SNOW_COUNT; i++) {
  createSnowflake();
}
function update() {
  for (const s of snowflakes) {
    s.y += s.speedY;
    s.x += s.speedX;
    s.x += Math.sin(s.y * 0.01) * 0.3;
    if (s.y > window.innerHeight) {
      s.y = -20;
      s.x = random(0, window.innerWidth);
    }
    s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
  }
  requestAnimationFrame(update);
}
update();

