
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<template>



  <div id="app">

 

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Links</a>
      </div>
    </nav>
  

    <div class="container">

      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="pasta.nome">
          <!--
          <label>Quantidade</label>
          <input type="number" placeholder="QTD">
          <label>Valor</label>
          <input type="text" placeholder="Valor">
          ---->

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>NOME</th>
            <!--
            <th>VALOR</th>
            <th>OPÇÕES</th>
            -->
          </tr>

        </thead>

        <tbody>

          <tr v-for="pasta of pastas" :key="pasta.id">

            <td >{{pasta.id}}</td>
         
            <td>
            
             <input id ="texto"  v-model="pasta.nome">
            </td>


            <td>
              <button  @click="listar_links(pasta)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(pasta)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>

              <button @click="copy" id=”botao”>Copiar</button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>



</template>




<script>
   import Pasta from'./services/pasta'
   import Link from './services/link'
  export default{
data(){
 return {
 
 //obejto para o post
    pasta:{
      
      nome:''
    },

//obejto para o get
   pastas:[]
 }


},

    mounted(){
     this.listar()
    },

methods:{


//copiar
copy: function() {
   var texto = document.getElementById("texto");
   
   texto.select();
   document.execCommand("copy");
   //alert('texto cpoiado:'+texto.value)


      },







listar(){
 Pasta.listar().then(resposta =>{
        this.pastas=resposta.data
      })
},


listar_links(pasta){
   this.pasta = pasta
  alert("chegou aqui !")
 Link.listar().then(resposta =>{
    alert("chegou aqui2 !")
        this.pastas=resposta.data
      })
},




  salvar(){
  //alert(this.pasta.nome)
  Pasta.salvar(this.pasta).then(resposta =>{
    this.resposta = resposta

    //limpar objeto
    this.pasta={}
    alert('Salvo com Sucesso!')

    //LISTA DEPOIS DE SALVAR
    this.listar()
  })

  },


  //deletar 

  remover(pasta){

   

  if(confirm('Deseja pagar?')){
      this.pasta = pasta
   Pasta.apagar(pasta).then(resposta =>{
     this.resposta = resposta
        this.listar();
      })
  }

  }
}



 }


var Link= Vue.component('link',{
  template:'Link',
  data(){
    return{
      gameOfthones:[
        {
          name: 'teste'
        }
      ],
    }
  }
});


</script>






<style>

</style>
