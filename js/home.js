const units = [
  { id: "center", name: "Chalex Center", identity: "Bezerra de Menezes", image: "img/logo-center.png", phone: "+55 85 97401-5551", map: "https://maps.google.com/?q=Chalex+Center+Motel+Fortaleza", page: "center/", categories: "4 categorias" },
  { id: "country", name: "Chalex Country", identity: "Messejana", image: "img/logo-country.png", phone: "+55 85 98925-2900", map: "https://maps.google.com/?q=Chalex+Country+Motel+Fortaleza", page: "country/", categories: "Consulte a unidade" }
];
const mapIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`;
const phoneIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.7 9.6a16 16 0 0 0 6.7 6.7l1.3-1.3a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z"/></svg>`;
document.querySelector("#unit-grid").innerHTML = units.map(unit => `<article class="unit-card"><div class="unit-card-top"><img class="unit-logo" src="${unit.image}" alt="Logo ${unit.name}"><div class="unit-heading"><h2>${unit.name}</h2><span class="unit-identity">${unit.identity}</span></div><span class="category-badge">${unit.categories}</span></div><div class="unit-card-bottom"><a class="view-suites" href="${unit.page}">Ver suítes <span>→</span></a><a class="unit-map" href="${unit.map}" target="_blank" rel="noreferrer" aria-label="Abrir ${unit.name} no Maps">${mapIcon}Maps</a><a class="unit-contact" href="https://wa.me/${unit.phone.replace(/\D/g, "")}" target="_blank" rel="noreferrer" aria-label="Contato com ${unit.name}">${phoneIcon}Contato</a></div></article>`).join("");

const reviews = [
  { name: "Ricardo Magalhaes", when: "2 meses atrás", text: "Excelente. Recomendo muito. Já frequentei outras vezes." },
  { name: "Adelmo", when: "3 meses atrás", text: "Indico para quem quer preço e boa qualidade." },
  { name: "Talinara Fernandes", when: "4 semanas atrás", text: "Me senti em casa." },
  { name: "Jonatan Soares", when: "2 anos atrás", text: "Gostei, muito limpo silêncio banho quente, carinho $$$ mas faz jus ao local" },
  { name: "Alan Duarte", when: "2 anos atrás", text: "Maravilhoso. Escolhi o plano executivo, o mais simples. Quarto muito limpo, espaçoso e reservado. Recomendo dms." },
  { name: "Jefferson Cândido", when: "Editado 2 anos atrás", text: "Sempre bom ter um local perto de casa que tem um excelente custo/benefício onde eu posso ficar a vontade com minha esposa amada!" },
  { name: "Raphael Nunes", when: "6 anos atrás", text: "Caramba... Muito bom, atendimento excelente, funcionários muito atenciosos, achei o lugar bem limpo, organizado, a hidro funcionando perfeitamente bem, deixou nada a desejar, lugar bonito, super bem localizado, de fácil acesso, descrição ao máximo... Recomendo fazer uma visita !!" },
  { name: "Isaac Gondim Geraldo", when: "6 anos atrás", text: "A suíte é bem grande, o arranjo das coisas é ótimo, bem organizado e higiênico, o espaço da piscina é a céu aberto, a iluminação é muito agradável. O preço é bom para os serviços prestados." }
];
const reviewCard = review => `<article class="review-card"><span class="review-card-stars" aria-label="5 de 5 estrelas">★★★★★</span><blockquote>“${review.text}”</blockquote><div class="review-card-author"><strong>${review.name}</strong><span>Avaliação no Google · ${review.when}</span></div></article>`;
const rows = [reviews.slice(0, 4), reviews.slice(4)];
document.querySelector("#reviews-lanes").innerHTML = rows.map((row, index) => `<div class="review-lane" data-direction="${index === 0 ? "left" : "right"}"><div class="review-track">${[...row, ...row].map(reviewCard).join("")}</div></div>`).join("");
