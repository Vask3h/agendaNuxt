<template>
    <button @click="onclickButton">{{ nameButton }}</button>
</template>
<script>
    export default {
        name: "InputButton",
        props: {
            nameButton : {
                type : String,
                required: true,
            }
        },
        methods: {
            onclickButton() {
                console.log("click")
            }
        }
    }
</script>