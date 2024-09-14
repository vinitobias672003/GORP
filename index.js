window.onload = function() {
    // Carrega o conteúdo de 'popup.html' em um elemento 'div' com a id 'popup'
    fetch('cadastro_gorp.html')
    .then(function(response) {
        return response.text();
      })
    .then(function(html) {
        document.getElementById('popup').innerHTML = html;
  
        // Exibe o 'popup' no centro da tela com 50% do tamanho da tela
        const popup = document.querySelector('.popup');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.backgroundColor = '#fff';
        popup.style.border = '1px solid #ccc';
        popup.style.padding = '20px';
        popup.style.width = '50vw';
        popup.style.height = '50vh';
        popup.style.display = 'block';
      });
  }