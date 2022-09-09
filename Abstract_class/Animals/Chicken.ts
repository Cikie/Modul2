import {Animal} from "./Class_Animal";
import {Edible} from "./Edible";

export class Chicken extends Animal implements Edible{
    makeSound():string {
        return "Chicken: bock bock"
    }
    howToEat():string{
        return "Could be fried"
    }
}