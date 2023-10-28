export type personajes={
    results: datainteresante 
}
export type datainteresante={
    id: number,
    name: string,
    status:string ,
    species: string,
    gender: string,


}
export const getNombres = async (pagina: string): Promise<string[]> => {

    const URL = "https://rickandmortyapi.com/api/character";
    const URL_final= `${URL}/?page=${pagina}`
    const data = await fetch(URL_final);
  
    if (data.status !== 200) {
      throw new Error;
    }
  
    const jsondata = await data.json();
  
    const characters = jsondata.results;
  
    const dataInteresanteArray: datainteresante[] = characters.map((character: any) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender
    }));
  const nombresddatainteresante: string[]=dataInteresanteArray.map((dataInteresanteArray:any)=>(dataInteresanteArray.name))
    return nombresddatainteresante;

  }

  