<template>
  <NavbarComponent></NavbarComponent>

  <router-view/>
</template>
<script>
  import NavbarComponent from "@/components/Navbar.vue";

  export default {
    name: "landing-page",
    components: {
      NavbarComponent,

    }


  }
  </script>
