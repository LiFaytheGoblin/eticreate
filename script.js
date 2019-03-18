let date = new Date();
let monthYear = `${date.getMonth()} ${date.getYear()}`;

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

    let stickerText = '<div class="sticker">'
                    + `<h3>${title}</h3>`
                    + `<p>${ingreds}</p>`
                    + `<p>${date}</p>`
                    + '</div>';

    const container = document.getElementById('container')

    for(i = 0; i < n; i++) {
        let sticker = document.createElement("div");
        sticker.setAttribute("class", "sticker");

        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(title);
        h3.appendChild(h3Text);

        let p1 = document.createElement("p");
        let p1Text = document.createTextNode(ingreds);
        p1.appendChild(p1Text);

        let p2 = document.createElement("p");
        let p2Text = document.createTextNode(date);
        p2.appendChild(p2Text);

        sticker.appendChild(h3);
        sticker.appendChild(p1);
        sticker.appendChild(p2);

        container.appendChild(sticker);
    }
}
