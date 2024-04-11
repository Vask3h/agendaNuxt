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
        <NuxtLink to="/" class="pagePrincipal">
          <GenericButton
              @click="submitForm"
              textButton="Guardar"
          />
        </NuxtLink>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'addContact',
        data:() => ({
            name: "",
            surname: "",
            phone: "",
            mail:"",
        }),
        methods:{
            submitForm(){
                let id = Math.floor(Math.random() * 1000000000000);
                let contact = {
                    name:this.name,
                    surname:this.surname,
                    phone:this.phone,
                    mail:this.mail,
                    id: id
                }
            }
        }
    }
</script>