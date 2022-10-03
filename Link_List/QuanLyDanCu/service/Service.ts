export interface Service<T>{
    add(t:T);
    findAll();
    edit(id:number,t:T);
    findById(id:number);
}