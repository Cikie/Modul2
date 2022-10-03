import {ManagePerson} from "../sevice/ManagePerson";
import {ManagerCity} from "../sevice/ManagerCity";
import {People} from "../Model/People";

class Main {
    input = require('readline-sync');
    managerPeople: ManagePerson = new ManagePerson();
    managerCity: ManagerCity = new ManagerCity();

    menu() {
        let menu = `
                    1.them nguoi
                    2.hien thi thong tin nguoi
                    ---------------------------------------
                    `
        let choice: number;
        do {
            console.log(menu);
            choice = +this.input.question("nhap lua chon: ");
            switch (choice) {
                case 1:
                    let id = +this.input.question("Nhap vao id: ");
                    let name = this.input.question("Nhap vao ten: ");
                    let age = +this.input.question("Nhap vao tuoi: ");
                    this.managerCity.findAll();
                    let indexOfCity = +this.input.question("Nhap vao stt tinh: ")
                    this.managerPeople.add(new People(id, name, age, this.managerCity.findByIndex(indexOfCity - 1)));
                    break;
                case 2 :
                    this.managerPeople.findAll();
                    break;
            }
        } while (choice != 0);
    }
}

let main = new Main();
main.menu();