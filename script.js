 const bMore= document.querySelector('#bMore');
      bMore.addEventListener('click',e=>{
        links.classList.toggle('collapsed');

      })

      function copiarCorreo() {
  const correo = "ayalaperezleonardo24@gmail.com";

  navigator.clipboard.writeText(correo)
    .then(() => {
      alert("Correo copiado: " + correo);
    })
    .catch(err => {
      alert("No se pudo copiar: " + err);
    });
}