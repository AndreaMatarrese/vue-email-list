// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
new Vue({
    el: '#app',
    data: {
        emails: [],
    },
    methods: {
        generateEmail(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(listEmail => {
                    this.emails.push(listEmail.data.response);
                });
            }  
        }
    }
});