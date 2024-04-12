<template>
  <div class="bg-gray-900 hover:bg-gray-800 py-2 px-4 grid grid-cols-[100px_190px_190px_190px_100px] text-white items-center border-t border-gray-700 ">
    <GenericNameIcon/>
    <p class="overflow-hidden text-ellipsis text-nowrap pr-2"> {{ name }} </p>
    <p class="overflow-hidden text-ellipsis text-nowrap pr-2"> {{ phone }}</p>
    <p class="overflow-hidden text-ellipsis text-nowrap pr-2"> {{ mail}}</p>
    <GenericActions
    :id="id"
    />
  </div>
</template>

<script>
import { useAgendaStore } from "~/stores/agenda.js";
import { mapState, mapActions } from "pinia";

export default {
  name:"contactItem",
  props: {
    id: {
      type: Number,
      required: true,
    },
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
    },
  },
  computed: {
    ...mapState(useAgendaStore, ['contacts'])
  },
  methods: {
    ...mapActions(useAgendaStore,['createContact'])
  },

  }

</script>