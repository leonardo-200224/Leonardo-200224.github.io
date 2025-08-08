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

document.addEventListener("DOMContentLoaded", () => {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("animar");
                entrada.target.classList.remove("oculto");
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    const elementos = document.querySelectorAll('.oculto');
    elementos.forEach(el => observador.observe(el));
});


