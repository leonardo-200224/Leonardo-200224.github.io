function buscar() {
  const texto = document.getElementById("buscador").value.toLowerCase();

  if (texto.includes("sobre")) {
    location.href = "#sobremi";
  } else if (texto.includes("habilidades")) {
    location.href = "#habilidades";
  } else if (texto.includes("proyectos")) {
    location.href = "#proyectos";
  } else if (texto.includes("contacto")) {
    location.href = "#contacto";
  } else {
    alert("No se encontró esa sección");
  }
}
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