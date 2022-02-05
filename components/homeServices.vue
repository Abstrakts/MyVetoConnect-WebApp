<template>
  <v-row class="our-services">
    <v-col cols="12" lg="6" sm="6" class="our-services-content">
      <v-container>
        <v-col cols="12">
          <h2 class="text-center">NOS SERVICES :</h2>
          <hr>
        </v-col>
        <v-col cols="12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </v-col>
        <v-col cols="12">
          <v-btn color="info">En savoir plus</v-btn>
        </v-col>
      </v-container>
    </v-col>
    <v-col cols="12" lg="6" sm="6">
      <img src="../assets/img/introimg1.jpg" width="100%" />
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'homeServices',
}
</script>

<style>
.our-services {
  z-index: 3;
  max-width: 90%;
  margin: 0 auto;
}
.our-services-content {
  justify-content: center;
  align-items: center;
  display: flex;
}
.our-services-content h2 {
  font-size: 2rem;
}
</style>