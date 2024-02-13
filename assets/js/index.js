//Función para enviar formulario de contactp.

//despliega la ventana una vez aprieta el boton
$(document).ready(function () {
    $("button").tooltip()
  })
  //envia el formulario de contacto y despliega que ha sido enviado correctamente mandando una notificación
  $('#enviar_formulario').click(function () {
  
    alert("formulario enviado correctamente")
  
  })