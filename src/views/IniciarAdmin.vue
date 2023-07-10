<template>
  <div class="page-container">
    <div class="pagina">
      <h1 class="titulo">Seleccione el tipo de consulta</h1>
      <button class="boton" @click="redireccionar('/users')">Usuarios</button>
      <button class="boton" @click="redireccionar('/consultas')">Transacciones</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redireccionar(ruta) {
      this.$router.push(ruta);
    }
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
</style>
