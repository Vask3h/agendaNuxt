<template>
    <div class="dark:bg-gray-900 h-screen flex flex-col justify-center items-center gap-3">
        <GenericInput 
            textLabel="Nombre"
            textPlaceholder="Inserte nombre"
            v-model="name"
        />
        <GenericInput 
            textLabel="Apellido"
            textPlaceholder="Inserte apellido"
            v-model="surname"
        /> 
        <GenericInput 
            textLabel="Telefono"
            typeInput="number"
            textPlaceholder="Inserte numero de telefono"
            v-model="phoneNum"
        />
         <GenericInput 
            textLabel="Correo"
            textPlaceholder="Inserte@correo"
            v-model="email"
        />
        <GenericButton @click="submitForm"/>
    </div>
</template>

<script>
    export default{
        name: 'addContact',
        data:() => ({
            text:"Prueba",
            contacts: [],
            name: "",
            surname: "",
            phoneNum: "",
            email:"",
        }),
        methods:{
            submitForm(){
                let id = Math.floor(Math.random() * 1000000000000);
                this.contacts.push({
                    name:this.name,
                    surname:this.surname,
                    phoneNum:this.phoneNum,
                    email:this.email,   
                    id: id
                })
                console.log(this.id);
                console.log(this.contacts);
            },
        }
    }
</script>