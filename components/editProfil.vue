<template>
  <div class="editProfil" v-if="!user.principalAddress">
    <v-row class="mt-5">
      <h3>Créer mon profil</h3>
    </v-row>
    <v-row>
      <p>Avant de créer votre profil, merci d'ajouter ces quelques informations :</p>
    </v-row>
    <v-row>
      <v-card class="mx-auto" width="100%" outlined>
        <v-row>
          <v-col cols="6">
            <v-card class="mx-5" outlined>
              <div class="sepp">
                <h4 class="sepp-title py-4 px-4">Mon profil :</h4>
              </div>
              <v-row>
                <v-col class="text-center">
                  <v-avatar width="80px" height="80px">
                    <img :src="user.avatar" />
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4 class="text-center">{{user.firstName}} {{user.lastName}}</h4>
                  <p class="text-center">{{user.email}}</p>
                  <br />
                  <p class="text-center">Tél: {{user.phone}}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn icon color="info">
                    <v-icon>mdi-account-edit</v-icon>
                  </v-btn>
                  <v-btn icon color="info">
                    <v-icon>mdi-bell</v-icon>
                  </v-btn>
                  <v-btn icon color="info">
                    <v-icon>mdi-hospital-box-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6">
            Ajouter mon adresse :
            <form method="post" @submit="addAddress()">
              <v-col cols="12" class="py-10 px-10">
                <v-text-field label="adresse" v-model="principal" required></v-text-field>
                <v-text-field label="secondaire" v-model="secondary"></v-text-field>
                <v-text-field label="ville" v-model="city" required></v-text-field>
                <v-text-field label="Numéro de téléphone" v-model="phone" required></v-text-field>
                <v-btn type="submit" @click="$router.go({path:'/profil', force: true})">Envoyer</v-btn>
              </v-col>
            </form>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "editProfil",
  middleware: "isAuthenticated",
  components: {},
  data: () => ({
    user: [],
    connect: [],
    animals: [],
    principal: null,
    secondary: null,
    city: null,
    phone: null,
    profilMenu: [{ item: "mdi-settings" }, { item: "mdi-bell" }]
  }),
  created() {
    if (Cookies.get("JWT")) {
      this.$axios.get("user/me").then(response => (this.user = response.data));
    }
  },
  mounted() {

  },
  methods: {
    async addAddress() {
      await this.$axios.post("user/me/createProfil", {
        principalAddress: this.principal,
        secondaryAddress: this.secondary,
        city: this.city,
        phone: this.phone
      });
    }
  }
};
</script>

<style>
</style>