console.log("Xin chào các bạn");

let x = 20;
let y = 10;

// Tính x + y, x - y, x * y, x / y, x % y
// Gộp chuỗi
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result);

// Tính độ dài của chuỗi
console.log(result.length);

// Tách 1 chuỗi thành 1 mảng
let string = "apple,banana,orange"
let subString = string.split(",")
console.log(subString)

// Viết hoa các ký tự trong 1 string
let text = "hello world";
console.log(text.toUpperCase());

// Viết thường các ký tự trong 1 string
let text = "HELLO WORLD";
console.log(text.toLowerCase());

// Loại bỏ các phần khoảng trắng thừa ở đầu và cuối string
let text = "        Hello World            ";
let trimmedText = text.trim();
console.log(trimmedText);
console.log(trimmedText.length);