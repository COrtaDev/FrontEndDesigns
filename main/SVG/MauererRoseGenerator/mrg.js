const svg = document.querySelector("svg");
const dInput = document.querySelector("#d");
const nInput = document.querySelector("#n");

let N = 2;
let D = 29;

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function generatePoint(i, n, d, inner = false) {
  let factor = inner ? d : 1;
  let k = i * factor;
  let r = 50 * Math.sin(degToRad(k * n));
  let x = Math.sin(degToRad(k)) * r;
  let y = Math.cos(degToRad(k)) * r;

  return [x + 50, 50 - y];
}

function generatePoints(n, d) {
  const inner = [];
  const outer = [];

  for (let i = 0; i < 361; i++) {
    inner.push(generatePoint(i, n, d, true));
    outer.push(generatePoint(i, n, d));
  }

  return { inner, outer };
}

function generatePolyline(_points = [], id) {
  const points = _points.map((point) => point.join(",")).join(" ");

  return `<polyline fill="none" stroke="var(--color-line, black)" id="${id}" points="${points}" />`;
}

function generateRose(n, d) {
  const { inner, outer } = generatePoints(n, d);
  return `
    ${generatePolyline(inner, "inner")}
    ${generatePolyline(outer, "outer")}
  `;
}

function draw() {
  const rose = generateRose(N, D);
  svg.innerHTML = rose;
}

function handleInput(e) {
  const val = Number(e.target.value);
  const id = e.target.id;
  if (id === "d") {
    D = val;
  } else if (id === "n") {
    N = val;
  }

  draw();
}

draw();

dInput.addEventListener("input", handleInput);
nInput.addEventListener("input", handleInput);
