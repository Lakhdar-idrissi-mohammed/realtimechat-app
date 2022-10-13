<template>
    <div>

      <main>
        <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style="min-height: 75vh;"
        >
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
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
                    Your story starts with us.
                  </h1>
                  <p class="mt-4 text-lg text-gray-300">
                    This is a simple example of a Landing Page you can build using
                    Tailwind Starter Kit. It features multiple CSS components
                    based on the Tailwindcss design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="pb-20 bg-gray-300 -mt-24">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white font-bold uppercase  items-center justify-center inline-flex w-12 h-12 mb-4 -mt-3 rounded-full bg-red-400"
                    >
                    <i>nik</i>
                    </div>
                    <h6 class="text-xl font-semibold">Awarded Agency</h6>
                    <p class="mt-2 mb-0 text-gray-600">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white font-bold uppercase p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-3 -mt-3 rounded-full bg-blue-400"
                    >
                      <i>zbe</i>
                    </div>
                    <h6 class="text-xl font-semibold">Free Revisions</h6>
                    <p class="mt-2 mb-0 text-gray-600">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white font-bold uppercase inline-flex items-center justify-center w-12 h-12 mb-3 -mt-3 shadow-lg rounded-full bg-green-400"
                    >
                      <i> ty </i>
                    </div>
                    <h6 class="text-xl font-semibold">Verified Company</h6>
                    <p class="mt-2 mb-0 text-gray-600">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
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
                <p class="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="../assets/img/team-1-800x800.jpg"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
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
                    src="../assets/img/team-2-800x800.jpg"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Romina Hadid</h5>
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
                    src="../assets/img/team-3-800x800.jpg"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Alexa Smith</h5>
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
                    src="../assets/img/team-4-470x470.png"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Jenna Kardi</h5>
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
      </main>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  <script>
  import firebase from 'firebase';
  import FooterComponent from "../components/Footer.vue";
  export default {
    name: "landing-page",
    components: {
      FooterComponent
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