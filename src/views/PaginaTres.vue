<template>
  <div class="page-container">
    <div class="pagina">
      <h2 class="titulo">Página 3</h2>
      <router-link class="boton" to="/transaccion">Hacer una transacción</router-link>

      <!-- Mostrar los datos de la API -->
      <div class="datos-api">
        <p>Cantidad de transacciones: {{ cantidadTransacciones }}</p>
        <p>Fecha de la última transacción: {{ fechaUltimaTransaccion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cantidadTransacciones: 0,
      fechaUltimaTransaccion: ''
    };
  },
  methods: {
    obtenerDatosAPI() {
      axios.get('URL_DE_LA_API')
        .then(response => {
          // Obtener los datos de la respuesta y asignarlos a las variables
          this.cantidadTransacciones = response.data.cantidadTransacciones;
          this.fechaUltimaTransaccion = response.data.fechaUltimaTransaccion;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.obtenerDatosAPI();
  }
};
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #000000, #ffffff);
  color: #ffffff;
  font-family: Arial, sans-serif;
}

.titulo {
  font-size: 32px;
  margin-bottom: 20px;
}

.boton {
  background-color: #ffffff;
  border-radius: 5px;
  color: #000000;
  display: inline-block;
  font-size: 16px;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.boton:hover {
  background-color: #f5f5f5;
}

.datos-api {
  margin-top: 20px;
}
</style>
