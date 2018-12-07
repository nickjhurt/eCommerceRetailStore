<template>
    <v-container grid-list-sm>
      <v-subheader> Xbox Titles</v-subheader>
        <v-layout row wrap>
          <v-flex xs3 v-for="(item, index) in xboxGames" v-bind:data="item" v-bind:key="xboxGames[index].id">
            <v-card>
              <v-img adjust-center
                src="https://vignette3.wikia.nocookie.net/gameideas/images/9/98/91S3IicE8BL._SL1500_.jpg/revision/latest?cb=20150907171116"
                height="150px"
                width="100px"
                ></v-img>
              <v-card-text class="px-0"><b>Title:</b> {{item.name}}</v-card-text>
              <v-card-text class="px-0"><b>Price:</b> {{item.price}}</v-card-text>
              <v-card-text class="px-0"><b>Quantity:</b> {{item.quantity}}</v-card-text>
              <v-btn @click="updateTitles(item, xboxGames, index)"  small>Purchase</v-btn>
            </v-card>
          </v-flex>
        </v-layout><br/><br/><br/>
      <v-subheader> Playstation Titles </v-subheader>
        <v-layout row wrap>
          <v-flex xs3 v-for="(item, index) in playstationGames" v-bind:data="item" v-bind:key="playstationGames[index].id">
            <v-card>
              <v-img
                src="https://www.gameshome.com.sg/wp-content/uploads/2017/07/ps4_cover_template_by_penelopegothic-d9lwkwe.png.jpeg"
                height="150px"
                width="100px"
                ></v-img>
              <v-card-text class="px-0"><b>Title:</b> {{item.name}}</v-card-text>
              <v-card-text class="px-0"><b>Price:</b> {{item.price}}</v-card-text>
              <v-card-text class="px-0"><b>Quantity:</b> {{item.quantity}}</v-card-text>
              <v-btn @click="updateTitles(item, playstationGames)"  small>Purchase</v-btn>
            </v-card>
          </v-flex>
        </v-layout><br/><br/><br/>
      <v-subheader> Switch Titles </v-subheader>
         <v-layout row wrap>
          <v-flex xs3 v-for="(item, index) in switchGames" v-bind:data="item" v-bind:key="switchGames[index].id">
            <v-card>
              <v-img
                src="http://pre13.deviantart.net/0b7b/th/pre/i/2017/071/2/a/nintendo_switch_box_template_with_spine_shade_by_goldmetalsonic-db20orq.png"
                height="150px"
                width="100px"
                ></v-img>
              <v-card-text class="px-0"><b>Title:</b> {{item.name}}</v-card-text>
              <v-card-text class="px-0"><b>Price:</b> {{item.price}}</v-card-text>
              <v-card-text class="px-0"><b>Quantity:</b> {{item.quantity}}</v-card-text>
              <v-btn @click="updateTitles(item, switchGames)" small>Purchase</v-btn>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>
 
<script>
//import firebase from 'firebase'
//var database = firebase.database();
import {db} from '../firebase';
import {user} from '../main';
export default {

  data() {
    return {
      titlePurchase: {
        name: '',
        price: '',
        store: ''
      }
    }
  },
  methods: {
    selectedStore() {
      this.$router.push({
        name: 'Store'
      });
    },
    addTitle() {
      this.$firebaseRefs.userName.purchases.push({
        name: this.titlePurchase.name,
        price: this.titlePurchase.price,
        store: this.titlePurchase.store
      })
      this.titlePurchase.name = '';
      this.titlePurchase.price = '';
      this.titlePurchase.store = '';
      alert("Successfully added")
    },
    updateTitles(item) {
      var temp = item.id
      /* eslint-disable */
      console.log(item);
      var itemNum = item.quantity;
      var itemRef = db.ref(`Xbox/${item['.key']}`);
      item.quantity = item.quantity-1;
      if(itemNum < 1) {
        alert("This title is currently out of stock.");
      }
      else {
        itemRef.update({
          "quantity": (itemNum-1)
        })
        alert(item.name + " quantity is now " + item.quantity);
      }

    },
    /*updateUserPurchases(user) {
      if (user != null) {
        return;

      }

    }*/
  },
  firebase: {
    //xboxGames: database.ref('Xbox').equalTo('GameShop'),
    xboxGames: db.ref('Xbox'),
    playstationGames: db.ref('Playstation'),
    switchGames: db.ref('Switch'),
    //userName: userRef.once('name')
    //playstationGames: this.database.ref('Playstation').equalTo('GameShop'),
    //playstationGames: this.playstationRef.equalTo('GameShop'),
    //switchGames: this.database.ref('Switch').equalTo('GameShop')
    //switchGames: this.switchRef.equalTo('GameShop')
  }
}
</script>