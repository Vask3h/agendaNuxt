import {defineStore} from 'pinia'

export const useAgendaStore = defineStore( 'agenda', {
    state:() => ({
        contacts:[
            {
                name: 'PRUEBA PINIA',
                surname: 'Broncano',
                mail: 'prueba@prueba.com',
                phone: '8245234234',
                id: 982452867456284574957
            }
        ],
    }),
    actions: {
        createContact(name, surname, phone, mail) {
            // Comparar si name y phone esta vacio, si esta vacio no se debe de agregar el contacto.
            // Aparte debes de comprobar EN EL BOTON que no se pueda hacer click, puedes comprobarlo de ambas maneras
            // Es decir, puedes usar una computed que retorne un booleano para saber cuando se puede hacer click y cuando no
            let id = Math.floor(Math.random() * 1000000000000);
            let contact = {
                name: name,
                surname: surname,
                phone: phone,
                mail: mail,
                id: id
            }
            this.contacts.push(contact)
        },
    }
})
