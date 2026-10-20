
    function saludar() {
      const nombre = document.getElementById("nombre").value;
      document.getElementById("saludo").textContent = `¡Hola, ${nombre}! Bienvenido.`;
    }

    function edad() {
      const valor = document.getElementById("edad").value;
      document.getElementById("mostrarEdad").textContent = valor;
    }
 