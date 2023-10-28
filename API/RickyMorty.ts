
import espress,{Request,Response} from "npm:express@4.18.2"
import {getNombres}from "../Funciones/getNombres.ts" ;
import{getPersonaje} from "../Funciones/getPersonaje.ts"
import{getLugares} from "../Funciones/getLugares.ts"
import{getPlace} from "../Funciones/getPlace.ts"
import {datainteresante}from "../Funciones/getNombres.ts" ;
import {datainteresantelugares}from "../Funciones/getLugares.ts" ;
import { filterPersonajestatus } from "../Funciones/filterPersonaje.ts";
import { filterPersonajegenero } from "../Funciones/filterPersonaje.ts";
import { filterPlacetype } from "../Funciones/filterPlace.ts";
import { filterPlacedimesion } from "../Funciones/filterPlace.ts";
import { deleteLugar } from "../Funciones/deletes.ts";
import { deletePersonaje } from "../Funciones/deletes.ts";
const miapp= espress();
export let  arraydepersonajes: datainteresante[]=[];
export let  arraydelugares: datainteresantelugares[]=[];

miapp.get("/Nombres/:page?",async (req:Request, res: Response) => {// recibe una peticion de zip
            try{
            const pag= req.params.page;
          const names= await getNombres(pag)
          res.send(names)
            }catch(c){
                res.status(400)
                console.log(c)
            }
          })
          .get("/Personaje/:id?",async (req:Request, res: Response) => {
            try{
            const Id= req.params.id;
          
          const idnum= Number(Id)
          if(arraydepersonajes.find(datainteresante =>datainteresante.id=== idnum)){
            
          res.send(arraydepersonajes.find(datainteresante =>datainteresante.id==idnum))
        }else{
            const persona= await getPersonaje(Id)

            arraydepersonajes.push(persona)
            res.send(persona)

          }
            }catch(c){
                res.status(400)
                console.log(c)
            }
          })
          .get("/Lugares/:page?",async (req:Request, res: Response) => {// recibe una peticion de zip
            try{
            const pag= req.params.page;
          const names= await getLugares(pag)
          res.send(names)
            }catch(c){
                res.status(400)
                console.log(c)
            }
          })
          .get("/Place/:id?",async (req:Request, res: Response) => {// recibe una peticion de zip
            try{
            const Id= req.params.id;
          
          const idnum= Number(Id)
          if(arraydelugares.find(datainteresantelugares =>datainteresantelugares.id=== idnum)){
          res.send(arraydelugares.find(datainteresantelugares =>datainteresantelugares.id=== idnum))//haciendo este send se envia solo desde memoria interna y no pasa por la llamada 
        }else{
            const lugar= await getPlace(Id)
            arraydelugares.push(lugar)
            res.send(lugar)

          }

            }catch(c){
                res.status(400)
                console.log(c)
            }
          })

          .get("/MisLugares",async (req:Request, res: Response) => {// recibe una peticion de zip
            try{

          res.send(arraydelugares)
            }catch(c){
                res.status(400)
                console.log(c)
            }
          })
          .get("/MisPersonajes",async (req:Request, res: Response) => {// recibe una peticion de zip
            try{

          res.send(arraydepersonajes)
            }catch(c){
                res.status(400)
                console.log(c)
            }
          })
          .get("/StatusPersonajes/:status",async (req:Request, res: Response) =>{
            try{
              const status= req.params.status;
            const arraystatuspersonajes= await filterPersonajestatus(status)
            res.send(arraystatuspersonajes)
              }catch(c){
                  res.status(400)
                  console.log(c)
              }
          })
          .get("/GeneroPersonajes/:genero",async (req:Request, res: Response) =>{
            try{
              const genero= req.params.genero;
            const arraygeneropersonajes= await filterPersonajegenero(genero)
            res.send(arraygeneropersonajes)
              }catch(c){
                  res.status(400)
                  console.log(c)
              }
          })
          .get("/TypeLugares/:type",async (req:Request, res: Response) =>{
            try{
              const type= req.params.type;
            const arraytypelugares= await filterPlacetype(type)
            res.send(arraytypelugares)
              }catch(c){
                  res.status(400)
                  console.log(c)
              }
          })
          .get("/DimensionLugares/:dimension",async (req:Request, res: Response) =>{
            try{
              const dimension= req.params.dimension;
            const arraydimensionlugares= await filterPlacedimesion(dimension)
            res.send(arraydimensionlugares)
              }catch(c){
                  res.status(400)
                  console.log(c)
              }
          })
          .get('/EliminarPersonaje/:id', (req: Request, res: Response) => {
            //Hago estas funciones con get en vez de con delete para que se puedan utilizar en localhost y no tener que usar postman
            try{
              const idef= req.params.id;
              if(arraydepersonajes.find(datainteresasnte => datainteresasnte.id == idef)){
            arraydepersonajes= deletePersonaje(idef)
            res.send(`Se ha eliminado el Personaje con Id ${idef}`);

              }else{
                res.send(`No se ha encontrado Personaje con Id ${idef}`);

              }
              }catch(c){
                  res.status(400)
                  console.log(c)
              }
          })
          .get('/EliminarLugar/:id', (req: Request, res: Response) => {
            try{
              const idef= req.params.id;
            if(arraydelugares.find( datainteresantelugares=> datainteresantelugares.id == idef)){
           arraydelugares= deleteLugar(idef)
   
            res.send(`Se ha eliminado el Lugar con Id ${idef}`);
            }else{
            res.send(`No se encuentra Lugar con Id ${idef}`);

              }
              }catch(c){
                  res.status(400)
                  console.log(c)
              }
            })
      
    miapp.listen(3000)