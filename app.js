const app = Vue.createApp({
    data(){
        return{
             userInput: ''  
        }
    },
    methods: {
        showAlert(){
             alert("Welcome to Vue Event-Binding 1 !");
        },
        onKeydown(event){
             this.userInput = event.target.value ;
        }
    }
})

app.mount("#assignment")