type Tareas={
    id:string;
    name:String;
    estado:Fases
}
type Fases={
    Pendiente:"pendiente";
    Proceso:"proceso";
    Finalizado:"finalizado";
}
type ErrorResponse={
    status:"ERROR"
    message:string
}
type ValidacionError={
    status:"VALIDACION_ERROR"
    messages:string
}
type SuccessResponse<T> = {
    status: "SUCCESS";
    data: T;
  };

const Tareas=()=>{

}
