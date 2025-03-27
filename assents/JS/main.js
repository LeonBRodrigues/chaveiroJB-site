// Carousel

var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()

// Whatsapp botao

const content = document.querySelector('[data-shrink="yes"]');
const span = document.querySelector('[data-shrink="yes"] span');

span.classList.add('aparecer');

setInterval(function() {
  content.classList.toggle('shrink');
}, 5000);

setTimeout(function() {
  setInterval(function() {
  span.classList.toggle('aparecer');
}, 5000);
}, 200);


//Formulario de pagina contato

(() => {
  'use strict'

  // Busque todos os formulários aos quais queremos aplicar estilos de validação Bootstrap personalizados
  const forms = document.querySelectorAll('.needs-validation')

  // Faça um loop sobre eles e impeça o envio
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//validação de telefone

//Constante que faz a formatação e envia de volta para terceiro passo.
const formato = {

  phone (value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1)$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }
}
//O JS vai identificar todos os campos input e percorrer todos com um “FOR” pegando os valores.
document.querySelectorAll('input').forEach(($input) => {
  //Armazenar e formatar o valor recebido para pegar somente o que está dentro do “data-js”.
  const field = $input.dataset.js
  //Enviar o valor formatado para o input atualizado em cada interação.
  $input.addEventListener('input', (e) => {
    e.target.value = formato[field](e.target.value)
  }, false)
})