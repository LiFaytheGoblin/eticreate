let date = new Date();
let monthYear = `${date.getMonth() + 1} / ${date.getFullYear()}`;

function createElWithText(e, t) {
  let el = document.createElement(e);
  let elText = document.createTextNode(t);
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
  console.log("Fun called");
}

function ask() {
    let title = prompt('Title (e.g. "Strawberries")');
    if (title === "") {
        alert("Not a valid title!")
        return;
    }
    let date = prompt(`Date (e.g. "${monthYear}")`);
    let ingreds = prompt('Ingredients (e.g. "Strawberries, Vanilla, Rum")')
    let n = prompt('Amount of Stickers (e.g. "3")')
    if (isNaN(n) || n < 1) {
        alert("Not a valid amount!")
        return;
    }

    createStickers(n, title, date, ingreds);
}
