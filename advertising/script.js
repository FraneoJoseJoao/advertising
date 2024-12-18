window.addEventListener('load', () => {
  const preloader = document.getElementById('carregamento');
  const content = document.getElementById('content');

  // Simula o carregamento para efeitos visuais
  setTimeout(() => {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 2000); // Altere o tempo conforme necessário
});


const efeito = new IntersectionObserver((aparece) =>{
  aparece.forEach ((aparecendo) => {
    if(aparecendo.isIntersecting){
      aparecendo.target.classList.add('aparecendo');
    }
    else {
      aparecendo.target.classList.remove('aparecendo')
    }
  })
});

const secoes = document.querySelectorAll('.efeito');
secoes.forEach((element) => efeito.observe(element));

const efeito_Esquerda = document.querySelectorAll('.efeito_Esquerda');
efeito_Esquerda.forEach((element) => efeito.observe(element));

function mostrarNum() {
  alert("WhatsApp: +244 955-360-283, esteja a vontade para entrar em contacto conosco! Não exite em investir no seu Futuro!");
}

function indisponivel(){
  alert("Lamentavelmente o link de momento está indisponivel!");
}