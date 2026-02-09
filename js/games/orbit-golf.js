// Orbit Golf Game

// Define the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game Variables
const planets = [];
let players = [];
let gravityStrength = 0.1;

// Planet class
class Planet {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#00f';
    ctx.fill();
    ctx.closePath();
  }
}

// Player class
class Player {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.velocity = { x: 0, y: 0 };
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.velocity.y += gravityStrength;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

// Initialize game
function init() {
  planets.push(new Planet(200, 200, 30));
  planets.push(new Planet(400, 300, 50));
  players.push(new Player(100, 100, 'red'));
  players.push(new Player(150, 100, 'green'));
  animate();
}

// Game loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const planet of planets) {
    planet.draw();
  }

  for (const player of players) {
    player.update();
    player.draw();
  }
  requestAnimationFrame(animate);
}

// Start the game
init();
