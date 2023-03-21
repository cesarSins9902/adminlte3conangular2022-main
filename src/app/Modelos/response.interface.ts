export interface ResponseIn{
    response: any;
    msg: any;
    token:string;
    error: any;
    user: any;
    status:any;
    alumno:Alumno;




}
export interface Alumno{
  control: number;
  alupas: string;
}
