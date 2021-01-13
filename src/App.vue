
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<template>



  <div id="app">

 

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Links</a>
      </div>
    </nav>
  

    <div class="container">

<!--pesquisar link por pasta -->
  <form id="pesquisaLink" @submit.prevent="listar"> 

       

          <label>Codigo da pasta </label>
            <input type="text" placeholder="Pasta" id="id-pasta" v-model="link.pastaLink.id">    

            

          

          <!--
          <label>Quantidade</label>
          <input type="number" placeholder="QTD">
          <label>Valor</label>
          <input type="text" placeholder="Valor">
          ---->

          <button   @click="listar(link)" class="waves-effect waves-light btn-small">Pesquisar<i class="material-icons left">save</i></button>

        </form> 









      <form @submit.prevent="salvar">

        <select>
             <option value="" disabled selected>Escolha uma conta</option>
             <option v-for="link in links" :key="link.id" :value="link">{{ link.url }}</option>
            </select>

          <label>URL</label>
          <input type="text" placeholder="Url" v-model="link.url">   

            

          <label>PASTA</label>
          <input type="text" placeholder="Pasta" v-model="link.pastaLink.id">   

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
            <th>PASTA</th>
           
            <th>NOME</th>
            <!--
            <th>VALOR</th>
            <th>OPÇÕES</th>
            -->
          </tr>

        </thead>

        <tbody>

          <tr v-for="link of links" :key="link.id">
            <td >{{link.id}}</td>
            <td >{{link.pastaLink.id}}</td>
            <td><input id ="texto"  v-model="link.url"></td>
            <td><a target="_blank" v-bind:href=link.url >link text</a></td>
            <td>
              <button  @click="listar(link)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(link)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
              <!-- <button @click="copy" id=”botao”>Copiar</button> -->

              <button  @click="copy(this)" id=”botao”>Copiar</button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>



</template>




<script>
   import Link from'./services/link'

  export default{
data(){
 return {
 
 //obejto para o post
    link:{
 
        id: "",
        url: "",
         pastaLink: {
            id: "",
            nome: ""
         }
       
      
    },

//obejto para o get
   links:[]





   
 }






},

    mounted(){
     this.listar()
    },

methods:{


//copiar
copy: function  pegarTextoInput(botao) {

  alert("chegou na funcao")
  //var texto = document.getElementById("texto")
   
   
  //texto.select();
 //document.execCommand("copy");
  //alert('texto cpoiado:'+texto.value)


  const linha = botao.parentNode.parentNode;
  const inputTabela = linha.querySelector('input')

  console.log(inputTabela.value);
  alert(inputTabela.value)
  inputTabela.value = ''
          
       },









listar(){


    //alert("chegou aqui  listar links!")

    //alert(this.link.pastaLink.id)

  if(this.link.pastaLink.id){
    //alert("cemtrou no if")
  }else {
    //alert("mao entro no if")
    //this.link.pastaLink.id=1
  }


    
    //alert("chegou aqui  listar links!")


 // alert(this.link.pastaLink.id)
  //alert(this.link.pastaLink.id)
 Link.listar(this.link).then(resposta =>{
   // alert("chegou aqui 3!")

    
     this.links=resposta.data

     link = this.link
     

  
      })

  /*
 Pasta.listar().then(resposta =>{
        this.pastas=resposta.data
      })

      */
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
    //alert("chegou aqui")
  //lert(this.link.nome)
  ///alert("chegou aqui 2")
  Link.salvar(this.link).then(resposta =>{
    this.resposta = resposta

    //limpar objeto
    //this.link={}
    alert('Salvo com Sucesso!')

    //LISTA DEPOIS DE SALVAR
    this.listar(this.link)
  })

  },


  //deletar 

  remover(link){

   

  if(confirm('Deseja pagar?')){
      this.link = link
   Link.apagar(link).then(resposta =>{
     this.resposta = resposta
        this.listar();
      })
  }

  }
}



 }




</script>






<style>

</style>
