import{http} from './config'

export default {

//listar pastas 

listar:()=>{
    //Passar end-point listar pastas
    return http.get('listar')
},


//salvar um produto:
salvar:(pasta)=>{
    return http.post('salvar',pasta)
},


apagar:(pasta)=>{
 return http.delete('deletar',{data: pasta} )
}

}