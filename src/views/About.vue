<template>
    <div class="hero">
      <Navbar></Navbar>
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  About Us
                </h1>
                <p>
                  One brand, many companies, and many, many people – that’s us in a nutshell. Spread all over the world, we have a passion for home furnishing and an inspiring shared vision: to create a better everyday life for the many people. This, together with our straightforward business idea, shared values, and a culture based on the spirit of togetherness, guides us in everything we do.
                </p>
              </div>
            </div>
            <div class="col-md-5">
                <div class="graphic">
                    <img src="../assets/img/svg/world-map_2400.jpg" alt="" width="450px">
                </div>
            </div>
          </div>
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
                <div class="graphic">
                    <img src="../assets/img/svg/asia-premier-ecommerce-customer-support-02-800x531-1.jpg" alt="" width="450px">
                </div>
            </div>
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Take a look at the year that passed
                </h1>
                <p>                 
                  People all over the world found new purpose for their homes as they changed their living rooms into offices and rediscovered life at home.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AboutUs",
  props: {
    msg: String
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
