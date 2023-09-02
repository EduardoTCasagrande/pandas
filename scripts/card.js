document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll(".add-button");
  const removeButtons = document.querySelectorAll(".remove-button");
  const quantitySpans = document.querySelectorAll(".quantity span");
  const finalizarButton = document.getElementById("finalizar");

  const items = ["Brigadeiro", "Brigadeiro Colorido", "Beijinho de Coco", "Brigadeiro Light", "Trufa simples", "Trufa Recheada", "Trufa Light", "Brownie"];

  let quantities = new Array(addButtons.length).fill(0);

  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function () {
      quantities[i]++;
      quantitySpans[i].textContent = quantities[i];
    });

    removeButtons[i].addEventListener("click", function () {
      if (quantities[i] > 0) {
        quantities[i]--;
        quantitySpans[i].textContent = quantities[i];
      }
    });
  }

  finalizarButton.addEventListener("click", function () {
    let message = "Pedido:\n";
    let hasItems = false;

    for (let i = 0; i < quantities.length; i++) {
      if (quantities[i] > 0) {
        message += `${items[i]}: ${quantities[i]} unidades\n`;
        hasItems = true;
      }
    }

    if (!hasItems) {
      alert("Seu pedido está vazio. Por favor, selecione itens antes de finalizar.");
      return;
    }

    const numeroTelefone = "5511961510757";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink);
  });
});
