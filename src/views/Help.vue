<template>
    <div class="hero">
      <Navbar></Navbar>
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content p-3 mb-2 bg-primary text-white" >
                <h1 class="hero-title">
                  How can we help you today?
                </h1>
                <p>
                  <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="ex: order"
                  aria-label="Search"
                />
                </p>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">

                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Help",
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
