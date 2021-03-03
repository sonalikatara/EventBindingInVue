const app = Vue.createApp({
    data(){
        return{
             userInput: '',
             confirmedInput: '', 
        }
    },
    methods: {
        showAlert(){
             alert("Welcome to Vue Event-Binding 1 !");
        },
        onKeydown(event){
            this.userInput = event.target.value ;
        },
        onConfirm(event){
            this.confirmedInput = event.target.value ;
        }
    }
})

app.mount("#assignment")