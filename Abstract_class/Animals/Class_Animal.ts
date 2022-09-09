export abstract class  Animal{
    abstract makeSound();

}
import {Tigers} from "./Tigers";
import {Chicken} from "./Chicken";
import {Apple} from "./Fruits";
import {Orange} from "./Fruits";

console.log('---Animals---')

let animal = []
animal[0] = new Tigers();
animal[1] = new Chicken();

animal.forEach((item,index) =>{
    console.log(item.makeSound())
    if(item instanceof Chicken){
        console.log(item.howToEat())
    }
})

console.log('---Fruits---')
let fruits = [];

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach(item =>{
    console.log(item.howToEat())
})