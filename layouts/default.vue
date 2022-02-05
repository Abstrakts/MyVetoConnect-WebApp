<template>
  <v-app>
    <navbar />
    <nuxt />
    <v-container>
      <baseFooter />
      <v-row class="patern"></v-row>
    </v-container>
    
  </v-app>
</template>

<script>
import navbar from "~/components/navbar";
import baseFooter from "~/components/baseFooter";


export default {
  data() {
    return {
    };
  },
  components: {
    navbar,
    baseFooter
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Spartan&display=swap");
@import url("https://fonts.googleapis.com/css?family=Passion+One&display=swap");
* {
  font-family: "Spartan";
}
.layout {
  background-color: #eee;
  font-family: "Cabin";
}
.sepp {
  background: url("../assets/img/lowpoly-texture.jpg") repeat center center;
  background-color: #d9cbca;
  height: 50px;
}
.patern {
  background: url("../assets/img/footer-pattern.png") repeat-x top center;
  height: 100px;
}
</style>
