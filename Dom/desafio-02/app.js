new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
       exibirAlert(){
           alert('Alerta do Gino e Geno')
       },
       armazerInput(event){
         this.valor = event.target.value
       }
    }
})