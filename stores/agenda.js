import {defineStore} from 'pinia'

export const useAgendaStore = defineStore( 'agenda', {
    state:() => {

        let texto = localStorage.getItem("contactos")
        console.log(texto)
        let arr = JSON.parse(texto)
        if (!arr){
            arr = []
        }
        console.log(arr)
        return ({
            contacts: arr ,
            selectContact: {}
        });
    },
    actions: {
        exportContact(contactos){
            contactos = this.contacts
            localStorage.setItem("contactos", JSON.stringify(this.contacts))
            console.log(this.exportContact)
        },

        editContact(id){
            let position = this.contacts.findIndex((x)=> x.id === id)
            this.selectContact = this.contacts[position]
        },
        deleteContact(id){
            let position = this.contacts.findIndex((x)=> x.id === id)
            this.contacts.splice(position,1)
            localStorage.setItem("contactos", JSON.stringify(this.contacts))


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
