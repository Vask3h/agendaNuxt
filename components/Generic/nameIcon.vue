<template>
    <div class="flex items-center justify-center rounded-full w-fit text-white bg-gray-700 placeholder-gray border border-solid outline-none focus-within:border-blue-500 border-gray-600 p-2 pl-4 pr-4"> <!-- imagen nombre-->

    </div>
</template>

<script>
import {mapState} from "pinia";
import {useAgendaStore} from "~/stores/index.js";
    export default{
        name:"nameIcon",
      computed: {
        ...mapState(useAgendaStore, ['profileIcon'])
      },
    }
</script>