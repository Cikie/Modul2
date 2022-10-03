import {Staff} from "./QuanLyNhanSu";
import {employeeManager} from "./employee";
import {Role} from "./role";

function main(){
    let  staff: Staff = new Staff( 1,"Nguyen Van A","10/9/1997","Vinh",Role.CEO);
    let  staff2: Staff = new Staff( 2,"Nguyen Van B","10/9/2002","Vinh",Role.Sale);
    let  staff3: Staff = new Staff( 3,"Nguyen Van C","10/9/2005","Vinh",Role.Sale);

    employeeManager.add(staff);
    employeeManager.add(staff2);
    employeeManager.add(staff3);
    console.log(employeeManager.show())
    employeeManager.deleteByFilter(3)
    console.log("Sau Xoa");
    console.log(employeeManager.show())
    employeeManager.edit(2,"Minh Em");
    console.log(employeeManager.show())
}
main()