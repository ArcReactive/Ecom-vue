<template>
  <div class="products" id="products">
      <Navbar></Navbar>
      <div class="container">
           <h1 class="text-center p-5">Our Products</h1>
          <div class="row">
              
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/img/products/antilop.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">ikea antilop high chair with tray</h5>
                            <p class="card-text">
                                Out of stocks
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/img/products/hemnes.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">hemnes white light brown</h5>
                            <p class="card-text">
                                Out of stocks
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/img/products/kivik.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">ikea kivik dark grey</h5>
                            <p class="card-text">
                            Out of stocks
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>