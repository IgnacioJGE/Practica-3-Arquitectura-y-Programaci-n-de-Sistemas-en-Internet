import { datainteresantelugares } from "./getLugares.ts";
import { arraydelugares } from "../API/RickyMorty.ts";

export const filterPlacetype =  (typebusqueda: string):Promise<datainteresantelugares[]>=> {
  const arraytype: datainteresantelugares[]= []

  for (let index = 0; index < arraydelugares.length; index++) {
   
      if (arraydelugares[index].type==typebusqueda) {
        arraytype.push(arraydelugares[index])
       }

}
  
    return Promise.resolve(arraytype);

  }
  export const filterPlacedimesion =  (generobusqueda: string):Promise<datainteresantelugares[]>=> {
    const arraydimension: datainteresantelugares[]= []
  
    for (let index = 0; index < arraydelugares.length; index++) {
     
        if (arraydelugares[index].dimesion==generobusqueda) {
          arraydimension.push(arraydelugares[index])
         }
  
  }
    
      return Promise.resolve(arraydimension);
  
    }