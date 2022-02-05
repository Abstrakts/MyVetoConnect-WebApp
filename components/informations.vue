<template>
  <v-row class="informations">
    <v-col cols="12" sm="3" lg="3" class="text-center mt-5">
      <v-icon class="infos-icon">mdi-dog</v-icon>
      <h3>{{ companies.length }}</h3>
      <b>Vétérinaires</b>
    </v-col>
    <v-col cols="12" sm="3" lg="3" class="text-center mt-5">
      <v-icon class="infos-icon">mdi-dog</v-icon>
      <h3>{{ users.length }}</h3>
      <b>Propriétaires</b>
    </v-col>
    <v-col cols="12" sm="3" lg="3" class="text-center mt-5">
      <v-icon class="infos-icon">mdi-dog</v-icon>
      <h3>{{ animals.length }}</h3>
      <b>Animaux</b>
    </v-col>
    <v-col cols="12" sm="3" lg="3" class="text-center mt-5">
      <v-icon class="infos-icon">mdi-dog</v-icon>
      <h3>0</h3>
      <b>Autres trucs</b>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'informations',
    data () {
      return {
        companies: [],
        users: [],
        animals : []
      }
    },
    created() {
      this.$axios.get("/companies").then(response => (this.companies = response.data));
      this.$axios.get("/users").then(response => (this.users = response.data));
      this.$axios.get("/animals").then(response => (this.animals = response.data));
    }
}
</script>

<style>
.infos-icon {
  font-size: 3rem !important;
  color: #3d867b !important;
  padding: 10px;
  background-color: #fff;
  border-radius: 60%;
}
.informations {
  background: url("../assets/img/cats.jpg") no-repeat center center;
  min-height: 250px;
  width: 100vw;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.8);
}
.informations h3 {
  font-size: 3rem;
  color: #fff;
  z-index: 1000;
}
.informations b {
  font-size: 1.5rem;
  color: #fff;
}
</style>
