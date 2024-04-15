import {defineStore} from 'pinia'

export const useAgendaStore = defineStore( 'agenda', {
    state:() => ({
        contacts:[
            {
                name: 'PRUEBA PINIA',
                surname: 'Broncano',
                mail: 'prueba@prueba.com',
                phone: '8245234234',
                id: 0
            }
        ],
        selectContact: {}
    }),
    actions: {
        profileIcon(){
          let letter = this.contacts.name
          let resolute = "";
            for (let i = 0; i < letter.length; resolute += letter[i][0], i++);
            console.log(resolute);
        },
        editContact(id){
            let position = this.contacts.findIndex((x)=> x.id === id)
            this.selectContact = this.contacts[position]

        },
        deleteContact(id){
            let position = this.contacts.findIndex((x)=> x.id === id)
            this.contacts.splice(position,1)
        },
        createContact(name, surname, phone, mail) {
            if (name != "" && phone != ""){
                let id = Math.floor(Math.random() * 1000000000000);
                let contact = {
                    name: name,
                    surname: surname,
                    phone: phone,
                    mail: mail,
                    id: id
                }
                this.contacts.push(contact)
                console.log(this.contacts);

            }

        },
    }
})
