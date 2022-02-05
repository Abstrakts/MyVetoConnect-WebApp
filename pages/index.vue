<!-- https://haintheme.com/demo/wp/unitedpets/ -->

<template>
  <div>
      <homeHeader />
      <v-row class="sepp"></v-row>
      <v-row class="patern"></v-row>
      <v-row class="cards-container">
        <v-col cols="12" lg="4" sm="4">
          <basicCard />
        </v-col>
        <v-col cols="12" lg="4" sm="4">
          <basicCard />
        </v-col>
        <v-col cols="12" lg="4" sm="4">
          <basicCard />
        </v-col>
        <homeServices />
      </v-row>
      <v-row class="patern"></v-row>
      <v-row class="sepp"></v-row>
      <features />
      <v-row class="sepp"></v-row>
      <informations />
  </div>
</template>

<script>
import homeHeader from "~/components/homeHeader";
import basicCard from "~/components/basicCard";
import homeServices from "~/components/homeServices";
import features from "~/components/features";
import informations from "~/components/informations";

export default {
  name: "hubPage",
  data: () => ({
    
  }),
  created() {},
  components: {
    homeHeader,
    basicCard,
    homeServices,
    features,
    informations
  },
  methods: {
    
  }
};
</script>

<style>
.layout {
  padding: 0;
  background-color: #eee;
  width: 100%;
  top: 0;
}
.cards-container {
  z-index: 1000;
  background-color: #fff !important;
  min-height: 1px;
  padding: 20px;
}
.container {
  z-index: 2;
}
</style>