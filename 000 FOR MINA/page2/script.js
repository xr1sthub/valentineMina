gsap.defaults({ ease: "none" });
const MorphSVGPlugin = gsap.MorphSVGPlugin;

const time = 3;
const d = 0.2;
const master = gsap.timeline({ repeat: -1, yoyo: true });

gsap.set(".flower, .leftleaf, .rightleaf", {
  transformOrigin: "center bottom",
});

for (let i = 1; i < 5; i++) {
  master.to(
    `#tulip${i} .flower`,
    { duration: time, rotation: -20 },
    (i - 1) * d
  );
  master.to(
    `#tulip${i} .leftleaf`,
    { duration: time, rotation: 5 },
    (i - 1) * d
  );
  master.to(
    `#tulip${i} .rightleaf`,
    { duration: time, rotation: 5 },
    (i - 1) * d
  );
  master.to(
    `.stemStart${i}`,
    { duration: time, morphSVG: `.stemEnd${i}` },
    (i - 1) * d
  );
}

master.play();

document.addEventListener("DOMContentLoaded", function () {
  startCountdown();
});

function startCountdown() {
  let count = 3;
  const countdownInterval = setInterval(() => {
    if (count > 0) {
      // Update the countdown numbers in the UI
      document.getElementById("countdown-numbers").textContent = count;
      count--;
    } else {
      clearInterval(countdownInterval);
      redirectToPage3();
    }
  }, 1000);
}

function redirectToPage3() {
  window.location.href = "../page3/index.html";
}
