class Detalle{
    /*
    LOs detalles de eventos  id,titulo,descripcion,fecha,ubicacion,agregando id para que sea mas facil de eliminar
    y edita los eventos.
    */
    constructor(id,titulo,descripcion,fecha,ubicacion){
        this.id=id,
        this.titulo=titulo,
        this.descripcion=descripcion,
        this.fecha=fecha,
        this.ubicacion=ubicacion
    }
    /*En este pudo se realiza el editaeventos  se utiliza el tiutlo*/
    editarEves(Editaevento){
        if (Object.values(Detalle.titulo)) {
            this.titulo =Editaevento;
        } else {
            throw new Error("EL evento no se puede editar");
        }
    }
}
class Eventos{
    constructor(){
        this.eventos=[]
    }
    agregareventos(evento){
        /* Se uitliza promise para simular el crear un nuevo evento*/
        return new Promise((resolve,reject)=>{
            try {
                process.nextTick(()=>
               {
                this.eventos.push(evento)//Se se agrega el evento creado en una lista 
                resolve(evento)
               } )
            } catch (error) {
                reject(error)// caso contrario si no se agrega resulta un mensaje de error
            }
        })

    }
/*
Editar el evento con el id y tituloactual por el cual es replazado 
*/
    editar(id,tituloactual){
        return new Promise((resolve,reject)=>{
            const even=this.eventos.findIndex(d=>d.id===id )
            if(even.eventos===Detalle.id){
               even.editarEves(this.titulo===tituloactual)//se llama el editasEVes se vuelve a utilizar
                resolve(even)
            }
            else{
                reject(new Error ("EL evento no puede ser editado"))
            }
        })
    }

    eliminareventos(id){
        const index = eventos.findIndex(eventid => eventid.id ===id);
        return delete this.id
    }
}

const prob1=new Eventos()
const nuevoevento=new Detalle(1,"Tarea","Proyectos",2024,"Lima")


async function agregarEvent() {
    try {
        const nuevoevento = new Detalle(1,"Tarea","Proyectos",2024,"Lima")        ;
        const EVentoAgregado = await prob1.agregareventos(nuevoevento);
        console.log(`Evento añadido: ${EVentoAgregado.titulo}`);
    } catch (error) {
        console.error("Error al añadir el evento:", error);
    }
  prob1.editar(1,"cocina")
   .then(evs => {
        console.log(`evento editado: ${evs.titulo}`);
        return nuevoevento.prob1.editar(1,"cocinar");
    })
    .then(ev => {
        console.log(`evento edliminado: ${ev.id}`);
        return nuevoevento.prob1.eliminareventos(1);
    })
    .catch(err => console.error(err));

    
}
agregarEvent()
