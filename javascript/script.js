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
/* Events Exposition Projectes*/
const listAll = document.querySelectorAll('.projects_armazenamento ul li');
const bottonGeneral = document.querySelectorAll('.projects_models ul li');
const bottonAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
  bottonGeneral.forEach((item)=>{
    item.classList.remove('ativo');
  });
  bottonGeneral[index].classList.add('ativo');
}
bottonGeneral.forEach((event,index)=>{
    event.addEventListener('click',()=>{
      removeClick(index);
    })
})

function showLista(lista, botton = "all"){
      lista.forEach((item)=>{
        item.classList.remove('ativo');
      })
      if(botton == 'design'){
         lista[0].classList.add('ativo');
         lista[1].classList.add('ativo');
      }
      if(botton == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        }
      if(botton == 'website'){
      lista[4].classList.add('ativo');
      lista[5].classList.add('ativo');
      lista[6].classList.add('ativo');
      lista[7].classList.add('ativo');
      }
      if(botton == 'all'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
      }

}




bottonGeneral.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    let currentBotton = e.target;
    if(currentBotton.classList.contains('all')){
        showLista(listAll)
    }
    if(currentBotton.classList.contains('design')){
        showLista(listAll,"design")
    }
  if(currentBotton.classList.contains('graphic')){
        showLista(listAll, "graphic")
    }
  if(currentBotton.classList.contains('website')){
        showLista(listAll, "website")
    }
    if(currentBotton.classList.contains('all')){
        showLista(listAll, "all")
   }  
    
  })
})










/*-------------------------------------------------------------------------------*/ 

eventResume();
escrevendoLetra();
menuMobol();
