new Vue({
  el: "#desafio",
  data: {
    nome: "Mateus Correia Bezzan",
    idade: 24,
    linkImagem:
      "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_sol14.jpg?quality=70&strip=info",
  },
  methods: {
    multiplicaIdade: function () {
      return this.idade * 3;
    },
    numeroAleatorio: function () {
      return Math.random() * (1 - 0) + 0;
    },exibirAlert
  },
});
