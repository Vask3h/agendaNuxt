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
          <NuxtLink to="/" class="w-fit h-fit">
            <GenericButton
              text-button="Atras"
              icon-button="back.svg"
            />
          </NuxtLink>

          <NuxtLink v-if="isClickable" to="/" class="w-fit h-fit">
            <GenericButton
                @click="() => { createContact(name, surname, phone, mail); exportContact(); }"
                text-button="Guardar"
                icon-button="savePhoto.svg"
            />
          </NuxtLink>
          <GenericButton
              v-else
              text-button="Guardar"
              icon-button="savePhoto.svg"
              disable
          />
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
      computed: {
        isClickable() {
          if (this.name != "" && this.phone != "") {
            return true
          }
          return false
        }
      },
      methods: {
        ...mapActions(useAgendaStore, ['createContact']),
        ...mapActions(useAgendaStore, ['exportContact']),
      },

    }
</script>