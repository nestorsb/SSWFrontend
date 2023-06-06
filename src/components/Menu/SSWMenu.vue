<template>
  <div class="menu-container">
    <!-- Menu superior -->
    <div class="menu-superior">
      <div class="botones-superior-navegacion-container">
        <button
          v-for="opcion in opcionesMenuSuperior"
          :key="opcion"
          @click="opcionSeleccionada = opcion"
          :class="{ active: opcionSeleccionada === opcion }"
        >
          {{ opcion }}
        </button>
      </div>
    </div>

    <!-- Contenedor principal -->
    <div class="content-container">
      <!-- Menu lateral -->
      <div
        class="menu-lateral"
        :class="{ 'menu-reducido': !mostrarMenuLateral }"
      >
        <button class="toggle-button"
                :class="{ 'menu-reducido-button': mostrarMenuLateral }"
@click="toggleMenu">
          <i
            :class="
              mostrarMenuLateral
                ? 'fas fa-chevron-left'
                : 'fas fa-chevron-right'
            "
          ></i>
        </button>
        <router-link
          v-for="subopcion in subopcionesMenu[opcionSeleccionada]"
          :key="subopcion"
          :to="subopcion.replace(/\s+/g, '-') "
          class="subopcion"
        >
          <span v-if="!mostrarMenuLateral" class="subopcion-icono">
            <i :class="getIconClass(subopcion)"></i>
          </span>
          <span v-else class="subopcion-descripcion">{{ subopcion }}</span>
        </router-link>
      </div>

      <!-- Contenido principal -->
      <div class="main-content">
        <router-view/>
        <!-- Aquí va el contenido principal de la página -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueRouter from "vue-router";


@Component
export default class Menu extends Vue {
  opcionesMenuSuperior = [
    "Mantenimiento",
    "Produccion",
    "Logistica",
    "Configuracion",
  ];

  opcionSeleccionada = this.opcionesMenuSuperior[0];
  mostrarMenuLateral = false;
  subopcionesMenu = {
    Mantenimiento: ["Subopcion 1", "Subopcion 2"],
    Produccion: ["SSWTabla"],
    Logistica: ["Subopcion 1", "Subopcion 2"],
    Configuracion: ["Subopcion 1", "Subopcion 2"],
  };

  mounted() {
    document.addEventListener("keydown", this.ocultarMenuLateralConEscape);
  }

  beforeDestroy() {
    document.removeEventListener("keydown", this.ocultarMenuLateralConEscape);
  }

  ocultarMenuLateralConEscape(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.mostrarMenuLateral = false;
    }
  }

  getIconClass(subopcion: string): string {
    // Asigna el nombre de clase correspondiente al icono de Font Awesome según la subopción
    // Por ejemplo, si subopcion es "Subopcion 1", devuelve "fas fa-icono-subopcion-1"
    return "fas fa-user";
    // return "fas fa-icono-" + subopcion.toLowerCase().replace(/\s+/g, "-");
  }

  toggleMenu() {
    this.mostrarMenuLateral = !this.mostrarMenuLateral;
  }

  

}
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 0;
  padding-top: 0;
}

.menu-superior {
  background-color: #0078d7;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 100;
}

.botones-superior-navegacion-container {
  margin-left: 70px;
}

.menu-superior button {
  border: none;
  background-color: transparent;
  color: white;
  padding: 5px 15px;
  cursor: pointer;
  flex: 1;
  text-align: center;
  transition: background-color 0.3s;
}

.content-container {
  display: flex;
  flex: 2;
}

.menu-superior button:hover {
  background-color: #005eb8;
}

.menu-superior button.active {
  background-color: #005eb8;
}

.menu-lateral {
  width: 250px;
  background-color: #f3f3f3;
  color: black;
    transition: width 0.3s, transform 0.3s; /* Agrega la transición para el desplazamiento */
}

.menu-lateral.menu-reducido {
  width: 40px;
}



.subopcion {
  display: block;
  margin-bottom: 1px;
  padding: 10px 8px 10px 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}

.subopcion:hover {
  background-color: #e5e5e5;
}

.subopcion.active {
  background-color: #c6c6c6;
}

@media only screen and (max-width: 768px) {
  .menu-lateral {
    width: 100px;
  }

  .menu-lateral.menu-reducido {
    width: 50px;
  }
}

.subopcion-icono {
  transform: 2s;
  padding-right: 20px; 
}

.menu-lateral.menu-reducido .subopcion-descripcion {
  display: inline;
}



.toggle-button {
  /* position: absolute; */
  /* top: 10px; */
  padding: 0 20px 0 20px;

  width: 30px;
  height: 30px;
  background-color: #f3f3f3;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s /* Agrega la transición para el desplazamiento */
}

.toggle-button i {
  color: #333;
}

.toggle-button:hover {
  background-color: #e5e5e5;
}
.toggle-button.menu-reducido-button  {
  padding-left: 220px;
  padding-right: 30px;
  transition: 0.3s;
}

.main-content{
  padding: 10px 20px;
}
</style>
