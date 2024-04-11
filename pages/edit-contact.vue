<template>
  <div class="bg-gray-900 h-screen grid justify-center items-center">
    <div class="flex flex-col gap-4">
      <div class="flex max-w-[700px] w-full gap-6 justify-center items-center">
        <GenericNameIcon class="min-h-20 min-w-20 text-4xl "/>
        <div class="flex flex-col gap-4">
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
      </div>
      <div class="flex flex-col gap-4">
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
      <div class="flex flex-row justify-between gap-6 pt-4">
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
  </div>
</template>

<script>

</script>