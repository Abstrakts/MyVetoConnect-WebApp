<template>
  <div class="player">
    <v-container class="mt-12">
      <v-row class="mt-5">
        <v-col cols="3">
          <v-card class="mx-auto" outlined>
            <div class="sepp">
              <h4 class="sepp-title py-4 px-4">Profil de {{animal.name}}</h4>
            </div>
            <v-row class="text-center">
              <v-col cols="12">
                <v-avatar tile class="ml-2 mb-2 animal-picture" width="150px" height="150px">
                  <img :src="animal.picture" alt="John" />
                </v-avatar>
              </v-col>
              <hr />
              <v-col cols="12">
                <VueQrcode :value="animal.qrcode" />
              </v-col>
              <hr />
              <v-col cols="12">
                <v-btn icon>
                  <v-icon class="animal-profil-icon">mdi-note</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon class="animal-profil-icon">mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click="removeAnimal()">
                  <v-icon class="animal-profil-icon">mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="mx-auto mt-5" outlined v-if="user.veterinary">
            <div class="sepp">
              <h4 class="sepp-title py-4 px-4">Veterinaire attitré :</h4>
            </div>
            <v-row>
              <v-col class="text-center">
                <v-avatar width="80px" height="80px">
                  <img :src="animal.veterinary_company_logo" />
                </v-avatar>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <h4>{{animal.veterinary_company_name}}</h4>
                <br />
                <p>Tél: {{animal.veterinary_company_phone}}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <h4>Adresse :</h4>
                <p>{{ animal.veterinary_company_street }} ({{ animal.veterinary_company_address_complement }})</p>
                <p>{{ animal.veterinary_company_zip }} - {{ animal.veterinary_company_city }}</p>
                <p>{{ animal.veterinary_company_country }}</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="9">
          <v-card class="mx-auto" outlined>
            <div class="sepp">
              <h4 class="sepp-title py-4 px-4">Fiche de suivi :</h4>
            </div>
            <v-row class="mx-1">
              <v-col cols="6">
                <h5 class="mb-5">
                  <v-icon>mdi-book-open-outline</v-icon>Informations générales :
                </h5>
                <v-simple-table>
                  <tbody>
                    <tr>
                      <td>Nom de l'animal :</td>
                      <td>{{ animal.name }}</td>
                    </tr>
                    <tr>
                      <td>Type :</td>
                      <td>{{ animal.type }}</td>
                    </tr>
                    <tr>
                      <td>Race :</td>
                      <td>{{ animal.race }}</td>
                    </tr>
                    <tr>
                      <td>Couleur :</td>
                      <td>{{ animal.color }}</td>
                    </tr>
                    <tr>
                      <td>Couleur des yeux :</td>
                      <td>{{ animal.eye_color }}</td>
                    </tr>
                    <tr>
                      <td>Taille :</td>
                      <td>{{ animal.particularities }}</td>
                    </tr>
                    <tr>
                      <td>Sexe :</td>
                      <td>{{ animal.sexe }}</td>
                    </tr>
                    <tr>
                      <td>Sterilisé(e) :</td>
                      <td v-if="animal.sterillised == false">Non</td>
                      <td v-else>Oui</td>
                    </tr>
                    <tr>
                      <td>Numéro de puce :</td>
                      <td>{{ animal.chip }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
              <v-col cols="6">
                <h5 class="mb-5">
                  <v-icon>mdi-doctor</v-icon>Suivi vétérinaire :
                </h5>
                <v-simple-table>
                  <tbody>
                    <tr>
                      <td>Poids :</td>
                      <td>{{ animal.weight }} kg</td>
                    </tr>
                    <tr>
                      <td>Taille :</td>
                      <td>{{ animal.size }} cm</td>
                    </tr>
                    <tr>
                      <td>Traitements :</td>
                      <td>{{ animal.treatments }}</td>
                    </tr>
                    <tr>
                      <td>Allérgies :</td>
                      <td>{{ animal.allergies }}</td>
                    </tr>
                    <tr>
                      <td>Vaccins :</td>
                      <td>{{ animal.vaccines }}</td>
                    </tr>
                    <tr>
                      <td>Commentaire :</td>
                      <td>{{ animal.comment }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-card>
          <v-card outlined class="mt-5">
            <v-btn small color="info" class="mx-5 my-5">
              <v-icon>mdi-download</v-icon>Télécharger la fiche
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="sepp"></div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import Loading from "vue-loading-overlay";

export default {
  middleware: "isAuthenticated",
  data: () => ({
    user: [],
    connect: [],
    animal: [],
    isLoading: false
  }),
  components: {
    VueQrcode,
    Loading
  },
  async created() {
    if (Cookies.get("JWT")) {
      await this.$axios
        .get("user/me")
        .then(response => (this.user = response.data));
      await this.$axios
        .get(`user/me/animal/${this.$route.params.id}/sheet`)
        .then(response => (this.animal = response.data));
    }
  },
  methods: {
    removeAnimal() {
      this.$axios.post(`/user/me/animal/${this.animal.qrcode}/remove`);
      this.isLoading = true;
      this.$router.push("/profil");
    }
  }
};
</script>

<style scoped>
.animal-picture {
  border-radius: 60%;
  border: 5px solid #eee;
}
.sepp-title {
  color: #fff;
}
.animal-profil-icon {
  color: #66c4b6 !important;
}
</style>
