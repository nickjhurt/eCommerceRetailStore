<template>
  <v-container>
     <v-card>
       
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title shop-title>
          <div>
            <h3 class="headline mb-0">View Stores </h3>
            <div>Purchase your favorite assortment of games via Store location</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn block @click="selectShop()" target="_blank" color="orange" slot="action">Browse Stores</v-btn>
        </v-card-actions>
      </v-card>
        
      <v-card>
        <v-img
          src="http://wallpapersdsc.net/wp-content/uploads/2015/10/Halo_5_63.jpg"
          aspect-ratio="1.5"
        ></v-img>

        <v-card-title profile-title>
          <div>
            <h3 class="headline mb-0">Profile</h3>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn block @click="viewProfile()" target="_blank" color="orange" slot="action"><v-icon>add</v-icon>View Account</v-btn>
        </v-card-actions>
      </v-card>
      <v-card>
        <v-img
          src="https://influitive.blob.core.windows.net/media/2015/03/what-is-an-online-community-anyway-FB.jpg"
          aspect-ratio="1.5"
        ></v-img>

        <v-card-title community-title>
          <div>
            <h3 class="headline mb-0">Community</h3>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn block href="/components/AddCustomer.vue" target="_blank" color="orange" slot="action"><v-icon>add</v-icon>Explore the Community</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
</template>

<script>

export default {
  data () {
    return {
        //
    };
  },
  methods: {
    selectShop() {
      this.$router.push({
        name: 'SelectStore'
      });
    },
    viewProfile() {
      this.$router.push({
        name: 'Profile'
      });
    }
  }
}
</script>

<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}
 
.btn-primary {
  margin-right: 5px;
}
 
.container-fluid {
  text-align: center;
}
</style>

