const app = Vue.createApp({
    data(){
        return{
             userInput: ''  
        }
    },
    methods: {
        showAlert(){
             alert("Welcome to Vue Event-Binding 1 !");
        }
    }
})

app.mount("#assignment")