"use strict";
// Thuộc tính nhân viên : id,họ tên,ngày sinh,địa chỉ,...
//Phương thức: Get,set
//Lớp quản lý nhân sự
//Thuộc tính Mảng các nhân viên
// Phương thức : Thêm nhân sự,xem chi tiết,xóa nhân sự,chỉnh sửa thông tin 1 nhân sự
///CRUD : create,read,update,delete
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(ID, name, dateOfBirth, address, role) {
        this._ID = ID;
        this._name = name;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._role = role;
    }
    Object.defineProperty(Staff.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (value) {
            this._ID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "dateOfBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        set: function (value) {
            this._dateOfBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}());
exports.Staff = Staff;
