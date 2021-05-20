<template>
  <v-toolbar class="deep-purple darken-2 mb-10">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Rick and Morty</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn text>
      Ingresar
    </v-btn>

    <v-btn text>
      Buscar
    </v-btn>
    <v-btn text>
      Acerca De
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style></style>
