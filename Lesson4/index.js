// let arr = [1, 2, "three", true, null];
// //         0  1     2       3     4
// // Truy vấn
// console.log(arr[2]);

// // Duyệt danh sách
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let numbers = [1, 2, 3, 4, 5];
// // Thêm phần tử mới vào cuối mảng
// numbers.push(10, 20);
// console.log(numbers);

// // Cập nhật giá trị mới cho phần từ
// numbers[2] = 30
// console.log(numbers);

// let fruits = ["apple", "banana", "orange", "grape"];
// // Tìm kiếm phần tử
// console.log(fruits.indexOf("banana")) // chỉ số 1
// console.log(fruits.indexOf("grape")) // chỉ số 3
// console.log(fruits.indexOf("melon")) // không có thì in ra -1


// let text = ["a", "b", "c", "d"];
// text.splice(1, 2, "Phần tử mới", "abc");
// console.log(text);


// let person = {
//     fisrtName: "John",
//     lastName: "Wick",
//     age:    50
// }

// // Truy cập các thuộc tính của đối tượng.
// console.log(person.fisrtName);
// console.log(person["lastName"]);

// // Thêm/sửa cặp key - value mới cho objects.
// person.job = "Developer";
// person.age = 60;

// // Kiểm tra xem 1 key có nằm trong object hay không
// if ("age" in person) {
//     console.log("YES");
// }
// else console.log('NO');

// // Xoá key
// delete person.job;
// console.log(person);


let hocsinh = [
    {ten: "An", tuoi: 15, lop: "10A1"},
    {ten: "Binh", tuoi: 16, lop: "11A2"},
    {ten: "Châu", tuoi: 15, lop: "10A1"}
]

hocsinh.push({ten: "Dũng", tuoi: 17, lop: "11A3"});

for (let i = 0; i < hocsinh.length; i ++){
    console.log(`Tên: ${hocsinh[i].ten}; Tuổi: ${hocsinh[i].tuoi}; Lớp: ${hocsinh[i].lop}`);
}

hocsinh[1].tuoi = 17;

hocsinh.splice(2, 1);
console.log(hocsinh);

let element = document.getElementById("heading");
element.style.color = "red";
element.innerHTML = "New heading";

let new_text = document.getElementById("information");
new_text.innerHTML = "<p>My full name is Đào Trung Kiên</p>"