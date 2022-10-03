import {Street} from "../Model/Street";
import {HouseHold} from "../Model/HouseHold";
import {Person} from "../Model/Person"

let input = require('readline-sync');
let street = new Street(1, 'A')
let houseHold = new HouseHold(1,12,'HN')


function Start() {
    let menu = `-------Menu Khu Pho------- \n1.Thêm Nhà \n2.Danh sách nhà \n3.Nhà lớn hơn 2 thành viên \n4.Tìm Ninh\n5.Thêm người \n0.Thoát`;
    let choice;
    let houseHold: HouseHold = street.findByIndex(choice - 1)
    do {
        console.log(menu);
        choice = +input.question('Nhap vao lua chon: ')
        switch (choice) {
            case 1:
                addHouseHold()
                break;
            case 2:
                showHouseHold()
                break;
            case 3:
                showInfoFamily();
                break;
            case 4:
                showNinh();
                break;
            case 5:
                menuHouseHold(houseHold)
        }

    } while (choice != 0)
}

function showNinh() {
    street.findA()
}

function showInfoFamily() {
    let families = street.findMemberThan2();
    for (let i = 0; i < families.length; i++) {
        console.log(`Nhà ${families[i].id} có Thành viên`)
        for (let j = 0; j < families[i].listPerson.length; j++) {
            console.log(`Tên : ${families[i].listPerson[j].name}`)
        }

    }
}

function addHouseHold() {
    let menu = `-----Thêm Nhà-----`;
    console.log(menu)
    let id = +input.question('Nhap vao ID: ')
    let member = +input.question('Nhap vao Member')
    let address = input.question('Nhap vao dia chi : ')
    let houseHold: HouseHold = new HouseHold(id,member, address);
    street.add(houseHold)
}

function showHouseHold() {
    let listHouseHold = street.findAll();
    for (let i = 0; i < listHouseHold.length; i++) {
        console.log(`${i + 1} : id : ${listHouseHold[i].id} Dia chi: ${listHouseHold[i].address}`)
    }
    console.log('0.Thoat');
    let choice = +input.question('Nhap lua chon cua ban: ')
    if (choice == 0) {
        Start()
    } else {
        let houseHold: HouseHold = street.findByIndex(choice - 1)
        menuHouseHold(houseHold)
    }
}

function menuHouseHold(houseHold: HouseHold) {
    let menu = `------Menu Nhà------ \n1.Thêm Thành Viên \n2.Hiển thị thành viên\n0.Quay Lại`
    let choice;
    while (choice != 0) {
        console.log(menu)
        choice = +input.question('Nhap vao lua chon: ')
        switch (choice) {
            case 1:
                addPerson();
                break;
            case 2:
                showPerson(houseHold);
                break;
            case 0:
                break;
        }
    }
}

function showPerson(houseHold: HouseHold) {
    for (let i = 0; i < houseHold.listPerson.length; i++) {
        console.log(`${i + 1}  id: ${houseHold.listPerson[i].id} name: ${houseHold.listPerson[i].name} `)
    }
}

function addPerson() {
    let id:number = +input.question('Nhap vao ID: ');
    let name:string = input.question('Nhap vao ten: ');
    let age:number = +input.question('Nhap vao tuoi: ');
    let job:string = input.question('Nhap vao cong  viec: ');
    let personNew = new Person(id,name,age,job);
    houseHold.add(personNew)
}

function main() {
    Start();
}

main()