<template>
  <div  class="ss">
    Successfully logged out
  </div>
</template>



<script>
export default {


  methods:{
      signout(){

          localStorage.clear()
      }
  },

 beforeUpdate(){
     this.signout()
 },
  created(){
      this.signout()
  },



}
</script>



<style scoped>
.ss{

 margin-top: 10rem;
 text-align: center;

}

</style>
