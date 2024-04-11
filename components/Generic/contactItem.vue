<template>
  <div class="bg-gray-900 hover:bg-gray-800 py-2 px-4 grid grid-cols-[100px_190px_190px_190px_100px] text-white items-center border-t border-gray-700 ">
    <GenericNameIcon/>
    <p class="overflow-hidden text-ellipsis text-nowrap pr-2"> {{ name}} </p>
    <p class="overflow-hidden text-ellipsis text-nowrap pr-2"> {{ phone }}</p>
    <p class="overflow-hidden text-ellipsis text-nowrap pr-2"> {{ mail}}</p>
    <GenericActions/>
  </div>
</template>

<script>
  export default{
    name:"contactItem",
    props: {
      name: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        default: '',
      },
      mail: {
        type: String,
        default: '',
      },
      phone: {
        type: String,
        required: true,
      }
    }
  }
</script>