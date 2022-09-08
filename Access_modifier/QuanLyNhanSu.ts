// Thuộc tính nhân viên : id,họ tên,ngày sinh,địa chỉ,...
//Phương thức: Get,set
//Lớp quản lý nhân sự
//Thuộc tính Mảng các nhân viên
// Phương thức : Thêm nhân sự,xem chi tiết,xóa nhân sự,chỉnh sửa thông tin 1 nhân sự
///CRUD : create,read,update,delete

import {Role} from "./role";

export  class  Staff {
    private _ID: number;
    private _name:string;
    private _dateOfBirth:string;
    private _address:string;
    private _role: Role


    constructor(ID: number, name: string, dateOfBirth: string, address: string, role: Role) {
        this._ID = ID;
        this._name = name;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._role = role;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get role(): Role {
        return this._role;
    }

    set role(value: Role) {
        this._role = value;
    }
}