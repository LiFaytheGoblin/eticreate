function createElWithText(e, t) {
  const el = document.createElement(e);
  const elText = document.createTextNode(t);
  el.appendChild(elText);

  return el;
}

function createSingleSticker(title, date, ingreds) {
  const sticker = document.createElement("div");
  sticker.setAttribute("class", "sticker");

  const h3 = createElWithText("h3", title);
  const p1 = createElWithText("p", ingreds);
  const p2 = createElWithText("p", date);

  sticker.appendChild(h3);
  sticker.appendChild(p1);
  sticker.appendChild(p2);

  return sticker;
}

function createStickers(n, title, date, ingreds) {
  const container = document.getElementById('container')

  for(i = 0; i < n; i++) {
      container.appendChild(createSingleSticker(title, date, ingreds));
  }
}

function createFrom(form) {
  createStickers(form.n.value, form.title.value, form.date.value, form.ingreds.value);
}
