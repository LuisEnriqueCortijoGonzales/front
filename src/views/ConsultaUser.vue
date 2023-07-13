<template>
    <div class="page-container">
      
      <div class="pagina">
        <h1 class="titulo">Vista con Botones</h1>
        <button class="boton" @click="obtenerUsuarios">Obtener Usuarios</button>
        <button class="boton" @click="obtenerUsuario">Obtener Usuario</button>
  
        <div v-if="usuarios.length > 0">
          <h2>Lista de Usuarios:</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.username }}</td>
                <td>{{ usuario.balance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div v-if="usuario">
          <h2>Usuario:</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.username }}</td>
                <td>{{ usuario.balance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        usuarios: [],
        usuario: null
      };
    },
    methods: {
      obtenerUsuarios() {
        axios.get('URL_DE_TU_API/usuarios')
          .then(response => {
            this.usuarios = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      obtenerUsuario() {
        axios.get('URL_DE_TU_API/usuario')
          .then(response => {
            this.usuario = response.data;
          })
          .catch(error => {
            console.error(error);
          });
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
  