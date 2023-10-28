import { datainteresante } from "./getNombres.ts";
import { datainteresantelugares } from "./getLugares.ts";
import { arraydelugares } from "../API/RickyMorty.ts";
import { arraydepersonajes } from "../API/RickyMorty.ts";


export const deletePersonaje=  (ideliminar: string):datainteresante[]=> {
const idelim=Number(ideliminar)
const arraynuevo = arraydepersonajes.filter(datainteresasnte => datainteresasnte.id !== idelim);

      return arraynuevo;
  
    }
    export const deleteLugar=  (ideliminar: string):datainteresantelugares[]=> {

        const idelim=Number(ideliminar)
        const arraynuevo = arraydelugares.filter( datainteresantelugares=> datainteresantelugares.id !== idelim);


              return arraynuevo;
          
            
    }
        