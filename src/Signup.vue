<template>
<div class="row">

   <div class="signup">

     <input type="email" placeholder="Email"
     required
     class="inp" v-model="email" />
      <input type="name" placeholder="Full Name"
     required
     class="inp" v-model="name" />
     <input type="password"  placeholder="Password"
      class="inp" v-model="password"
      @keypress.enter="onSignup"
      />
     <button class="btn" @click="onSignup">SignUp</button>
   </div>
  <p class="err" v-if="errem">Please enter Email or Password</p>
   <p class="err" v-if="err">Email already Exists</p>
</div>


</template>



<script>
export default {

     data(){
         return{
            email:'',
            password:'',
            name:'',
            err:false,
            errem:false
         }
     },
     methods:{
       errcheck(){
         if(!this.email || !this.password){
                this.errem=true
         }else{
             this.errem=false
         }
        },

       onSignup(){
             this.err=false;

             if(this.errem){
                 return this.errcheck()
             }
             const pay ={
                 email:this.email,
                 password:this.password,
                 name:this.name
             }
          this.$http.post('http://localhost:3010/signup',pay)
          .then((user)=>{
             console.log(user)
              localStorage.setItem('token',user.data.token)
              localStorage.setItem('name',user.data.name)
              this.$router.push('/home')
          }).catch((err)=>{
              this.err=true
              console.log(err)
          })
         }
     },

     updated(){
         this.errcheck()
     }
}
</script>



<style scoped>

.row{
    max-width:  40rem;
    margin:0 auto;
}

.signup{

    display: flex;
    flex-direction: column;
    margin-top: 2rem;
     width:80%;
    margin-left: auto;
    margin-right: auto;
     padding: 1rem;
     align-items: center;
   border-radius: 2rem;
   box-shadow:  0 .4px .2rem black;
   height: 244px;

}
.inp{
    width: 90%;
    margin-top: 1rem;
    padding: .6rem;
    outline: none;
    height: 1.8rem;
    font-size: 1rem;
    border-radius: 100px;
    border: .1rem solid  rgba(165, 159, 159, 0.377);
    transition: all .2s;
}

.inp:focus{
    transform: scale(1);
     transform: scale(1.02);
    border: .1rem solid   rgba(146, 143, 143, 0.486);
}
.inp::placeholder{
  color: rgb(139, 122, 122);
  font-size: 1rem;
  letter-spacing: .1rem;
}

.btn{
    margin-top: 1.7rem;
    padding: 1rem;
    color: rgb(129, 106, 106);
    outline: none;
    font-size: .9rem;
    letter-spacing: .2rem;
    background-color:  inherit;
    box-shadow: 0 .3rem .4rem rgb(190, 179, 169);
    border-radius: .5rem;
    opacity: .9;
    width: 10rem;
    align-self: center;
    border: .6rem double  inherit;
    transition: all .2s;
    cursor: pointer;


}

.btn:hover{
    box-shadow:none;
    border: 1px solid rgb(189, 185, 185);

}


.err{
    text-align: center;
    border: 1px solid red;
    padding: 1rem;
    box-shadow: 0 1px 1px red;
    border-radius: 1rem;
    color: rgb(15, 10, 10);
}
</style>
