import {Edible} from "./Edible";

export abstract class Fruit implements Edible{
    abstract howToEat(): string
}
export class Apple extends Fruit{
    howToEat(): string {
        return "Apple could be slided";
    }
}
export class Orange extends Fruit{
    howToEat(): string {
        return "Orange could be juiced";
    }
}