<template>
  <v-row>
    <div class="header">
      <v-container>
        <v-row class="mt-12">
          <v-col cols="12" sm="6" lg="6"></v-col>
          <v-col class="test" cols="12" sm="6" lg="6">
            <p class="headerTitle ">Ils utilises nos services</p>
            <p class="headerDescription">
              Découvrez tout les vétérinaires utilisant myVetoConnect afin de 
              pouvoir vous proposer un suivi complet de votre animal.
            </p>
            <v-btn class="info" to="/companies" large>Decouvrir</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "homeHeader"
};
</script>

<style>
.test {
  background-color: rgba(0, 0, 0, 0.3);
}
.header {
  background: url("../assets/img/header.jpg") no-repeat top center;
  margin: 0;
  padding: 0;
 /* box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3); */
  width: 100%;
  height: 40rem;
  background-size: cover;
  z-index: 0;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: -20px;
}
.headerTitle {
  color: #fff;
  font-size: 2rem;
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: bold;
}
.headerDescription {
  max-width: 700px;
  color: #fff;
}
@media (max-width: 700px) {
  .test {
    display: none;
  }
  .header {
    background-position-x: -300px;
  }
}
</style>