<template>
  <nav class="top-0  absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">

    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">

      <div  class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

          <img class=" relative -top-0.5 -left-5 w-24 " src="@/assets/img/logo.png" >

      </div>

      <div class="lg:flex  flex-grow items-center lg:bg-transparent lg:shadow-none">

        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a class=" font-bold leading-relaxed inline-block text-lg py-2 -ml-9 whitespace-nowrap text-white"
        href="/">TweetyChat </a>
          </li>
        </ul>

          <div class="flex items-center">
            <a v-if="loggedin"
              class="bg-transparent border-2 border-solid border-tweety-color hover:border-white text-tweety-color lg:hover:text-white shadow-neon-current text-xs font-extrabold uppercase px-4 py-2 rounded outline-none "
              href="/login"
              > Login
          </a>
          <a  v-if="!loggedin"
              class=" bg-transparent border-2 border-solid border-tweety-color hover:border-white  text-tweety-color lg:hover:text-white shadow-neon-current text-xs font-extrabold uppercase px-4 py-2 rounded outline-none  "
              href="/chat"
              > Chat !
        </a>
        </div>

      </div>
    </div>
  </nav>
</template>
<script>
  import firebase from 'firebase';

  export default {
    data(){
       return {
        loggedin:true
       }

    },
    created(){

        firebase.auth().onAuthStateChanged(user=>{
                if(user){
                  this.loggedin=false
                }else{
                  this.loggedin=true
                }
              })


        }

  }
  </script>

