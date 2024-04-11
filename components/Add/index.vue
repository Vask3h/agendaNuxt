<template>
    <div class="flex justify-evenly bg-blue-900 p-2 ">
        <NuxtImg src="/topgroupexpress.svg"/>
        <input placeholder="Buscar contacto" type="text" class=" placeholder-white border-blue-900 rounded-xl p-2 bg-orange-700 text-white">
        <button id="add" class="border-solid border-blue-900 border-2 rounded-xl p-2 bg-orange-700 p-2 text-white">Añadir contacto</button>
        <button id="delete" class="border-solid border-blue-900 border-2 rounded-xl p-2 bg-orange-700 p-2 text-white">Eliminar contacto</button>
        <button id="edit" class="border-solid border-blue-900 border-2 rounded-xl p-2 bg-orange-700  text-white">Editar contacto</button>
        
    </div>
</template>

<script>

    export default {
        data: () => ({
            
        }),
        methods:{
            
        },
        mounted() {

        }
        /*created() {

        }*/
    }
</script>