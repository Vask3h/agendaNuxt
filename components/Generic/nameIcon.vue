<template>
  <div class="flex items-center justify-center rounded-full w-fit text-white bg-gray-700 placeholder-gray border border-solid outline-none focus-within:border-blue-500 border-gray-600 p-2 pl-4 pr-4">
      {{ firstLetter }}
  </div>
</template>

<script>
export default {
  name: "nameIcon",
  props:{
    name:{
      type: String,
      required: true,
    }
  },
  computed: {
    firstLetter(){
      if (this.name){
      return this.name.charAt(0).toUpperCase();
      }else{
        return "-"
      }
    }
  },
}
</script>