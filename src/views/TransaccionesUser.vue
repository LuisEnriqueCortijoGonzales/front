<template>
  <div class="page-container">
    <h1 class="titulo">Formulario de Envío</h1>
    <form @submit.prevent="submitForm">
      <div class="datos-api">
        <div>
          <label for="recipient">Destinatario:</label>
          <input type="text" id="recipient" v-model="recipient">
        </div>
        <div>
          <label for="amount">Cantidad:</label>
          <input type="number" id="amount" v-model="amount">
        </div>
      </div>
      <button class="boton" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipient: '',
      amount: null
    };
  },
  methods: {
    async submitForm() {
      const jsonData = {
        sender: this.$store.state.username,
        recipient: this.recipient,
        amount: this.amount
      };
      
      try {
        const response = await fetch('URL_DE_TU_API', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonData)
        });

        if (response.ok) {
          console.log('JSON enviado exitosamente:', jsonData);
          // Realiza acciones adicionales después de enviar el JSON a la API
          
          this.$router.push('/pagina2/pagina3');
        } else {
          console.error('Error al enviar el JSON');
          this.$router.push('/pagina2/pagina3');

          // Maneja el error de envío según tus necesidades
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        // Maneja el error de solicitud según tus necesidades
      }
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

.datos-api {
  margin-top: 20px;
}
</style>
