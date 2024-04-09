<template>
    <div class="flex justify-center ">
        <div class="border-2 border-solid border-blue-900 rounded-full pl-2 pr-2"> <!-- imagen nombre--> 
            A
        </div>
        <p class="align-middle border-2 border-transparent">
            Nombre Apellido
        </p>
            
    <button class="max-w-10" >
        <NuxtImg src="/pencil.svg"/>
    </button>

    <button class="max-w-10"  >
        <NuxtImg src="/trash-bin-trash-svgrepo-com.svg"/>
    </button>
        
    </div>

</template>

<script>
    export default{
        name:"ComboName",   
    }
</script>