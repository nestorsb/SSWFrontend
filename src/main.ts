import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SSWTabla from '@/components/SSWTabla.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/SSWTabla', component: SSWTabla },
  // { path: '/SSWTabla2', component: SSWTabla2 },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
