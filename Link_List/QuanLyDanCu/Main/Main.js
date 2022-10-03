"use strict";
exports.__esModule = true;
var Street_1 = require("../Model/Street");
var HouseHold_1 = require("../Model/HouseHold");
var Person_1 = require("../Model/Person");
var input = require('readline-sync');
var street = new Street_1.Street(1, 'A');
function Start() {
    var menu = "-------Menu Khu Pho------- \n1.Th\u00EAm Nh\u00E0 \n2.Danh s\u00E1ch nh\u00E0 \n3.Nh\u00E0 l\u1EDBn h\u01A1n 2 th\u00E0nh vi\u00EAn \n4.T\u00ECm Ninh\n5.Th\u00EAm ng\u01B0\u1EDDi \n0.Tho\u00E1t";
    var choice;
    var houseHold = street.findByIndex(choice - 1);
    do {
        console.log(menu);
        choice = +input.question('Nhap vao lua chon: ');
        switch (choice) {
            case 1:
                addHouseHold();
                break;
            case 2:
                showHouseHold();
                break;
            case 3:
                showInfoFamily();
                break;
            case 4:
                showNinh();
                break;
            case 5:
                menuHouseHold(houseHold);
        }
    } while (choice != 0);
}
function showNinh() {
    street.findA();
}
function showInfoFamily() {
    var families = street.findMemberThan2();
    for (var i = 0; i < families.length; i++) {
        console.log("Nh\u00E0 ".concat(families[i].id, " c\u00F3 Th\u00E0nh vi\u00EAn"));
        for (var j = 0; j < families[i].listPerson.length; j++) {
            console.log("T\u00EAn : ".concat(families[i].listPerson[j].name));
        }
    }
}
function addHouseHold() {
    var menu = "-----Th\u00EAm Nh\u00E0-----";
    console.log(menu);
    var id = +input.question('Nhap vao ID: ');
    var address = input.question('Nhap vao dia chi : ');
    var houseHold = new HouseHold_1.HouseHold(id, address);
    street.add(houseHold);
}
function showHouseHold() {
    var listHouseHold = street.findAll();
    for (var i = 0; i < listHouseHold.length; i++) {
        console.log("".concat(i + 1, " : id : ").concat(listHouseHold[i].id, " Dia chi: ").concat(listHouseHold[i].address));
    }
    console.log('0.Thoat');
    var choice = +input.question('Nhap lua chon cua ban: ');
    if (choice == 0) {
        Start();
    }
    else {
        var houseHold = street.findByIndex(choice - 1);
        menuHouseHold(houseHold);
    }
}
function menuHouseHold(houseHold) {
    var menu = "------Menu Nh\u00E0------ \n1.Th\u00EAm Th\u00E0nh Vi\u00EAn \n2.Hi\u1EC3n th\u1ECB th\u00E0nh vi\u00EAn\n0.Quay L\u1EA1i";
    var choice;
    while (choice != 0) {
        console.log(menu);
        choice = +input.question('Nhap vao lua chon: ');
        switch (choice) {
            case 1:
                addPerson(houseHold);
                break;
            case 2:
                showPerson(houseHold);
                break;
            case 0:
                break;
        }
    }
}
function showPerson(houseHold) {
    for (var i = 0; i < houseHold.listPerson.length; i++) {
        console.log("".concat(i + 1, "  id: ").concat(houseHold.listPerson[i].id, " name: ").concat(houseHold.listPerson[i].name, " "));
    }
}
function addPerson(houseHold) {
    var id = +input.question('Nhap vao ID: ');
    var name = input.question('Nhap vao ten: ');
    var age = +input.question('Nhap vao tuoi: ');
    var job = input.question('Nhap vao cong  viec: ');
    var personNew = new Person_1.Person(id, name, age, job);
    houseHold.add(personNew);
}
function main() {
    Start();
}
main();
