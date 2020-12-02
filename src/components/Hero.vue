<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  IKEA Sri Lanka for Customers
                </h1>
                <p>
                  “Oftentimes consumers, clients, and customers are not just buying a product, they are buying an experience, a feeling, a perception, a person(YOU) and ultimately the IKEA BRAND”
                </p>
                <div class="hero-btn mt-5">
                  <button class="btn custom-btn btn-info mr-4" @click="goToAbout">Explore</button>
                  <button class="btn custom-btn btn-outline-secondary">Products</button>
                </div>
                <!--div class="hero-btn mt-5">
                  <button class="btn custom-btn btn-info mr-4" @click="goToLogin">Login Or Signup</button>
                </div-->
              </div>
            </div>
            <div class="col-md-5">
                <div class="graphic">
                    <img src="../assets/img/svg/final.jpg" alt="" width="450px">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  },
  methods: {
    goToAbout: function(){
      this.$router.push("/about")
    },
    // goToLogin: function(){
    //   this.$router.push("/loginn")
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only //data-toggle="modal" data-target="#login"-->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }



</style>