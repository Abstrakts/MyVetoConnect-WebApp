<template>
  <v-row class="footer text-center">
    <v-col cols="12" sm="3" lg="3">
      <img src="../assets/img/logo.png" width="180px" />
      <div class="social-icons">
        <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-twitter</v-icon>
        <v-icon>mdi-instagram</v-icon>
      </div>
    </v-col>
    <v-col cols="12" sm="3" lg="3">
      <h3>A propos :</h3>
      <hr />
      <p class="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </v-col>
    <v-col cols="12" sm="3" lg="3">
      <h3>Nous contacter :</h3>
      <hr />
      <ul class="contact-list mt-5">
        <li>
          <v-icon>mdi-phone</v-icon>+33(0)68459235
        </li>
        <li>
          <v-icon>mdi-email</v-icon>myvetoconnect@gmail.com
        </li>
        <li>
          <v-icon>mdi-map-marker</v-icon>MyVetConnect 123 - New York
        </li>
      </ul>
    </v-col>
    <v-col cols="12" sm="3" lg="3">
      <h3>Partenaires :</h3>
      <hr />
      <ul class="contact-list mt-5 mr-5">
        <li>
          <a href>Partenaire 1</a>
        </li>
        <li>
          <a href>Partenaire 2</a>
        </li>
        <li>
          <a href>Partenaire 3</a>
        </li>
        <li>
          <a href>Partenaire 4</a>
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'baseFooter'
}
</script>

<style>
hr {
  width: 200px;
  margin: 0 auto;
}
.contact-list {
  list-style: none;
}
.home-footer {
  width: 100vw;
}
</style>