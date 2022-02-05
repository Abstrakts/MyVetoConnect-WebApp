<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col cols="12" lg="12" class="text-center">
          <h2 class="mt-5">NOS FONCTIONNALITES:</h2>
          <hr>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="text-center mt-12">
      <v-col cols="12" sm="4" lg="4" class="left-features">
        <v-row>
          <v-col cols="12">
            <v-icon class="features-icon">mdi-dog</v-icon>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum is dolor sit amet</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-icon class="features-icon">mdi-dog</v-icon>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum is dolor sit amet</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-icon class="features-icon">mdi-dog</v-icon>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum is dolor sit amet</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4" lg="4">
        <img src="../assets/img/phone-sample.png" height="90%" />
      </v-col>
      <v-col cols="12" sm="4" lg="4" class="right-features">
        <v-row>
          <v-col cols="12">
            <v-icon class="features-icon">mdi-dog</v-icon>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum is dolor sit amet</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-icon class="features-icon">mdi-dog</v-icon>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum is dolor sit amet</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-icon class="features-icon">mdi-dog</v-icon>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum is dolor sit amet</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: 'features',
    data: () => ({
      isActive: false,
    })
}
</script>

<style>
.right-features {
  text-align: left;
}
.left-features {
  text-align: right;
}
@media (max-width: 920px) {
  .right-features,
  .left-features {
    text-align: center;
  }
}

.features-icon {
  font-size: 3rem !important;
  color: #fff !important;
  padding: 10px;
  background-color: #66c4b6;
  border-radius: 60%;
}
.features {
  background-color: #fff;
}
</style>