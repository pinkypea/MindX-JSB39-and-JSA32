// function sayHello() {
//     console.log("Hello World!!!");
// }
// sayHello();

// function add(a, b) {
//     return a + b;
// }
// let result = add(5, 3);
// console.log(result);

// Bài 1
function tinh_tong(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

let result = tinh_tong(10);
console.log(result);

// Bài 4
function convert_to_F(value) {
    var F = value * 1.8 + 32;
    return F;
}

// Lưu trữ giá trị vào local storage
localStorage.setItem("name", "Kiên");
// Truy vấn giá trị
let test = localStorage.getItem("name");
console.log(test);
// Xoá 1 giá trị trong local storage
localStorage.removeItem("name");
// Xoá tất cả giá trị trong local storage
localStorage.clear();

let user = {
    username: "MindX_School",
    password: "107NPS",
    age: 5,
    phoneNumber: "0987654321"
}
// Lưu dữ liệu thông qua JSON vào local storage
localStorage.setItem("user", JSON.stringify(user));

// Lấy dữ liệu từ local storage thông qua JSON
let test_localStorage = JSON.parse(localStorage.getItem("user"));
console.log(test_localStorage);