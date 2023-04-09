<template>
       <div class="row">
        <div v-for="(item,index) in items" :key="index" class="card" style="width:18rem;height:25rem; margin:0.3rem; overflow:scroll;">
            <img :src="item.photo" alt="jjj" class="card-img-top" style="height:13rem; width:100%;object-fit:cover;">
            <a @click="addToCart(item)" class="btn btn-warning" style="width:80px;margin-top:-17px;margin-left: 10px;">+ Add</a>
            <div class="card-body">
                <h3 class="card-text">{{item.title}}</h3>
                <p class="card-text" style="font-size:14px">{{item.description}}</p>
                <p class="card-text">${{item.price}}</p>
            </div>
        </div>

        
      </div>

</template>

<script>
export default {
  props:["items"],
  methods:{
    addToCart(item){
        this.$emit('newItemAdded', item)
    }
  }
}
</script>

<style scoped>

</style>