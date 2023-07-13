<template>
    <div class="page-container">
      <h1 class="titulo">Formulario y Botones</h1>
      <form @submit.prevent="submitForm">
        <div class="datos-api">
          <div>
            <label for="type">Tipo:</label>
            <input type="text" id="type" v-model="type">
          </div>
          <div>
            <label for="order">Orden:</label>
            <input type="text" id="order" v-model="order">
          </div>
        </div>
        <button class="boton" @click="sendRequest('API_1')">API 1</button>
        <button class="boton" @click="sendRequest('API_2')">API 2</button>
        <button class="boton" @click="sendRequest('API_3')">API 3</button>
        <button class="boton" @click="sendRequest('API_4')">API 4</button>
        <button class="boton" @click="sendRequest('API_5')">API 5</button>
        <button class="boton" @click="sendRequest('API_6')">API 6</button>
      </form>
      <div v-if="responseData.length > 0" class="datos-api">
        <h2>Datos Obtenidos:</h2>
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Sender</th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Hash</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in responseData" :key="data.timestamp">
              <td>{{ data.timestamp }}</td>
              <td>{{ data.data.sender }}</td>
              <td>{{ data.data.recipient }}</td>
              <td>{{ data.data.amount }}</td>
              <td>{{ data.hash }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        type: 'money',
        order: 'asc',
        responseData: []
      };
    },
    methods: {
      async sendRequest(api) {
        try {
          const requestData = {
            type: this.type,
            order: this.order
          };
          const response = await axios.post(api, requestData);
          if (response.status === 200) {
            this.responseData = response.data;
          }
        } catch (error) {
          console.error(error);
        }
      },
      submitForm() {
        // Este método se utiliza solo para evitar el comportamiento predeterminado del formulario
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
  