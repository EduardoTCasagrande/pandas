document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item');
  const buttons = document.querySelectorAll('.menu-button');

  // Adicione a classe 'show' aos elementos da categoria 'brigadeiro' por padrão
  items.forEach(item => {
    if (item.classList.contains('brigadeiro')) {
      item.classList.add('show');
    }
  });

  // Adicione a classe 'selected' aos botões da categoria 'brigadeiro' por padrão
  const defaultButton = document.querySelector('.menu-button[data-category="brigadeiro"]');
  defaultButton.classList.add('selected');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      items.forEach(item => {
        item.classList.remove('show');
        if (item.classList.contains(category)) {
          item.classList.add('show');
        }
      });

      // Remova a classe 'selected' de todos os botões e adicione-a apenas ao botão atual
      buttons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');

      // Verifique se há itens suficientes para mostrar a barra de rolagem
      const showScrollBar = document.querySelector('.items').scrollWidth > document.querySelector('.items').clientWidth;
      document.querySelector('.items').style.overflowX = showScrollBar ? 'scroll' : 'hidden';
    });
  });
});
