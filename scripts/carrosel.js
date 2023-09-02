const cardContainer = document.getElementById('cardContainer');
const navButtons = document.querySelectorAll('.nav-button');

let currentIndex = 0;
const cardContent = [
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat at, blanditiis itaque, incidunt reiciendis voluptate debitis velit temporibus odio quia asper ipsum dolor sit amet consectetur, adipisicing elit. Fugiat at, blanditiis itaque, incidunt reiciendis voluptate debitis velit temporibus odio quia asperiores cumque excepturi? Esse eum animi iusto cumque sequi illo?iores cumque exclkjkjllkjkllkjlepturi? Esse eum animi iusto cumque sequi illo?`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat at, blanditiis itaque, incidunt reiciendis voluptate debitis velit temporibus odio quia asperiores cumque excepturi? Esse eum animi iusto cumque sequi illo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat at, blanditiis itaque, incidunt reiciendis voluptate debitis velit temporibus odio quia asperiores cumque excepturi? Esse eum animi iusto cumque sequi illo?`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat at, blanditiis itaque,  ipsum dolor sit amet consectetur, adipisicing elit. Fugiat at, blanditiis itaque, incidunt reiciendis voluptate debitis velit temporibus odio quia asperiores cumque excepturi? Esse eum animi iusto cumque sequi illiores cumque excepturi? Esse eum animi iusto cumque sequi illo?`
];
function mostrarCard() {
    cardContainer.innerHTML = `<div class="card">${cardContent[currentIndex]}</div>`;
}

function mostrarAnterior() {
    currentIndex = (currentIndex - 1 + cardContent.length) % cardContent.length;
    mostrarCard();
}

function mostrarProximo() {
    currentIndex = (currentIndex + 1) % cardContent.length;
    mostrarCard();
}
mostrarCard();
navButtons.forEach(button => {
    if (button.classList.contains('anterior')) {
        button.addEventListener('click', mostrarAnterior);
    } else if (button.classList.contains('proximo')) {
        button.addEventListener('click', mostrarProximo);
    }
});
