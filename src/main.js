import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
//import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
//import firebase from 'firebase'
import firebase from './firebase.js'
import VueFire from 'vuefire'
import HomePage from './components/HomePage.vue'
import Profile from './components/Profile.vue'
import SelectStore from './components/SelectStore.vue'
import Shop from './components/Shop.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import VueRouter from 'vue-router';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueFire);

Vue.config.productionTip = false

/*const config = {
  apiKey: "AIzaSyCVchsywpcXArTKSIID5wx4bCXruC6RVnw",
  authDomain: "gamestore-ebe8b.firebaseapp.com",
  databaseURL: "https://gamestore-ebe8b.firebaseio.com",
  projectId: "gamestore-ebe8b",
  storageBucket: "gamestore-ebe8b.appspot.com",
  messagingSenderId: "171481696054"
};*/

let app = '';

//firebase.initializeApp(config)
//export const db = firebase.database()
/*export const xboxRef = db.ref('Xbox')
export const playstationRef = db.ref('Playstation')
export const switchRef = db.ref('Switch')*/

const appRoutes = [
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/store',
    component: SelectStore,
    name: 'SelectStore',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/shop',
    component: Shop,
    name: 'Shop',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path:'/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    component: HomePage,
    name: 'Home',
    meta: {
      requiresAuth: true
    }
  }
];

const appRouter = new VueRouter({
  routes: appRoutes,
  mode: 'history'
});
  /* eslint-disable */
appRouter.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.log(currentUser)
  if(requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      render: h => h(App),
      router: appRouter
    }).$mount('#app');
  }
});

export default user = firebase.auth().currentUser;