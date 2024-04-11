<template>
  <div class="flex justify-center gap-1 ">
    <button class="max-w-10 p-2 hover:bg-gray-700 rounded transition duration-100" >
      <NuxtImg src="/edit.svg"/>
    </button>
    <button class="max-w-10 p-2 hover:bg-gray-700 rounded transition duration-100"  >
      <NuxtImg src="/trash.svg"/>
    </button>
  </div>
</template>

<script> 
  export default{
      name: "actions",
  }
</script>