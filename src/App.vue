<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Game</span>
        <span class="font-weight-light"> STORE DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-flex justify-content="right">
              <v-toolbar-side-icon @click="logout">Logout</v-toolbar-side-icon>
        </v-flex>

      </v-toolbar>

    <v-content>
      <transition>
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
  import firebase from './firebase.js';
  //import {db} from './main.js';
  export default {
    name: "App",
    components: {},
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leae-to {
  opacity: 0;
  transition: opacity 0.3s;
}
</style>
      