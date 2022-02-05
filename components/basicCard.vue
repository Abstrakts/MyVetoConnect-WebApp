<template>
  <v-card class="mx-auto carte-test">
    <v-img
      class="white--text align-end"
      height="300px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="card-title">Top 10 Australian beaches</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
    name: 'basicCard',
}
</script>

<style>
.card-title {
  background-color: rgba(0, 0, 0, 0.5);
}
.carte-test {
  width: 100%;
}
</style>