let items = document.querySelectorAll("li");
let bestoShonen = document.getElementById("best");

function mostrarbestoShonen() {
    for (i = 0; i < 5; i++) {
        items[i].classList.toggle("btn-warning");
    }
    return true;
};

function showBest() {
    if (mostrarbestoShonen() == true) {
        mostrarbestoShonen();
        bestoShonen.classList.toggle("d-none");
    }
}