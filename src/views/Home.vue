<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <!--products-list></products-list-->

    
    <!--Login></Login-->

    <!--mini-cart></mini-cart-->
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
//import Login from "@/components/Login.vue";
//import AllProducts from "@/components/AllProducts.vue";

export default {
  name: "Home",
  components: {
    Hero
  },
};
</script>
