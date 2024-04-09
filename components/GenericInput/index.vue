<template >
    <div class="flex items-center flex-col justify-center gap-y-1 pt-10">
        <label class="text-white">{{ textLabel }}</label>
        <input :placeholder="textPlaceholder" :type="typeInput" class="text-white bg-gray-700 placeholder-gray border border-solid outline-none focus-within:border-blue-500 border-gray-600 rounded-lg p-2" />
    </div>
</template>

<script>
    export default {
        name : 'GenericInput',
        props : {
            textLabel:{
                type: String,
                default: "",
            },
            typeInput:{
                type: String,
                default:"text",
            },
            textPlaceholder:{
                type: String,
                default:"Introduce información",
            }
        }
    }

</script>