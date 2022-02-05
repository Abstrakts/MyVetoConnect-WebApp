<template>
  <div class="profil" v-if="user.principalAddress">
    <v-row class="mt-5">
      <v-col cols="12" sm="4">
        <v-card class="mx-auto" outlined>
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

              <v-tooltip top v-if="!user.veterinary">
                <template v-slot:activator="{ on }">
                  <v-btn icon color="info" to="/veterinary/createCompany">
                    <v-icon v-on="on">mdi-hospital-box-outline</v-icon>
                  </v-btn>
                </template>
                <span>Je suis vétérinaire</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="mx-auto mt-5" outlined v-if="user.veterinary">
          <div class="sepp">
            <h4 class="sepp-title py-4 px-4">Mon cabinet :</h4>
          </div>
          <v-row>
            <v-col class="text-center">
              <v-avatar width="80px" height="80px">
                <img :src="myCompany.logo" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <h4>{{myCompany.company_name}}</h4>
              <h4>Gérant : {{myCompany.boss_name}}</h4>
              <p>{{myCompany.email}}</p>
              <br />
              <p>Tél: {{myCompany.phone}}</p>
              <p>Tél: {{myCompany.siret}}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <h4>Adresse :</h4>
              <p>{{ myCompany.street }} ({{ myCompany.adress_complement }})</p>
              <p>{{ myCompany.zip }} - {{ myCompany.city }}</p>
              <p>{{ myCompany.country }}</p>


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

              <v-tooltip top v-if="!user.veterinary">
                <template v-slot:activator="{ on }">
                  <v-btn icon color="info" to="/veterinary/createCompany">
                    <v-icon v-on="on">mdi-hospital-box-outline</v-icon>
                  </v-btn>
                </template>
                <span>Je suis vétérinaire</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-card class="mx-auto" outlined>
          <div class="sepp px-5">
            <v-row>
              <v-col>
                <h4 class="sepp-title">Mes animaux :</h4>
              </v-col>
              <v-col class="text-right">
                <v-btn color="info" small @click="animalBlock = true">
                  <v-icon>mdi-pencil-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <v-col class="px-6">
            <v-row>
              <v-expansion-panels>
                <v-expansion-panel v-for="animal in animals">
                  <v-expansion-panel-header>Nom : {{ animal.name }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="6">
                        <v-avatar size="100">
                          <img :src="animal.picture" />
                        </v-avatar>
                      </v-col>
                      <v-col cols="6" class="text-right">
                        <VueQrcode :value="animal.qrcode" />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <p>
                          <b>Particularité :</b>
                          {{ animal.particularities }}
                        </p>
                        <v-simple-table fixed-header height="300px">
                          <template v-slot:default>
                            <tbody>
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
                                <td>{{ animal.eyeColor }}</td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                        <v-avatar class="animal-icon" size="60">
                          <v-tooltip top>
                            <template v-slot:activator="{ on }">
                              <img
                                :src="require(`../assets/img/icons/${animal.type}.png`)"
                                v-on="on"
                              />
                            </template>
                            <span>{{animal.type}}</span>
                          </v-tooltip>
                        </v-avatar>
                        <v-avatar class="sexe-icon" size="60">
                          <v-tooltip top>
                            <template v-slot:activator="{ on }">
                              <v-icon
                                class="female-icon"
                                v-if="animal.sexe == 'femelle'"
                                v-on="on"
                              >mdi-gender-female</v-icon>
                              <v-icon class="male-icon" v-else v-on="on">mdi-gender-male</v-icon>
                            </template>
                            <span v-if="animal.sexe == 'male'">Mâle</span>
                            <span v-else>Femelle</span>
                          </v-tooltip>
                        </v-avatar>
                        <v-avatar class="sterillised-icon" size="60">
                          <v-tooltip top>
                            <template v-slot:activator="{ on }">
                              <v-icon
                                class="steril-icon"
                                v-if="animal.sterillised"
                                v-on="on"
                              >mdi-check</v-icon>
                              <v-icon class="steril-icon" v-else v-on="on">mdi-close</v-icon>
                            </template>
                            <span v-if="animal.sterillised">Sterlisé(e)</span>
                            <span v-else>Non sterilisé(e)</span>
                          </v-tooltip>
                        </v-avatar>
                        <v-btn
                          color="info float-right"
                          :to="`animal/${animal.qrcode}`"
                        >voir l'animal</v-btn>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
          </v-col>
        </v-card>
        <v-card class="mt-2 mx-auto" outlined v-if="animalBlock">
          <div class="sepp px-5">
            <v-row>
              <v-col>
                <h4 class="sepp-title">Ajouter un animal :</h4>
              </v-col>
              <v-col class="text-right">
                <v-btn color="info" small>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <v-row>
            <v-col class="mx-5">
              <form method="post" @submit="addAnimal()">
                <v-col cols="12" class="py-10 px-10">
                  <v-text-field label="Nom de l'animal" v-model="newAnimal.name" required></v-text-field>
                  <v-select :items="animalType" v-model="newAnimal.type" label="Espèce"></v-select>
                  <v-text-field label="Race" v-model="newAnimal.race"></v-text-field>
                  <v-select :items="animalColor" label="Couleur" v-model="newAnimal.color"></v-select>
                  <v-select
                    :items="eyesColor"
                    label="Couleur des yeux"
                    v-model="newAnimal.eyeColor"
                  ></v-select>
                  <v-radio-group v-model="newAnimal.sexe" :mandatory="false">
                    Sexe :
                    <v-row>
                      <v-col>
                        <v-radio label="Male" value="male"></v-radio>
                      </v-col>
                      <v-col>
                        <v-radio label="Femelle" value="femelle"></v-radio>
                      </v-col>
                    </v-row>
                  </v-radio-group>

                  <v-radio-group v-model="newAnimal.sterillised" :mandatory="false">
                    Sterilisé :
                    <v-row>
                      <v-col>
                        <v-radio label="Oui" value="1"></v-radio>
                      </v-col>

                      <v-col>
                        <v-radio label="Non" value="0"></v-radio>
                      </v-col>
                    </v-row>
                  </v-radio-group>

                  <v-file-input multiple label="Ajouter une photo" v-model="newAnimal.photo"></v-file-input>

                  <v-btn type="submit">Envoyer</v-btn>
                </v-col>
              </form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";
import Cookies from "js-cookie";

export default {
  name: "profil",
  middleware: "isAuthenticated",
  components: {
    VueQrcode
  },
  data: () => ({
    animalBlock: false,
    error: false,
    newAnimal: {
      photo: null,
      name: null,
      race: null,
      sexe: null,
      sterillised: null,
      particularities: null,
      type: null,
      color: null,
      eyeColor: null,
      chip: null,
      birthday: null
    },
    user: [],
    connect: [],
    animals: [],
    myCompany: [],
    profilMenu: [{ item: "mdi-settings" }, { item: "mdi-bell" }],
    eyesColor: [
      "brun",
      "marron",
      "noir",
      "vert",
      "bleu",
      "rouge",
      "vairon",
      "autre"
    ],
    animalColor: [
      "brun",
      "fauve",
      "noir",
      "blanc",
      "feu",
      "gris",
      "bleu",
      "blanc",
      "beige",
      "écaille de tortue",
      "autre"
    ],
    animalType: [
      "chien",
      "chat",
      "oiseau",
      "rongeur",
      "lézard",
      "serpent",
      "équidé",
      "poisson",
      "amphibien",
      "autre"
    ]
  }),
  created() {
    if (Cookies.get("JWT")) {
      this.$axios.get("user/me").then(response => (this.user = response.data));
      this.$axios
        .get("user/me/animals")
        .then(response => (this.animals = response.data));
      this.$axios
        .get("/user/me/company")
        .then(response => (this.myCompany = response.data));
    }
  },
  mounted() {},
  methods: {
    async addAnimal() {
      await this.$axios.post("user/me/addanimal", {
        name: this.newAnimal.name,
        photo: this.newAnimal.photo,
        race: this.newAnimal.race,
        sexe: this.newAnimal.sexe,
        sterillised: this.newAnimal.sterillised,
        particularities: this.newAnimal.particularities,
        type: this.newAnimal.type,
        color: this.newAnimal.color,
        eye_color: this.newAnimal.eyeColor,
        chip: this.newAnimal.chip,
        birthday: this.newAnimal.birthday
      });
    }
  }
};
</script>

<style>
.user-address {
  list-style: none;
}
.sepp-title {
  color: #fff;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000;
}
.animal-icon {
  background-color: #eee;
  padding: 5px !important;
}
.female-icon {
  font-size: 50px !important;
  color: #fff !important;
  background-color: #ff70ac;
}
.male-icon {
  font-size: 50px !important;
  color: #fff !important;
  background-color: #49c5ff;
}
.steril-icon {
  font-size: 50px !important;
  color: #313131;
  background-color: #eee;
}
</style>