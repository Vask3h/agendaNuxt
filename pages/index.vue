<template>
  <div class="flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-800">
    <div class="pt-10 max-w-[800px] w-full shadow-lg flex flex-col gap-5">
      <div class="w-full flex justify-end">
        <NuxtLink to="/add-contact" class="w-fit h-fit">
          <GenericButton
              text-button="Agregar contacto"
              icon-button="plususer.svg"
          />
        </NuxtLink>
      </div>
      <div>
        <div
            class="w-full bg-gray-700 text-gray-400 text-xs font-bold p-4 grid grid-cols-[100px_1fr_1fr_1fr_100px] rounded-[10px_10px_0_0]">
          <div class="w-[100px]">
            FOTO
          </div>
          <div class="w-full">
            NOMBRE
          </div>
          <div class="w-full">
            TELEFONO
          </div>
          <div class="w-full">
            CORREO
          </div>
          <div class="w-full">
            ACCIONES
          </div>
        </div>
        <div class="overflow-y-scroll scrollbar max-h-[500px] min-h-[500px] bg-gray-700 rounded-[0_0_10px_10px]">
          <GenericContactItem
              v-for="contact in contacts"
              :key="contact.id"
              :name="contact.name"
              :surname="contact.surname"
              :phone="contact.phone"
              :mail="contact.mail"
              :id="contact.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "pinia";
  import {useAgendaStore} from "~/stores/agenda.js";
  export default {
    computed: {
      ...mapState(useAgendaStore, ['contacts'])
    },
  beforeCreate: function(){
    localStorage.getItem("contactos")
  }
  }
</script>

<style scoped lang="scss">
.scrollbar {
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c7cbce;
    border-radius: 10px;
    border: 0 solid transparent;
    cursor: pointer;
  }
}
</style>