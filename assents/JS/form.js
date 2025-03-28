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