<template>
  <div class="flex justify-center gap-1 ">
    <NuxtLink to="/edit-contact">
      <button @click="editContact(id)" class="max-w-10 p-2 hover:bg-gray-700 rounded transition duration-100">
        <NuxtImg src="/edit.svg"/>
      </button>
    </NuxtLink>
    <button @click="deleteContact(id)" class="max-w-10 p-2 hover:bg-gray-700 rounded transition duration-100">
      <NuxtImg src="/trash.svg"/>
    </button>
  </div>
</template>

<script>
import {mapActions} from "pinia";
import {useAgendaStore} from "~/stores/agenda.js";

export default {
  name: "actions",
  methods: {
    ...mapActions(useAgendaStore, ['deleteContact', 'editContact']),
  },
  props: {
    id: {
      type: Number,
      required: true,
    }
  }
}

</script>