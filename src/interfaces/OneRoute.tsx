export default interface OneRoute{
    name:String,
    icon?:string,
    path?:string,
    element?:any,
    children?:OneRoute[]
}