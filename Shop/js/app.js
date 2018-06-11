



const $form = $('#suscribeForm')
const $formGroup = $form.find('form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function (ev){
  ev.preventDefault()
  const error = Math.random() > 0.5
  $formGroup.removeClass().addClass('form-group')
  $formControl.removeClass().addClass('form-group')
  $formGroup.addClass( error ? 'has-danger' : 'has-success')
  $formControl.addClass( error ? 'form-control-danger' : 'has-success')
  $formGroup.find('.form-control-feedback').remove()

  var el;
  if (error) {
    el = $('<div>',{html: 'error'})
  }else {
    el = $('<div>',{html: 'Te enviamos la novedades'})
  }
  el.addClass('form-control-feedback')
  $formGroup.append(el)
})

function mostrarModal(){
  $('modalOferta').modal('show')
}
