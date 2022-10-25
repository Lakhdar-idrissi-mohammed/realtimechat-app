<template>
    <div>
      <NavbarComponent/>
      <main>

        <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style="min-height: 75vh;"
        >
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover bg-Welcome-img"
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="text-white font-semibold text-5xl">
                    Your Private Online Chat !
                  </h1>
                  <p class="mt-4 text-lg text-gray-300">
                    This is a simple online chat platform for Teams and companies .
                     Working with firebase Realtime Database.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="pb-20 bg-gray-300 -mt-24">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class=" mt-16 w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-6 py-8 flex-auto">
                    <div
                      class="text-white font-bold uppercase  items-center justify-center inline-flex w-12 h-12 mb-3 -mt-3 rounded-full bg-red-400"
                    >
                    <i>TP</i>
                    </div>
                    <h6 class="text-xl font-semibold">Totally Private</h6>
                    <p class="mt-2 mb-0 text-gray-600">
                      Localhost/Online Platform to chat privatly with your Team or inside a company.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-6 py-8 flex-auto">
                    <div
                      class="text-white font-bold uppercase p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-3 -mt-3 rounded-full bg-blue-400"
                    >
                      <i>CFS</i>
                    </div>
                    <h6 class="text-xl font-semibold">Cloud firestore</h6>
                    <p class="mt-2 mb-0 text-gray-600">
                      Using Cloud firestore to keep your data accessible and easly managable.
                    </p>
                  </div>
                </div>
              </div>
              <div class=" mt-16 w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-6 py-8 flex-auto">
                    <div
                      class="text-white font-bold uppercase inline-flex items-center justify-center w-12 h-12 mb-3 -mt-3 shadow-lg rounded-full bg-green-400"
                    >
                      <i>GA</i>
                    </div>
                    <h6 class="text-xl font-semibold">Google Authentification</h6>
                    <p class="mt-2 mb-0 text-gray-600">
                      Using Google Authentification to make the login easy and secure !
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section class="pt-20 pb-48">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center text-center mb-24">
              <div class="w-full lg:w-6/12 px-4">
                <h2 class="text-4xl font-semibold">Here are our heroes</h2>

              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="../assets/img/Med.jpg"
                    class="shadow-lg rounded-full max-w-full  mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Med Lakhdar Idrissi</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i></button
                      ><button
                        class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-facebook-f"></i></button
                      ><button
                        class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="../assets/img/Absent.png"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Me</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i></button
                      ><button
                        class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="../assets/img/Absent.png"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Me</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i></button
                      ><button
                        class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i></button
                      ><button
                        class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="../assets/img/Absent.png"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Me</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-dribbble"></i></button
                      ><button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i></button
                      ><button
                        class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i></button
                      ><button
                        class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="adsgoeshere" style="background: #1d1f29; padding-top:60px; text-align: center;" v-html="adsenseContent"></div>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  <script>
  import firebase from 'firebase';
  import FooterComponent from "../components/Footer.vue";
  import NavbarComponent from "@/components/Navbar.vue";
  export default {
    name: "landing-page",
    components: {
      FooterComponent,
      NavbarComponent
    },
    data(){
       return {
        adsenseContent: ''
       }

    },
    mounted(){
      this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML

    }
    // beforeRouteEnter(to,from,next) {

    //   next(vm=>{
    //   firebase.auth().onAuthStateChanged(user=>{
    //     if(user){
    //       next();
    //     }else{
    //       vm.$router.push('/login')
    //     }
    //   })
    //   })
    //   }
  }
  </script>
