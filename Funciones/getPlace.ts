import {datainteresantelugares}from "../Funciones/getLugares.ts" ;



export const getPlace = async (idf: string): Promise<datainteresantelugares> => {

    const URL = "https://rickandmortyapi.com/api/location";
    const URL_final= `${URL}/${idf}`
    const data = await fetch(URL_final);
  
    if (data.status !== 200) {
      throw new Error;
    }
  function Fecha(cadenaFecha: string): string {
 
    const fecha =  cadenaFecha.slice(0,10)
    const dia= fecha.slice(8,10)
    const mes=fecha.slice(5,7)
    const año=fecha.slice(0,4)

  
    return `${dia}:${mes}:${año}`;
  }
    const jsondata= await data.json();
   
  


    return {
      id: jsondata.id,
      name: jsondata.name,
      type:jsondata.type ,
      dimesion: jsondata.dimension,
      created: Fecha(jsondata.created),
    }  ;

  }
