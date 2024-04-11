<template>
    <div class="bg-gray-800 h-screen flex justify-center items-center">
      <div class="flex flex-col gap-3 max-w-[400px] w-full">
        <GenericInput
            textLabel="Nombre"
            textPlaceholder="Inserte nombre"
            v-model="name"
        />
        <GenericInput
            textLabel="Apellido *"
            textPlaceholder="Inserte apellido (opcional)"
            v-model="surname"
        />
        <GenericInput
            textLabel="Telefono"
            typeInput="number"
            textPlaceholder="Inserte Num de telefono"
            v-model="phone"
        />
        <GenericInput
            textLabel="Correo *"
            textPlaceholder="Inserte@correo (opcional)"
            v-model="mail"
        />
        <div class="flex flex-row justify-between gap-6">
          <NuxtLink to="/" class="flex items-center justify-center h-10 w-fit gap-3 px-3 rounded bg-gray-700 hover:bg-blue-500 text-white shadow-lg">
            <NuxtImg src="back.svg" class="w-4" @click="submitForm"/>
            Atras
          </NuxtLink>

          <NuxtLink to="/" class="flex items-center justify-center h-10 w-fit gap-3 px-3 rounded bg-gray-700 hover:bg-blue-500 text-white shadow-lg">
            <NuxtImg src="savePhoto.svg" class="w-4" @click="submitForm"/>
            Guardar
          </NuxtLink>
        </div>
      </div>
    </div>
</template>

<script>
    import {mapActions} from "pinia";
    import {useAgendaStore} from "~/stores/index.js";

    export default {
        name: 'addContact',
        data:() => ({
            name: "",
            surname: "",
            phone: "",
            mail:"",
        }),
      methods: {
        ...mapActions(useAgendaStore, ['createContact']),
      },

    }*/
</script>