const heartsLayer = document.createElement("div");
heartsLayer.className = "floating-hearts";
heartsLayer.setAttribute("aria-hidden", "true");

const heartCount = window.matchMedia("(max-width: 580px)").matches ? 7 : 11;
for (let index = 0; index < heartCount; index += 1) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = "♥";
  heart.style.setProperty("--heart-x", `${Math.random() * 100}%`);
  heart.style.setProperty("--heart-size", `${12 + Math.random() * 18}px`);
  heart.style.setProperty("--heart-time", `${17 + Math.random() * 13}s`);
  heart.style.setProperty("--heart-delay", `${-Math.random() * 28}s`);
  heart.style.setProperty("--heart-drift", `${-55 + Math.random() * 110}px`);
  heart.style.setProperty("--heart-alpha", `${0.28 + Math.random() * 0.2}`);
  heartsLayer.append(heart);
}

document.body.prepend(heartsLayer);
