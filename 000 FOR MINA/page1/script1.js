const button = document.getElementById("no-button");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc",
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("yes-button").addEventListener("click", handleYes);
  document.getElementById("no-button").addEventListener("click", handleNo);
});

function handleYes() {
  window.location.href = "../page2/index.html";
}

function handleNo() {
  window.location.href = "goodbye.html";
}
