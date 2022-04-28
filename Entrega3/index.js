let images = new Array(
    new Array("img/onePiece1.jpg"),
    new Array("img/onePiece2.jpg"),
    new Array("img/onePiece3.jpg"),
    new Array("img/onePiece4.jpg"),
    new Array("img/onePiece5.jpg"),
    new Array("img/onePiece6.jpg"),
    new Array("img/onePiece7.jpg"),
    new Array("img/onePiece8.jpg"),
    new Array("img/onePiece9.jpg"),
    new Array("img/onePiece10.jpg"),
);

function randomImage() {
    for (let i = 0; i < 11; i++) {
        var x = Math.floor((Math.random() * 10));
        document.getElementById('image').innerHTML = `
        <img src="${images[x]}" id="randomImg" style= "width: 600px; height: 337.5px; border-radius: 3px;">
        <p class="mt-3 card-text">This is an image lauched by a simulator made in Javascript.</p>
        <p class="card-text">Simulator made by Franco Soto Kuschel</p>
        `;
    }
};