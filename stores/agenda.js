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
            let id = Math.floor(Math.random() * 1000000000000);
            let contact = {
                name: name,
                surname: surname,
                phone: phone,
                mail: mail,
                id: id
            }
            this.contacts.push(contact)
            console.log(this.contacts)
        },
    }
})
