<template>
    
    <div class="flex flex-colum justify-center items-center  pt-2 pr-10 pl-10"  >      
        <div class="bg-orange-700 grid grid-cols-4 self-center  gap-2  p-5 text-center">
                <p class="bg-orange-500 border-4 rounded-2xl p-1 ">Nombre</p>
                <p class="bg-orange-500 border-4 rounded-2xl p-1 ">surname</p>
                <p class="bg-orange-500 border-4 rounded-2xl p-1  ">Telefono</p>
                <p class="bg-orange-500 border-4 rounded-2xl p-1 ">Email</p>

                <input class="border border-solid border-black" type="text" v-model="name" id="name">
                <input class="border border-solid border-black" type="text" v-model="surname" id="surname">
                <input class="border border-solid border-black" type="text" v-model="phoneNum" id="phone">
                <input class="border border-solid border-black" type="text" v-model="email" id="email">

                <div>{{ name }}</div>
                <div>{{ surname }}</div>
                <div>{{ phoneNum }}</div>
                <div>{{ email }}</div>
               
        </div>
        <button class="bg-orange-500 border border-2 border-solid border-orange p-2 max-h-10 " @click="submit">
            submit
        </button>
    </div> <!-- primer div-->
    
    
</template>
<script>
    export default{
        name:"Contacts",
        data: () => ({
            contacts: [],
            name: "",
            surname: "",
            phoneNum: 0,
            email:"",
        }),
        methods: {
            submit() {
            
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
            }
        },
        
    }
</script>