<template>
  <div>
    <Nav />

    <v-container>
      <v-row>
        <v-col cols="4" v-for="personaje in personajes" :key="personaje.id">
          <v-card class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="personaje.image"></v-img>

            <v-card-title class="align-center">{{
              personaje.name
            }}</v-card-title>

            <v-divider class="mx-4"></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav
  },
  data() {
    return {
      personajes: []
    };
  },
  methods: {
    async getData() {
      const url = "https://rickandmortyapi.com/api/character";
      try {
        const req = await axios(url);
        console.log(req.data.results);
        this.personajes = req.data.results;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>
