const letterBtn = document.getElementById("letterBtn");
const screenLetter = document.getElementById("screenLetter");
const screenText = document.getElementById("screenText");
const backBtn = document.getElementById("backBtn");

const music = document.getElementById("bgMusic");
const typeText = document.getElementById("typeText");

const message = `Happy Valentines Day, Angel.

Even if we’re miles apart, you’re still the person I choose every day.
Not just today, not just when it’s easy but always.

I’m proud of you, I’m grateful for you, and I can’t wait for the day I don’t have to miss you through a screen anymore.

It’s you. It’s always been you HOHO.`;


/* TYPEWRITER (slow + punctuation pauses) */
function typeWriter(text, baseSpeed = 60) {
  typeText.textContent = "";
  let i = 0;

  function step() {
    if (i < text.length) {
      const char = text.charAt(i);
      typeText.textContent += char;
      i++;

      let delay = baseSpeed;

      if (char === "." || char === "," || char === "\n") {
        delay = baseSpeed * 4;
      }

      setTimeout(step, delay);
    }
  }

  step();
}


/* LETTER CLICK */
letterBtn.addEventListener("click", () => {
  screenLetter.classList.add("hidden");
  screenText.classList.remove("hidden");

  typeWriter(message);

  music.volume = 0;
  music.play();

  let v = 0;
  const fade = setInterval(() => {
    v += 0.05;
    music.volume = v;
    if (v >= 0.6) clearInterval(fade);
  }, 100);
});


/* BACK */
backBtn.addEventListener("click", () => {
  music.pause();
  music.currentTime = 0;

  screenText.classList.add("hidden");
  screenLetter.classList.remove("hidden");

  typeText.textContent = "";
});
