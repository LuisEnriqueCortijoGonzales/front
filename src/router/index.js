import { createRouter, createWebHistory } from 'vue-router';
import PaginaUno from '../views/PaginaUno.vue';
import PaginaDos from '../views/PaginaDos.vue';
import PaginaTres from '../views/PaginaTres.vue';
import IniciarAdmin from '../views/IniciarAdmin.vue';
import RegistroUser from '../views/RegistroUser.vue';
import TrasaccionesUser from '../views/TransaccionesUser.vue';
import ConsultaUsers from '../views/ConsultaUser.vue';
import ConsulTRS from '../views/ConsultaTrs.vue';

const routes = [
  {
    path: '/',
    name: 'Pagina1',
    component: PaginaUno
  },
  {
    path: '/pagina2',
    name: 'Pagina2',
    component: PaginaDos
  },
  {
    path: '/pagina2/pagina3',
    name: 'Pagina3',
    component: PaginaTres
  },
  {
    path: '/iniciaradmin', // Ruta para la página "Iniciar Admin"
    name: 'IniciarAdmin', // Nombre de la ruta
    component: IniciarAdmin, // Componente de la página "Iniciar Admin"
  },
  {
    path: '/registro',
    name: 'Registro', 
    component: RegistroUser, 
  },
  {
    path: '/transaccion',
    name: 'Transaccion', 
    component: TrasaccionesUser, 
  },
  {
    path: '/users',
    name: 'ConsUsers', 
    component: ConsultaUsers, 
  },
  {
    path: '/consultas',
    name: 'ConsultasTrs', 
    component: ConsulTRS, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

