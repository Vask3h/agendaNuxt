<template>
  <div class="dark:bg-gray-900 h-screen grid justify-center items-center">
    <div class="grid grid-cols max-w-[400px] w-full gap-3 ">
      <GenericNameIcon/>
      <GenericInput
          textLabel="Nombre"
          textPlaceholder="Inserte nombre"
          v-model="name"
      />
      <GenericInput
          textLabel="Apellido *"
          textPlaceholder="Inserte apellido(opcional)"
          v-model="surname"
      />
    </div>
    <div class="grid grid-cols-1">
      <GenericInput
          textLabel="Telefono"
          typeInput="number"
          textPlaceholder="Inserte Num de telefono"
          v-model="phoneNum"
      />
      <GenericInput
          textLabel="Correo *"
          textPlaceholder="Inserte@correo(opcional)"
          v-model="email"
      />
    </div>
    <div class="flex flex-row justify-between gap-6">
      <NuxtLink to="/" class="flex items-center justify-center h-10 w-fit gap-3   px-3 rounded bg-gray-700 hover:bg-blue-500 text-white shadow-lg">
        <NuxtImg src="back.svg" class="w-4" @click="submitForm"/>
        Atras
      </NuxtLink>

      <NuxtLink to="/" class="flex items-center justify-center h-10 w-fit gap-3 px-3 rounded bg-gray-700 hover:bg-blue-500 text-white shadow-lg">
        <NuxtImg src="savePhoto.svg" class="w-4" @click="submitForm"/>
        Guardar
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addContact',
  data: () => ({
    text: "Prueba",
    contacts: [],
    name: "",
    surname: "",
    phoneNum: "",
    email: "",
  }),
  methods: {
    submitForm() {
      let id = Math.floor(Math.random() * 1000000000000);
      this.contacts.push({
        name: this.name,
        surname: this.surname,
        phoneNum: this.phoneNum,
        email: this.email,
        id: id
      })
      console.log(this.id);
      console.log(this.contacts);
    },
  }
}
</script>