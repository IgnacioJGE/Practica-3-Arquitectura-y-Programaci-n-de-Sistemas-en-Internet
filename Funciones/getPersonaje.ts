import {datainteresante}from "../Funciones/getNombres.ts" ;



export const getPersonaje = async (idf: string): Promise<datainteresante> => {

    const URL = "https://rickandmortyapi.com/api/character";
    const URL_final= `${URL}/${idf}`
    const data = await fetch(URL_final);
  
    if (data.status !== 200) {
      throw new Error;
    }
  
    const jsondata= await data.json();
   
  


    return {
      id: jsondata.id,
      name: jsondata.name,
      status:jsondata.status ,
      species: jsondata.species,
      gender: jsondata.gender,
    }  ;

  }
