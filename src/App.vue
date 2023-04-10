<template>
  <router-view />
  <router-link  :to="{ name: 'smallOne' }">Compo1</router-link> |
  <router-link  :to="{ name: 'smallTwo' }">Compo2</router-link> 
  <div id="#app">

    <AppNavbar @search="search"/>
    <!-- <p style="font-weight:bold"><span style="color:red">{{items}}</span>,</p>
    <p style="font-weight:bold"><span style="color:red">{{cart}}</span>,</p> -->

  <div class="container">
    <button @click="$router.go(1)">GO 1 step</button>
    <button @click="$router.go(-1)">Back 1 step</button>
    <button @click=" $router.push('/user23')">user23</button>
    <button @click=" $router.push('/user/1')">user dynamic</button>

   
    <div class="row">
       <div class="col-sm-9">
          <MyInventory @newItemAdded="addCartItem" :items="items" />
        </div>

        <div class="col-sm-3">
          <MyCart @itemRemoved="removeItem" :items="cart"/>
        </div>
     </div>

  </div>

  </div>
  
</template>

<script>
import AppNavbar from './components/AppNavbar';
import MyCart from './components/MyCart';
import MyInventory from './components/MyInventory';
import data from './data'
export default {
  components: {
    AppNavbar: AppNavbar,
    MyCart: MyCart,
    MyInventory: MyInventory
  },
  data(){
    return{
      items:[],
      cart:[
        // { id:0, title:'test', photo:'http://dummyimage.com/175x287.png/cc0000/ffffff', price: "3.9",},
      ]
    }
  },
  mounted(){
    this.items = data;
  },
  methods:{
    search(keyword){
      this.items = data.filter(item=> {
      return item.title.toLowerCase().indexOf(keyword) !== -1
     })
    },
    addCartItem(item){
      this.cart.push(item)
    },
    removeItem(index){
    this.cart.splice(index,1)
  }
  }
  
}
</script>

<style>
.container {
  padding-top: 15px;
}
.router-link-exact-active {
  color: red;
}
</style>
