<template>
  <div class="bg-gray-800 h-screen grid justify-center items-center">
    <div class="flex flex-col gap-4">
      <div class="flex max-w-[700px] w-full gap-6 justify-center items-center">
        <GenericNameIcon class="min-h-20 min-w-20 text-4xl"
                :name="selectContact.name"
        />
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
      <div class="flex flex-row justify-between gap-6">
        <NuxtLink to="/" class="w-fit h-fit">
          <GenericButton
              text-button="Atras"
              icon-button="back.svg"
          />
        </NuxtLink>

        <NuxtLink to="/" class="w-fit h-fit">
          <GenericButton
              @click="exportContact()"
              text-button="Guardar"
              icon-button="savePhoto.svg"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useAgendaStore} from "~/stores/agenda.js";

export default {
  name: 'editContact',
  data:() => ({
    name: "",
    surname: "",
    phone: "",
    mail:"",
  }),
  prop:{
    name:{
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapState(useAgendaStore, ['contacts','selectContact']),
    ...mapActions(useAgendaStore, ['exportContact']),
    firstLetter(){
      return this.name.charAt(0).toUpperCase();
    }
  },
}

</script>