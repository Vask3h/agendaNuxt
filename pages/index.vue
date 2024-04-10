
import type { GenericContactName } from '#build/components';

import { GenericActions } from '#build/components';

import { GenericNameIcon } from '#build/components';
<template>
    
        <div class="bg-gray-900 flex flex-row justify-between p-2 text-center items-center text-white text-xl rounded-[10px_10px_0_0]
        max-w-7xl m-auto">
            
                <div> 
                    <GenericNameIcon/>
                </div>
                <div>
                    <p>Nombre:</p>
                </div>
                <div>
                    <p>Telefono:</p>
                </div>
                <div>
                    <p>Correo:</p>
                </div>
                <div>
                    <p>Acciones:</p>
                </div>
        </div>
       <GenericContactName/>
       <GenericContactName/>
       <GenericContactName/>
       <GenericContactName/>

        

</template>