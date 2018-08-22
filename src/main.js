 /* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { config } from "./firebase/index";
import * as Firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import { ContentLoader, FacebookLoader, CodeLoader, BulletListLoader, InstagramLoader, ListLoader} from 'vue-content-loader'
import { store } from "./store/index";
import alertComponent from "./components/Shared/Alert";
import successMessage from "./components/Shared/Success.vue";
// import VueTruncate from 'vue-truncate-filter';
var VueTruncate = require('vue-truncate-filter');
Vue.component('the-alert',alertComponent);
Vue.component('success', successMessage);
Vue.use(VueTruncate)
// import Limitfilter from "./filters/index";
// Vue.filter('Limit',Limitfilter);
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
      Firebase.initializeApp(config);
      this.$store.dispatch('loadMeetUp')
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$store.dispatch('autoSignIn', user)
        }
      })
  }
})
