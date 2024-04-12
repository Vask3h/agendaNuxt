<template>
  <button class="flex items-center justify-center h-10 w-fit gap-3 px-3 rounded bg-gray-700 hover:bg-blue-500 text-white shadow-lg" :class="isDisable">
    <NuxtImg :src="iconButton" class="w-4"/>
    {{ textButton }}
  </button>
</template>

<script>
export default {
  name: 'GenericButton',
  computed: {
    isDisable() {
      return this.disable ? '!cursor-not-allowed !opacity-50 hover:!bg-gray-700' : ''
    }
  },
  props: {
    textButton: {
      type: String,
      default: "Button"
    },
    iconButton: {
      type: String,
      default: "",
    },
    disable : {
      type: Boolean,
      default: false,
    }
  }
}
</script>