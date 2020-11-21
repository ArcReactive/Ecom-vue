<template>
  <div class="hero">
      <Navbar></Navbar>
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="../assets/img/products/product.jpg" alt="" width="400" />
        </div>
        <div class="col-md-6">
          <h3>Contact us</h3>
          <p>HotLine - 077-211-2112</p>
          <button @click="goToAbout" class="btn custom-btn btn-outline-primary mr-4">
            About Us
          </button>
          <div>
              <a class="btn btn-outline-info border-1 mx-1 my-2 my-sm-2" href="https://twitter.com/">
                <i class="fab fa-twitter-square"></i>
              </a>
              <a class="btn btn-outline-info border-1 mx-1 my-2 my-sm-1" href="https://www.facebook.com/">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a class="btn btn-outline-info border-1 mx-1 my-2 my-sm-1" href="https://www.instagram.com/">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="btn btn-outline-info border-1 mx-1 my-2 my-sm-1" href="https://www.whatsapp.com/">
                <i class="fab fa-whatsapp-square"></i>
              </a>
              <a class="btn btn-outline-info border-1 mx-1 my-2 my-sm-1" href="https://lk.linkedin.com/">
                <i class="fab fa-linkedin"></i>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  props: {
    msg: String
  },

  methods: {
    goToAbout: function(){
      this.$router.push("/about")
    }
  }
};
</script>

<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }



</style>