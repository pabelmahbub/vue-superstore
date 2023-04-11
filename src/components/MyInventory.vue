<template>
       <div v-if="!loading" class="row">
        <div v-for="(item,index) in items" :key="index" class="card" style="width:18rem;height:25rem; margin:0.3rem; overflow:scroll;">
            <router-link  :to="{path: '/item/' + item.id}">
               <img :src="item.photo" alt="jjj" class="card-img-top" style="height:13rem; width:100%;object-fit:cover;">
            
            <a @click="addToCart(item)" class="btn btn-warning" style="width:80px;margin-top:-17px;margin-left: 10px;">+ Add</a>
            <div class="card-body">
                <h3 class="card-text">{{item.title}}</h3>
                <p class="card-text" style="font-size:14px">{{item.description}}</p>
                <p class="card-text">${{item.price}}</p>
            </div>

        </router-link>
        </div>
      </div>
      <h2 v-else>Loading...</h2>

</template>

<script>
import axios from 'axios';
export default {
    data(){
       return {
        loading: true,
        items:[]
       }
    },
    mounted(){
        this.fetchInventory()
    },
    methods: {
        addToCart(item){
            this.$emit('newItemAdded', item)
        },
        fetchInventory(){
            var self = this;
            axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
                //console.log(res);
                setTimeout(function(){
                    self.items = res.data
                    self.loading = false
                },1000)
                
                    //self.items = res.data
                    //self.loading = false
            })
        }
    }
}
</script>

<style scoped>

</style>