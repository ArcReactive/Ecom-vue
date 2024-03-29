import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";
import Profile from "../views/Profile.vue";
import {fb} from '../firebase';
import Contact from "../views/ContactUs";
import ProductList from "../views/ProductList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    // a meta field
    meta: { requiresAuth: true },
    children:[
      {
        path: "overview",
        name: "overview",
        component: Overview
      },
      {
        path: "products",
        name: "products",
        component: Products
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "orders",
        name: "orders",
        component: Orders
      }

    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import( "../views/Checkout.vue")
  },
  {
    path: "/help",
    name: "Help",
    component: () =>
      import( "../views/Help.vue")
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: Contact
  },
  {
    path: "/loginn",
    name: "Loginn",
    component: () =>
      import( "../views/Login.vue")
  },
  {
    path: "/productlist",
    name: "ProductsList",
    component: ProductList
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})


export default router;
