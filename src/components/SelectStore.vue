<template>
    <v-container>
        <v-card>
       
        <v-img
          src="http://playingdaily.pl/wp-content/uploads/2015/01/video_games_shop.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title shop-title>
          <div>
            <h3 class="headline mb-0">View Stores </h3>
            <div>Purchase your favorite assortment of games via Store location</div>
          </div>
        </v-card-title>

        <v-layout align-center>
            <v-card-actions>
                <v-btn block @click="selectedStore()" color="orange" large>Tal-Mart</v-btn>
                <v-btn block @click="selectedStore()" color="orange" large>Great Buy</v-btn>
                <v-btn block @click="selectedStore()" color="orange" large>Game Shop</v-btn>
            </v-card-actions>
        </v-layout>

        
      </v-card>
        <br/><br/>
    </v-container>
</template>
 
<script>

export default {
  data () {
    return {
        //
    };
  },
  props: {
    database: {required: true}
  },
  methods: {
    selectedStore() {
      this.$router.push({
        name: 'Shop'
      });
    },
  },
}
</script>