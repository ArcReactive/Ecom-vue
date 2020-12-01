import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import './assets/app.scss';
//import Vuelidate from 'vuelidate';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import VueFirestore from 'vue-firestore';
import jQuery from 'jquery';
import 'popper.js';
window.$ = window.jQuery = jQuery;

Vue.component('ValidationProvider',ValidationProvider);
Vue.component('ValidationObserver',ValidationObserver);

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.config.productionTip = false;
Vue.component('Navbar', require('./components/Navbar.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
