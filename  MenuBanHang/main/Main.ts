import {ManageProduct} from "../service/ManageProduct";
import {ManageCustomer} from "../service/ManageCustomer";
import {OrderDetailManage} from "../service/OrderDetailManage";
import {Customer} from "../model/Customer";
import {Product} from "../model/Product";
import {OrderDetail} from "../model/OrderDetail";

let listProduct: ManageProduct = new ManageProduct();
let listCustomer: ManageCustomer = new ManageCustomer();
let listOrder: OrderDetailManage = new OrderDetailManage();
let input = require(`readline-sync`);
function Mainmenu() {
    let menu = `------ Menu Chinh------\n
    1.Them,Sua,Xoa san pham
    2.Them Khach Hang
    3.Mua San Pham`
    let choice;

    do {
        console.log(menu);
        choice = +input.question('Nhap Vao Lua Chon : ');
        switch (choice) {
            case 1:
                showMenuProduct();
                break;
            case 2:
                addCustomer();
                break;
            case 3:
                buyProduct();
                break;
        }
    } while (choice != 0);
}

function addCustomer() {
    let id = +input.question('Nhap Vao ID Khach: ');
    let name = input.question('Nhap Vao Ten Khach: ');

    listCustomer.add(new Customer(name, id));
}

function showMenuProduct() {
    let menu = `-----Menu Product----\n
    1.Them
    2.Xoa
    3.Sua
    4.Hien Thi
    0.Thoat`
    let choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon vao : ');
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                let selectProductID = +input.question('vui long nhap id: ');
                removeProduct(selectProductID);
                break;
            case 3:

                break;
            case 4:
                showListProduct();
                break;

        }
    } while (choice != 0);
}

function removeProduct(id: number) {
    listProduct.remove(id);
}

function addProduct() {
    let id = +input.question('Nhap vao ID san Pham : ');
    let name = input.question('Nhap vao Ten san Pham : ');
    let quatity = +input.question('Nhap vao So Luong san Pham : ');
    let price = +input.question('Nhap vao Gia Tien san Pham : ');

    let product = new Product(id, name, quatity, price);
    listProduct.add(product);
}

function showListProduct() {
    console.log(listProduct.findAll());
}

function buyProduct() {
    let id = +input.question('Nhap ID khach hang: ');
    for (let i = 0; i < listProduct.productList.length; i++) {
        console.log(`
        ID: ${listProduct.productList[i].id}
          Name: ${listProduct.productList[i].name}
            Quatity ${listProduct.productList[i].quantity}
              Price ${listProduct.productList[i].price}`);
    }
    let idOrder = +input.question('Nhap ID hoa don : ');
    let idProduct = +input.question('Nhap ID San Pham : ');

    let product = listProduct.findByProductId(id);
    let amount = +input.question('Nhap vao so luong can mua: ');

    listProduct.update(idProduct, new Product(product.id, product.name, product.quantity - amount, product.price));

    let customer = listCustomer.findByCustomerId(id);
    let time = new Date();
    let today = `${time.getDate()}/${time.getMonth() + 1}`;

    product.quantity = amount;
    console.log(idOrder);
    let orderDetail = new OrderDetail(id, customer, today);
    let sumPrice = product.price * amount;
    orderDetail.add(product);
    listOrder.add(orderDetail);
    listOrder.findAll();
    console.log(`Tong Bill: ${sumPrice}`);


}



Mainmenu();