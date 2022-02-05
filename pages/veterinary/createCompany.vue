<template>
  <v-container class="createCompany mt-12" >
    <v-row class="mt-5">
      <h3>Créer mon entreprise</h3>
    </v-row>
    <v-row>
      <p>Afin que vous puissiez vous enregistrer en temps de cabinet vétérinaire, nous avons besoin de quelques informations :</p>
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
            M'enregister en temps que vétérinaire :
            <form method="post" @submit="addNewCompany()">
              <v-col cols="12" class="py-10 px-10">
                Informations générales :
                <v-file-input label="Ajouter un logo" v-model="addCompany.logo"></v-file-input>
                <v-text-field label="Nom du gérant" v-model="addCompany.bossname"></v-text-field>
                <v-text-field label="Nom du cabinet" required v-model="addCompany.companyName"></v-text-field>
                <v-text-field label="Adresse email du cabinet" required v-model="addCompany.email"></v-text-field>
                <v-text-field label="Téléphone du cabinet" required v-model="addCompany.phone"></v-text-field>
                <v-text-field label="Numéro de siret" required v-model="addCompany.siret"></v-text-field>

                Adresse :
                <v-text-field label="adresse" required v-model="addCompany.principal"></v-text-field>
                <v-text-field label="secondaire" v-model="addCompany.secondary"></v-text-field>
                <v-text-field label="ville" required v-model="addCompany.city"></v-text-field>
                <v-btn type="submit" @click="$router.go({path:'/profil', force: true})">Envoyer</v-btn>
              </v-col>
            </form>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Cookies from "js-cookie";

export default {
    name: 'createEntreprise',
    middleware: "isAuthenticated",
    data: () => ({
    user: [],
    connect: [],
    addCompany: {
        logo: null,
        bossname: null,
        companyName: null,
        email: null,
        phone: null,
        siret: null,
        city: null,
        principal: null,
        secondary: null
    },
    profilMenu: [{ item: "mdi-settings" }, { item: "mdi-bell" }]
  }),
  created() {
    if (Cookies.get("JWT")) {
      this.$axios.get("user/me").then(response => (this.user = response.data));
    }
  },
  methods: {
      async addNewCompany() {
          await this.$axios.post("user/me/addcompany", {
              logo : this.addCompany.logo,
              boss_name : this.addCompany.bossname,
              name: this.addCompany.companyName,
              email: this.addCompany.email,
              phone: this.addCompany.phone,
              siret: this.addCompany.siret,
              city: this.addCompany.city,
              principal: this.addCompany.principal,
              secondary: this.addCompany.secondary
          })
      }
  }
}
</script>

<style>
</style>