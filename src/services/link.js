import{http} from './linkConfg'

export default {

//listar pastas 

listar:(link)=>{
    //Passar end-point listar pastas
   // link.pastaLink.id =2

  /// alert (link.pastaLink.id)
    return http.get("listar/"+link.pastaLink.id)
},



salvar:(link)=>{
    return http.post('salvar',link)
},



apagar:(link)=>{
    return http.delete('deletar',{data: link} )
   }

}