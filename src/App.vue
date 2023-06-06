<template>
  <div id="app">
    <SSWMenu/>
    <!-- <SSWTabla/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SSWMenu from './components/Menu/SSWMenu.vue'
import SSWTabla from './components/SSWTabla.vue'

@Component({
  components: {
    SSWMenu,
    SSWTabla
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0; /* Elimina el margen predeterminado del cuerpo del documento */
}
</style>
