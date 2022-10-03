// interface (giao diện) là một cấu trúc hoạt động như một bản hợp đồng trong ứng dụng.
// Nó định nghĩa cú pháp cho các lớp tuân theo,
// có nghĩa là một lớp triển khai (implements) một interface được ràng buộc để triển khai tất cả các thành viên của nó.

// Cấu trúc
// interface interface_name {
//           // variables' declaration
//           // methods' declaration
// }
//Interface: là một từ khóa được sử dụng để khai báo TypeScript Interface
// Interface_name: là tên của interface
// Phần thân interface chứa các khai báo về biến và phương thức.

interface OS{
    name:string;
    language:string;
}
let OperatingSystem = (type:OS):void => {
    console.log('Android'+type.name + 'has' + type.language + 'language');
};
let Oreo = {name: 'O',language:'Java'};
OperatingSystem(Oreo)
