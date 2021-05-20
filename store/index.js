// import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


export const state = () => ({
    personajes: [],
});

export const mutations = {
    getPersonajes(state, payload) {
        state.personajes = payload
    }
};

export const actions = {
  async getData({commit}) {
    const url = "https://rickandmortyapi.com/api/character";
    try {
      const req = await axios(url);
      console.log(req.data.results);
      const personajesData = req.data.results;
      commit("getPersonajes", personajesData);
    } catch (error) {
      console.log(error);
    }
  }
};
