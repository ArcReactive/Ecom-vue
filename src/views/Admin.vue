<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
        </a>
            
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                     <a href="#">IKEA Sri Lanka</a>
                    <div id="close-sidebar" @click="closeMenu">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="user.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">
                            <strong>Gamith Kisal</strong>
                        </span>
                        <span class="user-role">{{email}}</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>
                        <li>
                       
                            <router-link to="/admin/overview">
                                <i class="fa fa-chart-line"></i>
                                <span>Overview</span>
                            </router-link>

                        </li>
            
                        <li>
                            <router-link to="/admin/products">
                                <i class="fab fa-amazon"></i>
                                <span>Products</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/orders">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Orders</span>
                            </router-link>
                        </li>
                        <li>
                             <router-link to="/admin/profile">
                                 <i class="fa fa-user"></i>
                                <span>profile</span>
                             </router-link>
                        </li>
                         <li>
                            <a href="#" @click="logout()">
                                 <i class="fa fa-power-off"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
        
        </nav>
        <!-- page-content  -->
        <main class="page-content pt-2">
            <!-- <div id="overlay" class="overlay"></div> -->
            <router-view />
          
        </main>
        <!-- page-content" -->
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import Hero from "@/components/Hero.vue";
import {fb} from '../firebase';


export default {
  name: "admin",
  data(){

      return{
          name: null,
          email: null,

      }

  },
  components: {
        //  Hero
  },
  methods:{
      closeMenu(){
            // $(".page-wrapper").toggleClass("toggled");
      },
         logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/loginn');
          })
          .catch((err) =>{
              console.log(err);
          });
      }
  
  },
  created(){

      var user = fb.auth().currentUser;
      this.email = user.email;

  }
};
</script>

<style>
</style>

