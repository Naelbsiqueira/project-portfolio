
/*Evento para escreve na tela*/ 
function escrevendoLetra() {
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }
  const titulo = document.querySelector(".digitando");
  ativaLetra(titulo);
}
/*-----------------------------------------------------------------*/ 

/*Evento para descer menu incial em 992px*/ 
function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navmenu = document.querySelector('header .navegacao-hearder')

    ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x');
    navmenu.classList.toggle('ativado');
});
}
/*------------------------------------------------------------------*/

/*Evento para pular resumo de informações*/
function eventResume(){
const divExperence = document.querySelectorAll('.experence_content div')
const liExperence = document.querySelectorAll('.experence_content ul li')

const divEducation = document.querySelectorAll('.education_content div')
const liEducation= document.querySelectorAll('.education_content ul li')


divExperence[0].classList.add('ativo')
liExperence[0].classList.add('ativo')
divEducation[0].classList.add('ativo')
liEducation[0].classList.add('ativo')


function slideShow(index){
  divExperence.forEach((div)=>{
    div.classList.remove('ativo');
  });
  liExperence.forEach((botao)=>{
    botao.classList.remove('ativo');
  })
  divExperence[index].classList.add('ativo');
  liExperence[index].classList.add('ativo');
 }

function slideShow2(index){
  divEducation.forEach((div)=>{
    div.classList.remove('ativo');
  });
  liEducation.forEach((botao)=>{
    botao.classList.remove('ativo');
  })

  divEducation[index].classList.add('ativo');
  liEducation[index].classList.add('ativo');
 }

 liExperence.forEach((event,index)=>{
    event.addEventListener('click',()=>{
      slideShow(index)
    });
 });

 liEducation.forEach((event,index)=>{
    event.addEventListener('click',()=>{
      slideShow2(index)
    });
 });
}

/*----------------------------------------------------------------------------*/


eventResume();
escrevendoLetra();
menuMobol();
