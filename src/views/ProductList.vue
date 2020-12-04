<template>
  <div class="products" id="products">
    <Navbar></Navbar>
      <div class="container">
          <h2 class="text-center p-4">Recommented for you</h2>
          <div class="row">
              
              <div class="col-md-4" v-for="product in products">
                  <div class="card product-item">

                        <carousel :perPage="1">
                          <slide v-for="(image, index) in product.images">
                                <img :src="image" class="card-img-top" alt="..." width="250px">
                          </slide>
                        </carousel>
                
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">Rs.{{ product.price }}</h5>

                          </div>
                            <add-to-cart 
                                :image="getImage(product.images)"
                                :p-id="product.id"
                                :price="product.price"
                                :name="product.name">
                            </add-to-cart>
                        </div>
                    </div>
              </div>

          </div>
      </div>
    <mini-cart></mini-cart>
  </div>
</template>

<script>
import AddToCart from '../components/AddToCart.vue';
import {db} from '../firebase';

export default {
  components: { AddToCart },
  name: "ProductsList",
  props: {
    msg: String
  },
data(){
    return {
        products: [],
     
    }
  },
  methods:{
    getImage(images){
      return images[0];
    }
  },
  firestore(){
      return {
        products: db.collection('products'),
      }
  },
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