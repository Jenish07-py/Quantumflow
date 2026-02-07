let bitState = 0;

function toggleBit() {
  bitState = bitState ? 0 : 1;
  const bit = document.getElementById("bit");
  bit.textContent = bitState;
  bit.classList.toggle("active");
}

function updateProb(value) {
  document.getElementById("prob").textContent = value;
}

function entangle() {
  const value = Math.random() > 0.5 ? 1 : 0;
  document.getElementById("e1").textContent = value;
  document.getElementById("e2").textContent = value;
}

function measure() {
  document.getElementById("result").textContent =
    Math.random() > 0.5 ? "1" : "0";
}
