<template>
  <div class="profil">
    <v-container class="mt-12">
      <editProfil />
      <profilAddress />
    </v-container>
    <div class="sepp"></div>
  </div>
</template>

<script>
import profilAddress from "~/components/profilWithAddress";
import editProfil from "~/components/editProfil";


export default {
  components: {
    profilAddress,
    editProfil
  },
  mounted() {
  }
};
</script>

<style>

</style>