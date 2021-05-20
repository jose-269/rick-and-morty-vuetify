<template >
  <v-app>
    <Nav />

    <v-container app>
      <v-row>
        <v-col cols="4" v-for="personaje in personajes" :key="personaje.id" class="full-height">
          <v-card class="mx-auto mb-8">

            <v-img height="300" :src="personaje.image"></v-img>

            <v-card-title class="subtitle-1 font-weight-bold deep-purple darken-2 justify-center">{{
              personaje.name
            }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Nav from "@/components/Nav.vue";
export default {
  name: "app",
  components: {
    Nav
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["personajes"])
  },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
template {
  background-color: #00a86b;
}
</style>
