<template >
    <h6>HHhh</h6>
    <h6>{{items}}</h6>

</template>
    
  
<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
  data(){
     return {
      items: ""
     }
  },
  mounted(){
      this.fetchItem()
  },
  methods: {
      fetchItem(){
          const route = useRoute();
          var self = this;
          axios.get('https://jsonplaceholder.typicode.com/posts' + route.params.id).then(res => {
              console.log('hhh',res);
              self.items = res.data
              console.log('hh',route.params.id)
                  self.items = res.data
                  self.loading = false
          })
      }
  }
}
</script>

<style scoped>
</style>