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
            <div class="col-md-7">
                <div class="graphic">
                    <img src="../assets/img/svg/world-map_2400.jpg" alt="" width="450px">
                </div>
            </div>
          </div>
        </div>
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
                <div class="graphic">
                    <img src="../assets/img/svg/e-commerce.jpg" alt="" width="450px">
                </div>
            </div>
            <div class="col-md-7">
              <div class="hero-content">
                <h1 class="hero-title">
                  Together, all over the world
                </h1>
                <p>
                  The IKEA Brand unites thousands of co-workers and hundreds of companies with different owners around the world. The retail business is organised in a franchise system with 12 franchisees in 54 markets that – together with the franchisor and other parts of the business – continuously improve and develop the brand.
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
