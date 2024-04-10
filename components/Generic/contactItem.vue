<template>
  <div class="bg-gray-900 p-4 grid grid-cols-[100px_1fr_1fr_1fr_100px] text-white items-center overflow-hidden text-ellipsis border-t-2 border-gray-700 ">
    <GenericNameIcon/>
    <p> {{ name}} </p>
    <p> {{ phone }}</p>
    <p> {{ mail}}</p>
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