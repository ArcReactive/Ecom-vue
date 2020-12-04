<template>
  <div class="hero">
    <Navbar></Navbar>
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        
        <div class="col-md-5">
          <img src="../assets/img/products/product.jpg" alt="" width="240px" />
          <h3>Contact us</h3>
          <p>HotLine - 077-211-2112</p>
          <!--div>
            <button @click="goToAbout" class="btn custom-btn btn-outline-primary mr-4">
            About Us
            </button>
          </div-->
          &nbsp;
          <div>
            <a href="https://www.facebook.com/ikeasrilanka/">
              <img src="../assets/img/svg/facebook (1).svg" width="50" />
            </a>
            &nbsp;
            <a href="https://www.instagram.com">
              <img src="../assets/img/svg/instagram (1).svg" width="50" />
            </a>
            &nbsp;
            <a href="https://www.whatsapp.com">
              <img src="../assets/img/svg/whatsapp.svg" width="50" />
            </a>
            &nbsp;
            <a href="https://www.twitter.com">
              <img src="../assets/img/svg/twitter (1).svg" width="50" />
            </a>
            &nbsp;
            <a href="https://lk.linkedin.com">
              <img src="../assets/img/svg/linkedin (1).svg" width="50" />
            </a>
          </div>
        </div>
        <div class="col-md-5">
          
          <div class="hero-content p-3 mb-2 bg-primary text-white">
            <h1 class="hero-title">Team will answer all your questions.</h1>
            <p>
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Full name"
                v-model="name"
              />
            </p>
            <p>
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </p>
            <p>
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your message here" rows="3" v-model="message"></textarea>
            </p>
            <p>
              <button class="btn custom-btn btn btn-light col-md-5" @click="SendDetails">Send</button>
            </p>
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
    msg: String,
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
    };
  },
  methods: {
    SendDetails: function(){
      this.name = null,
      this.email = null,
      this.message = null
    }
  }
};
</script>

<style scoped lang="scss">
.hero {
  padding-top: 7rem;
  width: 100%;
  height: 500px;
  text-align: left;
}
</style>