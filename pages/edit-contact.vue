<template>
  <div class="bg-gray-900 h-screen grid justify-center items-center">
    <div class="flex flex-col gap-4">
      <div class="flex max-w-[700px] w-full gap-6 justify-center items-center">
        <GenericNameIcon class="min-h-20 min-w-20 text-4xl "/>
        <div class="flex flex-col gap-4">
          <GenericInput
              textLabel="Nombre"
              textPlaceholder="Inserte nombre"
              v-model="selectContact.name"

          />
          <GenericInput
              textLabel="Apellido *"
              textPlaceholder="Inserte apellido(opcional)"
              v-model="selectContact.surname"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <GenericInput
            textLabel="Telefono"
            typeInput="number"
            textPlaceholder="Inserte Num de telefono"
            v-model="selectContact.phone"
        />
        <GenericInput
            textLabel="Correo *"
            textPlaceholder="Inserte@correo(opcional)"
            v-model="selectContact.mail"
        />
      </div>
      <div class="flex flex-row justify-between gap-6 pt-4">
        <NuxtLink to="/"
                  class="flex items-center justify-center h-10 w-fit gap-3   px-3 rounded bg-gray-700 hover:bg-blue-500 text-white shadow-lg">
          <NuxtImg src="back.svg" class="w-4"/>
          Atras
        </NuxtLink>

        <NuxtLink to="/" class="flex items-center justify-center h-10 w-fit gap-3 px-3 rounded bg-gray-700 hover:bg-blue-500 text-white shadow-lg">
          <NuxtImg src="savePhoto.svg" class="w-4"/>
          Guardar
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useAgendaStore} from "~/stores/index.js";

export default {
  name: 'editContact',
  computed: {
    ...mapState(useAgendaStore, ['contacts','selectContact'])
  },
}

</script>