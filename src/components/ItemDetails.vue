<template>
  <div>
   <h2>{{ items.id }}</h2>
   <h2>JJJJ</h2>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
export default {
    data(){
       return {
        items: ""
       }
    },
    mounted(){
        this.fetchInventory()
    },
    methods: {
        fetchItem(){
            const route = useRoute();
            var self = this;
            axios.get('https://jsonplaceholder.typicode.com/posts/' + route.params.id).then(res => {
                //console.log(res);
                    self.items = res.data
                console.log('hh',route.params.id)
                    //self.items = res.data
                    //self.loading = false
            })
        }
    }
}
</script>

<style scoped>

</style>