<template>
  <div class="flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-800">
    <div class="pt-10 max-w-[800px] w-full shadow-lg">
      <div class="bg-gray-700 text-gray-400 text-xs font-bold p-4 flex rounded-[10px_10px_0_0]">
        <div class="w-full">
          FOTO
        </div>
        <div class="w-full">
          NOMBRE
        </div>
        <div class="w-full">
          TELEFONO
        </div>
        <div class="w-full">
          CORREO
        </div>
        <div class="w-full">
          ACCIONES
        </div>
      </div>
      <div class="overflow-y-scroll scrollbar max-h-[500px] min-h-[500px] bg-gray-700 rounded-[0_0_10px_10px]">
        <GenericContactItem />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scrollbar {
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c7cbce;
    border-radius: 10px;
    border: 0 solid transparent;
    cursor: pointer;
  }
}
</style>