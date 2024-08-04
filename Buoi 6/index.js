// Khai báo 2 biến số là chiều rộng và chiều dài của 1 Hình chữ nhật.
// Trong đó width = 2, length = 5. Hãy tính chu vi và diện tích của HCN này.

// const PI = 3.14
// PI = PI + 2
// console.log(PI)
// var b = 20
// {
//     let a = 10
//     console.log(a) // 10
//     console.log(b)
// }
// console.log(a) // a is not defined

// Khai báo biến n = 10
// Kiểm tra xem n có phải số chẵn hay không.
// Nếu đúng in ra là "YES", nếu sai in ra là "NO".

// let n = 10;
// if (n % 2 == 0){
//     console.log("YES")
// }
// else {
//     console.log("NO")
// }

// Khai báo biến age = 50.
// Kiểm tra và in ra màn hình:
// - "Thieu nhi" nếu 0 <= age < 10
// - "Thieu nien" nếu 10 <= age < 18
// - "Thanh nien" nếu 18 <= age < 40
// - "Trung nien" nếu 40 <= age < 65
// - "Lao nien" nếu 65 <= age

// let age = 50;
// if (0 <= age && age < 10) {
//     console.log("Thieu nhi");
// }
// else if (10 <= age && age < 18){
//     console.log("Thieu nien");
// } 
// else if (18 <= age && age < 40) {
//     console.log("Thanh nien");
// }
// else if (40 <= age && age < 65) {
//     console.log("Trung nien");
// }
// else {
//     console.log("Lao nien");
// }

// Bạn V có điểm:
// - Toán: 9
// - Văn: 7
// - Tiếng Anh: 8
// - Lý 7.5
// - Hoá: 6
// - Sử: 6.8
// - Địa: 8.2
// Tính điểm trung bình của bạn V và kiểm tra danh hiệu:
// - Nếu 10 >= điểm >= 8 thì "Giỏi"
// - Nếu 8 > điểm >= 6.5 thì "Khá"
// - Nếu 6.5 > điểm >= 4 thì "Trung bình"
// - Nếu 4 > điểm thì "Yếu"

// let toan = 9
// let van = 7
// let anh = 8
// let ly = 7.5
// let hoa = 6
// let su = 6.8
// let dia = 8.2
// let diem_trung_binh = (toan + van + anh + ly + hoa + su + dia) / 7
// console.log(diem_trung_binh)
// if (10 >= diem_trung_binh && diem_trung_binh >= 8) {
//     console.log("Giỏi")
// }
// else if (8 > diem_trung_binh && diem_trung_binh >= 6.5) {
//     console.log("Khá")
// }
// else if (6.5 > diem_trung_binh && diem_trung_binh >= 4) {
//     console.log("Trung bình")
// }
// else if (4 > diem_trung_binh){
//     console.log ("Yếu")
// }

// Khai báo biến year = 2024
// Kiểm tra xem year có phải năm nhuận hay không?
// Biết năm nhuận là năm chia hết cho 400, 
// hoặc chia hết cho 4 nhưng không chia hết cho 100

// 2000: có
// 2008: Có
// 2100: Không

let year = 2024
if (year % 400 == 0) {
    console.log("YES")
}
else if (year % 4 == 0 && year % 100 != 0) {
    console.log("YES")
}
else {
    console.log("NO")
}