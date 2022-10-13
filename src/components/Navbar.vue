<template>
  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">

    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">

      <div  class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        href="/">Tweety Chat app</a>
      </div>

      <div class="lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none">

        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="">About</a>
          </li>
        </ul>

          <div class="flex items-center">
            <a v-if="loggedin"
              class="bg-white text-gray-800 lg:hover:text-gray-800  text-xs font-bold uppercase px-4 py-2 rounded shadow  outline-none  "
              href="/login"
              > Login
          </a>
          <a  v-if="!loggedin"
              class="bg-white text-gray-800 lg:hover:text-gray-800  text-xs font-bold uppercase px-4 py-2 rounded shadow  outline-none  "
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

