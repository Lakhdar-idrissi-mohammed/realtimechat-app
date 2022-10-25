<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">

    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Let's stay in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div class="mt-6">
            <button @click="toLink('https://www.facebook.com/profile.php?id=100085896084455')"
              class="bg-blue-600 text-white font-extrabold text-2xl h-10 w-10 items-center justify-center align-center rounded-full  mr-2 p-3"
              type="button" >
              <p class="-mt-2">f</p>
            </button>
            <!-- <button @click="toLink('https://www.facebook.com/profile.php?id=100085896084455')"
              class="bg-blue-600 text-white font-extrabold text-2xl h-10 w-10 items-center justify-center align-center rounded-full  mr-2 p-3"
              type="button" >
              <p class="-mt-2">f</p>
            </button>
            <button @click="toLink('https://www.facebook.com/profile.php?id=100085896084455')"
              class="bg-blue-600 text-white font-extrabold text-2xl h-10 w-10 items-center justify-center align-center rounded-full  mr-2 p-3"
              type="button" >
              <p class="-mt-2">f</p>
            </button>
            <button @click="toLink('https://www.facebook.com/profile.php?id=100085896084455')"
              class="bg-blue-600 text-white font-extrabold text-2xl h-10 w-10 items-center justify-center align-center rounded-full  mr-2 p-3"
              type="button" >
              <p class="-mt-2">f</p>
            </button> -->
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Useful Links</span
              >

            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Other Resources</span
              >
              <ul class="list-unstyled">
                <!-- <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                    >MIT License</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms"
                    >Terms &amp; Conditions</a
                  >
                </li> -->
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.privacypolicygenerator.info/live.php?token=t7sOsi7vKqX79OiK7iQ3V07EAYj1aTOi"
                    >Privacy Policy</a
                  >
                </li>
                <!-- <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us"
                    >Contact Us</a
                  >
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{date}}
            <a
              href="https://www.creative-tim.com"
              class="text-gray-600 hover:text-gray-900"
              ></a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()


    }
  },
  methods:{
    toLink(path){
      window.location.href = path
    }
  }
}
</script>
