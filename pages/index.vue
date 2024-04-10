<template>
    <div class="bg-gray-900 grid grid-cols-4 gap-4 justify-center text-center items-center text-white">
        <div>
            <GenericNameIcon/>
        </div>
        <div>
            <p>Nombre:</p>
        </div>
        <div>
            <p>Correo:</p>
        </div>
        <div>
            acciones
        </div>
    </div>
        <div class="flex flex-row-reverse items-end fixed top-3/4 right-4" >
            <NuxtLink to="add-contact" class="link"> 
                <button class="text-6xl h-20 w-20 rounded-full text-white bg-gray-700 placeholder-gray border border-solid outline-none focus-within:border-blue-500 border-gray-600 p-2 pl-4 pr-4 hover:bg-blue-600 font-bold shadow-lg">
                +
                </button>
            </NuxtLink>
        </div>
</template>