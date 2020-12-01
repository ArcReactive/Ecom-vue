<template>
  <div class="chekout">
       <Navbar></Navbar>

        <div class="container mt-5 pt-5">

            <div class="row">

                <div class="col-md-8">
                    <h4 class="py-4">Checkout page</h4>
                    <ul>
                        <li v-for="item in this.$store.state.cart" class="media" v-bind:key="item">
                        <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}
                                <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>
                            </h5>
                            <p class="mt-0">Rs.{{item.productPrice}}.00</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                        </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <p>
                        Total Price :Rs.{{ this.$store.getters.totalPrice}}.00
                    </p>
                  
        
                    <form>
                        <card class='stripe-card' :class='{ complete }'
                        stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
                        :options='stripeOptions'
                        @change='complete = $event.complete'
                        />

                        <!-- <button class='pay-with-stripe btn btn-primary mt-4' @click='pay' :disabled='!complete'>Pay with credit card</button> -->
                        <button class='pay-with-stripe btn btn-primary mt-4' @click='pay'>Pay with credit card</button>
                    
                    </form>
                     
                </div>
               
            </div>
            <products-list></products-list>
        </div>
  </div>
</template>

<!--script>
// import stripee from 'vue-stripe-elements-plus';
import axios from 'axios';
var stripe = Stripe('pk_test_3yyWicMGKdLdRD28kHM3ANkX00vOa4k2B3');
export default {
    data () {
    return {
      
       sessionId:''
    }
  },
  // components: { Card },
  methods: {
     pay(){
          // data = {id:10,id:10}
          let data = this.$store.state.cart.map(item => ({ [item.productId] : item.productQuantity}));
          data = Object.assign({}, ...data);
          axios.get('https://us-central1-vue-shop-84d27.cloudfunctions.net/CheckoutSession', {
              params: {
                  products : data
              }
          })
            .then(response => {
                this.sessionId = response.data
                console.log(response.data);
                 stripe.redirectToCheckout({
               
                    sessionId: this.sessionId.id
                    }).then(function (result) {
                    
                    });
            })
            .catch(error => {
                console.log(error);
            });
      }
  
  }
}
</script-->



<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
