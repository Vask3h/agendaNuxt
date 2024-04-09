<template>
    <div class="dark:bg-gray-900">
        <GenericInput 
            textLabel="Nombre"
            textPlaceholder="Inserte nombre"
        />
        <GenericInput 
            textLabel="Apellido"
            textPlaceholder="Inserte apellido"
        /> 
        <GenericInput 
            textLabel="Telefono"
            typeInput="number"
            textPlaceholder="Inserte numero de telefono"
        />
         <GenericInput 
            textLabel="Correo"
            textPlaceholder="Inserte@correo"
        />
    </div>
    
</template>

<script>
    export default{
        data:() => ({
            text:"Prueba"
        }),
        computed: {
            onTextComputed(){
                return "Pepito"
            }
        }
        
        
    }
    
</script>