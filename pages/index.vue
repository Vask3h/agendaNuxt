<template>
     <h1 class="text-3xl font-bold underline bg-blue-500 text-red-200 border-[13px] border-solid border-yellow-200">
        Hello world!
    </h1>
    <Input/>
    <input type="text" v-model="aceptButton" />
    <InputButton
        
        v-if="true"
        :nameButton="aceptButton"
    />
    <InputButton
        v-else
        nameButton="Cancelar"
    />
    <div v-html="html">

    </div>
</template>

<script>
    export default {
        data: () => ({
            aceptButton : "as",
            html : "<strong style='color: blue;' class='pepito'>prueba</strong>"
        })
    }
</script>