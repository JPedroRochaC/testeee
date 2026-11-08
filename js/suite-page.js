const commonFeatures = [
  { icon: "ac", label: "Ar-condicionado" },
  { icon: "mirror", label: "Espelho no teto" },
  { icon: "bath", label: "Banheiro" },
  { icon: "garage", label: "Vaga fechada" }
];
const suiteData = [
  { name: "Executiva", category: "Básica", period: "2 horas", price: "R$ 65,00", overnight: "R$ 144,00", features: [...commonFeatures], photos: ["Executiva/codex-clipboard-05b6e078-ed42-4ac6-9f61-e597b63a8fd6.png", "Executiva/codex-clipboard-d9f7ae29-ca1e-48ea-a8eb-b78e492fa1ae.png", "Executiva/codex-clipboard-d9c4cbce-7d10-46d1-9239-f77478aed335.png"] },
  { name: "Scort", period: "3 horas", price: "R$ 95,00", overnight: "R$ 190,00", features: [...commonFeatures], photos: ["Scort/codex-clipboard-da9f99e0-f214-4322-ae85-b1a4e2fbc6ff.png", "Scort/codex-clipboard-d380f6d2-12db-421d-ab11-668608d78b2b.png", "Scort/codex-clipboard-33d4411b-0fd8-48d2-83d0-10c9761db6ce.png"] },
  { name: "Imperial", period: "3 horas", price: "R$ 160,00", overnight: "R$ 320,00", features: [...commonFeatures, { icon: "hydro", label: "Hidromassagem" }], photos: ["Imperial/codex-clipboard-8367d7c5-03cd-4996-bd59-ec617cc48285.png", "Imperial/codex-clipboard-185ba6bd-cd6c-415a-ba44-73af25569bb2.png", "Imperial/codex-clipboard-4db822fb-665c-4510-891a-97f92e0d6f65.png"] },
  { name: "Special", period: "3 horas", price: "R$ 200,00", overnight: "R$ 400,00", features: [...commonFeatures, { icon: "hydro", label: "Hidromassagem" }, { icon: "pool", label: "Piscina" }, { icon: "cascade", label: "Cascata" }, { icon: "sauna", label: "Sauna" }], photos: ["Special/codex-clipboard-27058d0d-1e37-4344-ba5c-6f2e6267f25a.png", "Special/codex-clipboard-b8f8342a-8636-48bf-8ef4-005f5dbcaee1.png", "Special/codex-clipboard-a0b479db-560d-49ef-bab2-d4626f929295.png", "Special/codex-clipboard-84a8d123-b80a-4096-bd4f-d12dea4116b3.png"] }
];
const icons = {
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  moon: '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"/>',
  hydro: '<path d="M12 3c-2.6 3.4-5 6.1-5 9a5 5 0 0 0 10 0c0-2.9-2.4-5.6-5-9Z"/><path d="M9.5 13a2.5 2.5 0 0 0 2.5 2.5"/>',
  pool: '<path d="M3 14c2.2 0 2.2-2 4.5-2s2.3 2 4.5 2 2.2-2 4.5-2 2.3 2 4.5 2M3 19c2.2 0 2.2-2 4.5-2s2.3 2 4.5 2 2.2-2 4.5-2 2.3 2 4.5 2"/>',
  cascade: '<path d="M5 4v6a2 2 0 0 0 4 0V7a2 2 0 0 1 4 0v6a2 2 0 0 0 4 0V9a2 2 0 0 1 4 0v11M3 20h18"/>',
  sauna: '<path d="M8 21c0-2 2-2 2-4s-2-2-2-4 2-2 2-4M14 21c0-2 2-2 2-4s-2-2-2-4 2-2 2-4"/>',
  ac: '<path d="M12 2v20M4 6l16 12M4 18 20 6M8 3l4 3 4-3M8 21l4-3 4 3M3 10l4 2-1 4M21 10l-4 2 1 4"/>',
  mirror: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="m8 8 4-3 4 3M8 16l4 3 4-3"/>',
  bath: '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM7 12V6a2 2 0 0 1 4 0M8 20v2M16 20v2"/>',
  garage: '<path d="M3 20V9l9-6 9 6v11h-5v-7H8v7z"/><path d="M9 17h6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.7 9.6a16 16 0 0 0 6.7 6.7l1.3-1.3a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
const grid=document.querySelector("#suite-grid");
const phone="5585974015551";
function imagePath(path){return `../img/${path}`}
function render(){grid.innerHTML=suiteData.map((suite,index)=>{const reserveText=encodeURIComponent(`Olá! Gostaria de reservar a suíte ${suite.name} no Chalex Center.`);const features=`<div class="suite-feature-block"><span class="details-label">O QUE INCLUI</span><div class="suite-features">${suite.features.map(feature=>`<span class="feature-chip">${icon(feature.icon)}<span>${feature.label}</span></span>`).join("")}</div></div>`;return `<article class="suite-card"><div class="suite-carousel" data-index="${index}"><img src="${imagePath(suite.photos[0])}" alt="${suite.name} · foto 1" tabindex="0" role="button" aria-label="Ampliar foto da suíte ${suite.name}"><button class="zoom-photo" aria-label="Ampliar foto" title="Ampliar foto"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5M10.8 7.5v6.6M7.5 10.8h6.6"/></svg></button><button class="carousel-arrow carousel-prev" data-step="-1" aria-label="Foto anterior">‹</button><button class="carousel-arrow carousel-next" data-step="1" aria-label="Próxima foto">›</button><span class="photo-count">1 / ${suite.photos.length}</span></div><div class="suite-info"><div class="suite-title-row"><h3>${suite.name}</h3>${suite.category?`<span class="suite-category">${suite.category}</span>`:""}</div>${features}<div class="suite-pricing"><div class="price-item"><span class="price-label">${icon("clock")}<span>Período · ${suite.period}</span></span><strong>${suite.price}</strong></div><div class="price-item"><span class="price-label">${icon("moon")}<span>Pernoite</span></span><strong>${suite.overnight}</strong></div></div><a class="reserve-button" href="https://wa.me/${phone}?text=${reserveText}" target="_blank" rel="noreferrer">${icon("phone")}Reservar</a></div></article>`}).join("")}
render();
function advance(carousel,step){const index=Number(carousel.dataset.index);const suite=suiteData[index];let photo=Number(carousel.dataset.photo||0);photo=(photo+step+suite.photos.length)%suite.photos.length;carousel.dataset.photo=photo;const img=carousel.querySelector("img");img.src=imagePath(suite.photos[photo]);img.alt=`${suite.name} · foto ${photo+1}`;img.setAttribute("aria-label",`Ampliar foto ${photo+1} da suíte ${suite.name}`);carousel.querySelector(".photo-count").textContent=`${photo+1} / ${suite.photos.length}`}
const viewer=document.querySelector("#photo-viewer"),viewerImage=document.querySelector("#photo-viewer-image");
let photoReturnY=0,photoReturnTarget=null;function openPhoto(img){photoReturnY=window.scrollY;photoReturnTarget=img;viewerImage.src=img.src;viewerImage.alt=img.alt;viewer.showModal()}
grid.addEventListener("click",event=>{const zoom=event.target.closest(".zoom-photo");if(zoom){openPhoto(zoom.closest(".suite-carousel").querySelector("img"));return}const arrow=event.target.closest("[data-step]");if(arrow){advance(arrow.closest(".suite-carousel"),Number(arrow.dataset.step));return}const photo=event.target.closest(".suite-carousel>img");if(photo)openPhoto(photo)});
grid.addEventListener("keydown",event=>{if(event.target.matches(".suite-carousel>img")&&(event.key==="Enter"||event.key===" ")){event.preventDefault();openPhoto(event.target)}});
viewer.addEventListener("click",event=>{if(event.target===viewer)viewer.close()});viewer.addEventListener("close",()=>{requestAnimationFrame(()=>{window.scrollTo({top:photoReturnY,left:0,behavior:"instant"});if(photoReturnTarget)photoReturnTarget.focus({preventScroll:true})})});document.querySelector(".photo-viewer-close").addEventListener("click",()=>viewer.close());
let startX=0,startY=0;grid.addEventListener("pointerdown",event=>{if(event.target.closest(".carousel-arrow"))return;const carousel=event.target.closest(".suite-carousel");if(carousel){startX=event.clientX;startY=event.clientY;carousel.dataset.swipe="1"}});grid.addEventListener("pointerup",event=>{const carousel=event.target.closest(".suite-carousel");if(!carousel||carousel.dataset.swipe!=="1")return;carousel.dataset.swipe="0";const dx=event.clientX-startX,dy=event.clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))advance(carousel,dx<0?1:-1)});


