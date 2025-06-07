// Countdown
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 14);

const timer = document.getElementById("timer");

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  timer.textContent = `${days}d ${hrs}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Matrix Effect
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.querySelector(".matrix").appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01$WRISTED";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);