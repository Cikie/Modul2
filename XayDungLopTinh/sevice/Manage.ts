export interface Manage<T>{
    add(t:T);
    findAll();
    findByIndex(index:number):T;
    findById(id:number):T;
}