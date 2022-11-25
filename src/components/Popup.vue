<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 opacity-99 bg-black flex items-center justify-center"
  >
    <div class="bg-white p-8">
      <slot />
      <img
        src="@/assets/img/close.png"
        class="cursor-pointer align-top absolute"
        style="left: 987px !important; margin-top: 5px"
        @click="TogglePopup();removeImage()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup","removeImage"],
};
</script>
