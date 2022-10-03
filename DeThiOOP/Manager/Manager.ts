export interface Manager<T>{
    add(t:T);
    remove(id:number);
    findAll();
    findByName(name:string);
    findById(id:number);
    replate(id:number,name:string,type:string,price:number,amount:number,date:number,detail:string)
}