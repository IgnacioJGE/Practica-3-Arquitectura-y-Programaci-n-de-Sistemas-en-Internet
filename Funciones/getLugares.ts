
export type personajes={
    results: datainteresantelugares[]
}
export type datainteresantelugares={
    id: number,
    name: string,
    type:string ,
    dimesion: string,
    created: string,

}
export const getLugares = async (pagina: string): Promise<string[]> => {

    const URL = "https://rickandmortyapi.com/api/location";
    const URL_final= `${URL}/?page=${pagina}`
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
    const jsondata = await data.json();
  
    const lugares = jsondata.results;
  
    const dataInteresanteArray: datainteresantelugares[] = lugares.map((character: any) => ({
      id: character.id,
      name: character.name,
      type: character.type,
      dimension: character.dimension,
      created: Fecha(character.created)
    }));
  const lugaresdatainteresante: string[]=dataInteresanteArray.map((dataInteresanteArray:any)=>(dataInteresanteArray.name))
    return lugaresdatainteresante;

  }

  