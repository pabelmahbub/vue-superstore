<template>
          <ul class="list-group">
            <li class="list-group-item">
                <span class="item-name">Cart: </span>
                <span class="item-price float-right">Name- Price</span>
            </li>
            <hr>
            <li v-for="(item,index) in items" :key="index" class="list-group-item">
                <button @click="removeItem(index)" class="btn  btn-sm btn-warning ml-6">-</button>
                <span class="item-name" style="padding-left: 10px;">{{ item.title }}: $</span>
                <span class="item-price float-right">{{ item.price}}</span>
            </li>
            <li class="list-group-item">
                <span class="item-name">Total: $</span>
                <span class="item-price float-right"  style="padding-left: 10px;">{{ total }}</span>
            </li>
          </ul>

          <!-- <p style="font-weight:bold"><span style="color:blue">{{items}}</span></p>
          <p style="font-weight:bold"><span style="color:red">{{total}}</span></p> -->


</template>

<script>

export default {
    props:['items'],
    computed: {
             total(){
                var total = 0
                this.items.forEach(item => {
                    total += parseFloat(item.price)
                })
                return total
             }
          },
    methods:{
        removeItem(index){
            this.$emit('itemRemoved', index)
        }
    }
}

</script>

<style scoped>

</style>