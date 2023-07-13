<template>
  <div class="page-container">
    <div class="pagina">
      <div class="login-form">
        <h1>Iniciar sesión</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Nombre de usuario</label>
            <input type="text" id="username" v-model="username" placeholder="Ingrese su nombre de usuario" />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="password" placeholder="Ingrese su contraseña" />
          </div>
          <button class="login-button" type="submit">Iniciar sesión</button>
        </form>
      </div>
      <!-- Contenido de la página 2 -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const userData = {
          username: this.username,
          password: this.password
        };
        // Envía la solicitud al servidor para realizar el inicio de sesión
        const response = await fetch('URL_DE_TU_API', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
        
        if (response.ok) {
          console.log('Inicio de sesión exitoso:', this.username);
          // Guarda el nombre de usuario en Vuex
          this.$store.commit('setUsername', this.username);
          // Redirecciona a la vista 3
          this.$router.push('/pagina2/pagina3');
        } else {
          console.error('Error al iniciar sesión');
          this.$router.push('/pagina2/pagina3');

          // Maneja el error de inicio de sesión según tus necesidades
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        // Maneja el error de solicitud según tus necesidades
      }
    },
  },
};
</script>

<style scoped>
/* Estilos existentes */
</style>
