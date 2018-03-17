<template>
  <div class="sss">
    <h1>Data is from database</h1>
    <p v-if="da">Loading</p>
    <h2>{{post.person}}</h2>
  </div>
</template>



<script>
export default {
   data(){
     return{
       post:'',
       da:false
     }
   },

   methods:{
     getData(){
       this.da=true
       var token = localStorage.getItem('token')
       if(token){
         this.$http.get('http://localhost:3010/',{
           headers:{
            authorization:localStorage.getItem('token')
           }
         }).then(res=>{
           this.da=false
           console.log(res.data)
           this.post=res.data
         }).catch(err=>console.log(err))
       }
     },
     updateChange(){
       let token = localStorage.getItem('token')
     if(!token){
      this.$router.push('/signin')
     }else{
       this.$router.push('/home')
     }
     }
   },
   created(){
     this.getData()
   },


}
</script>



<style scoped>
.sss{

 margin-top: 10rem;
 text-align: center;

}
</style>
