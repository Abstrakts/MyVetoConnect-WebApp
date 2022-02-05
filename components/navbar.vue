<template>
  <div class="navbar">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      loader="spinner"
      color="#66c4b6"
      background-color="#000"
    ></loading>

    <v-toolbar class="navbar-bg" flat light>
      <a href="/">
        <v-toolbar-title class="navbar-title ml-5">
          <v-icon class="navbar-icon">mdi-cat</v-icon>MyVetoConnect
        </v-toolbar-title>
      </a>
      <v-spacer></v-spacer>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" class="ma-2" v-on="on" text>
            <v-icon class="menu-icon">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in menu" :key="i" :to="item.link" link>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
          <v-btn v-if="!user" color="info" dark depressed @click="sheet = !sheet" link>S'enregistrer</v-btn>
          <v-btn v-if="user" color="info" dark depressed @click="logout()" text>Deconnexion</v-btn>
        </v-list>
      </v-menu>

      <v-toolbar-items class="hidden-sm-and-down mr-12">
        <v-btn
          class="navbar-items"
          v-for="(item, i) in menu"
          :key="i"
          :to="item.link"
          text
        >{{ item.title }}</v-btn>

        <v-btn
          v-if="!user"
          class="items"
          color="info"
          dark
          depressed
          @click="sheet = !sheet"
        >S'enregistrer</v-btn>
        <v-btn v-if="user" class="items" color="info" dark depressed text to="/profil">Profil</v-btn>
        <v-btn v-if="user" class="items" color="info" dark depressed @click="logout()">Deconnexion</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="sheet text-center" height="300px">
          <h3 class="py-5">Connexion / inscription</h3>
          <small
            class="px-5"
          >Si ne possedez pas encore de comptes, celui-ci sera crée automatiquement.</small>
          <div class="py-3">
            <v-btn class="mt-5 mr-2 ml-2" @click="sheet = !sheet" x-large>
              <GoogleLogin class="socialLoginButton" :params="params" :onSuccess="onSuccess">
                <img src="../assets/img/google-icon.png" width="30px" class="mr-2" />Google
              </GoogleLogin>
            </v-btn>

            <v-btn class="mt-5 mr-2 ml-2" @click="login()" height="50px">
              <div class="socialLoginButton" :params="params">
                <img src="../assets/img/fb-icon.png" width="40px" class="mr-2" />Facebook
              </div>
            </v-btn>
          </div>
          <v-btn class="mt-6" color="info" @click="sheet = !sheet">Fermer</v-btn>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import GoogleLogin from "vue-google-login";
import Cookies from "js-cookie";

export default {
  name: "navbar",
  components: {
    GoogleLogin,
    Loading
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      sheet: false,
      menu: [
        { title: "Accueil", link: "/" },
        { title: "Lien" },
        { title: "Lien" },
        { title: "lien" }
      ],
      params: {
        clientId:
          "937461151809-v8jt5urnuu13imnhi7g78fc09v50veag.apps.googleusercontent.com"
      },
      user: [],
      connect: []
    };
  },
  created() {
    if (Cookies.get("JWT")) {
      this.connect = Cookies.get("JWT");
      this.$axios.get("user/me").then(response => (this.user = response.data));
    } else {
      this.connect = null;
      this.user = null;
    }
  },
  mounted() {
    this.$facebook.init(() => {});
  },
  methods: {
    async login() {
      this.$facebook.login("email").then(async response => {
        const { data } = await this.$axios.post("/connect/facebook", {
          access_token: response.authResponse.accessToken
        });
        await Cookies.set("JWT", data);
        await setTimeout(() => {
          this.$router.go("/");
        }, 500);
        this.isLoading = true;
      });
    },
    async onSuccess(googleUser) {
      const idtoken = await googleUser.getAuthResponse().id_token;
      const { data } = await this.$axios.post("/google", {
        id_token: idtoken
      });
      await Cookies.set("JWT", data);
      await setTimeout(() => {
        this.$router.go("/");
      }, 500);
      this.isLoading = true;
    },
    logout() {
      Cookies.remove("JWT");
      this.$store.commit("setJwt", null);
      setTimeout(() => {
        this.$router.go("/");
      }, 500);

      this.isLoading = true;
    },
    menuItems() {
      return this.menu;
    }
  }
};
</script>

<style>
.sheet {
  border-top: 5px solid #66c4b6 !important;
}
.socialLoginButton {
  justify-content: center;
  align-items: center;
  display: flex;
}
.navbar {
  z-index: 1000;
  position: fixed;
  width: 100%;
  border-bottom: 5px solid #66c4b6;
}
.navbar-title,
.navbar-items,
.navbar-icon {
  color: #00ad9d !important;
}

.items {
  color: #fff !important;
  font-size: 0.7rem !important;
}

.navbar-items {
  font-size: 0.7rem !important;
}

.navbar-icon {
  color: #00ad9d;
  font-size: 30px !important;
}

a {
  text-decoration: none;
}
@media (min-width: 960px) {
  .menu-icon {
    display: none !important;
  }
}
.menu-icon {
  font-size: 2rem !important;
}
.v-application a {
  color: #000 !important;
}
</style>