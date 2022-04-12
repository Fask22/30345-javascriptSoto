var parrafos = document.querySelectorAll("p");


for (i = 0; i < parrafos.length; i++) {
    parrafos[i].classList.add("text-danger");
    if (parrafos[1]) {
        parrafos[1].classList.remove("text-danger");
        parrafos[1].classList.add("text-success");
    }
}