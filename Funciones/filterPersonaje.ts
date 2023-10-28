import {datainteresante}from "../Funciones/getNombres.ts" ;
import {arraydepersonajes } from "../API/RickyMorty.ts";

export const filterPersonajestatus =  (statusbusqueda: string):Promise<datainteresante[]>=> {
  const arrayestatus: datainteresante[]= []

  for (let index = 0; index < arraydepersonajes.length; index++) {
   
      if (arraydepersonajes[index].status==statusbusqueda) {
        arrayestatus.push(arraydepersonajes[index])
       }

}
  
    return Promise.resolve(arrayestatus);

  }
  export const filterPersonajegenero =  (generobusqueda: string):Promise<datainteresante[]>=> {
    const arraygenero: datainteresante[]= []
  
    for (let index = 0; index < arraydepersonajes.length; index++) {
     
        if (arraydepersonajes[index].gender==generobusqueda) {
          arraygenero.push(arraydepersonajes[index])
         }
  
  }
    
      return Promise.resolve(arraygenero);
  
    }