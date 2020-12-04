import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'popper.js';
window.$ = window.jQuery = jQuery;
import jQuery from 'jquery';
import 'bootstrap';
import './assets/app.scss';
import {fb} from '../src/firebase';
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.use(VueFirestore)

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

Vue.component('Navbar', require('./components/Navbar.vue').default);
// Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('ProductList', require('./views/ProductList.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);


import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;

// import Vuex from 'vuex'
// Vue.use(Vuex);

import store from './store.js';


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


Vue.config.productionTip = false;


const formatData = data => {
  let formatted = [];

  for (const [key, labels] of Object.entries(data)) {
    let tmpObj = {};
    const desc = labels.map(l => {
      return l.description.toLowerCase();
    });

    tmpObj = {
      id: key,
      content: desc.join(" ")
    };

    formatted.push(tmpObj);
  }

  return formatted;
};



let app = '';

fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }

  
  
});


