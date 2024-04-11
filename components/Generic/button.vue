<template>

  <button
      class="text-white bg-gray-700 placeholder-gray border border-solid outline-none focus-within:border-blue-500 border-gray-600 rounded-lg p-2 h-20 w-20 items-center">

  </button>
</template>

<script>
export default {
  name: 'templateButton',
  props: {
    textButton: {
      type: String,
      default: "",
      required: true
    }
  }
}
</script>