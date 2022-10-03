"use strict";
exports.__esModule = true;
var City_1 = require("../Model/City");
var People_1 = require("../Model/People");
var input = require('readline-sync');
var city1 = new City_1.City(1, 'Hà Nội', 120, 3000000);
var city2 = new City_1.City(2, 'Hải Phòng', 80, 1500000);
var city3 = new City_1.City(3, 'Quảng Ninh', 100, 2000000);
var city4 = new City_1.City(4, 'Thái Bình', 60, 1000000);
var city5 = new City_1.City(5, 'Đà Nẵng', 100, 2500000);
function start() {
    var menu = "------Menu Th\u00E0nh Ph\u1ED1------\n1.Ch\u1ECDn T\u1EC9nh: \n2.Th\u00F4ng tin danh s\u00E1ch ng\u01B0\u1EDDi\n3.T\u1EC9nh v\u00E0 s\u1ED1 ng\u01B0\u1EDDi thu\u1ED9c t\u1EC9nh:  ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Text City Choice :");
        switch (choice) {
            case 1:
                menuPeople();
                break;
            case 2:
                showTotalPeople();
                break;
            case 3:
                break;
        }
    } while (choice != 0);
}
function menuPeople() {
    var menu = "---Th\u00EAm Ng\u01B0\u1EDDi---\n\n    1.Add to H\u00E0 N\u1ED9i\n\n    2.Add to H\u1EA3i Ph\u00F2ng\n\n    3.Add to  Qu\u1EA3ng Ninh\n\n    4.Add to  Th\u00E1i B\u00ECnh\n\n    5.Add to  \u0110\u00E0 N\u1EB5ng\n    0.Quay l\u1EA1i";
    var choice;
    while (choice != 0) {
        console.log(menu);
        choice = +input.question("Text People Choice: ");
        switch (choice) {
            case 1:
                city1 = addPeople(city1);
                break;
            case 2:
                city2 = addPeople(city2);
                break;
            case 3:
                city3 = addPeople(city3);
                break;
            case 4:
                city4 = addPeople(city4);
                break;
            case 5:
                city5 = addPeople(city5);
                break;
            case 6:
                break;
        }
    }
    function addPeople(city) {
        var id = +input.question("Input ID: ");
        var name = input.question("Input Name: ");
        var age = +input.question("Input Age: ");
        var person = new People_1.People(id, name, age, city);
        city.add(person);
        return city;
    }
}
function showPeople(city) {
    for (var i = 0; i < city.listPeople.length; i++) {
        console.log("".concat(i + 1, " \n         -id:").concat(city.listPeople[i].id, "\n         -name:").concat(city.listPeople[i].name, "\n         -age:").concat(city.listPeople[i].age, "\n         -city:").concat(city.listPeople[i].city.name));
    }
}
function showTotalPeople() {
    var menu = "---Th\u00EAm Ng\u01B0\u1EDDi---\n\n    1.Show form H\u00E0 N\u1ED9i\n\n    2.Show form H\u1EA3i Ph\u00F2ng\n\n    3.Show form Qu\u1EA3ng Ninh\n\n    4.Show form Th\u00E1i B\u00ECnh\n\n    5.Show form \u0110\u00E0 N\u1EB5ng\n    0.Quay l\u1EA1i";
    var choice;
    while (choice != 0) {
        console.log(menu);
        choice = +input.question("Text Choice: ");
        switch (choice) {
            case 1:
                showPeople(city1);
                break;
            case 2:
                showPeople(city2);
                break;
            case 3:
                showPeople(city3);
                break;
            case 4:
                showPeople(city4);
                break;
            case 5:
                showPeople(city5);
                break;
            case 6:
                break;
        }
    }
}
start();
