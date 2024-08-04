// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("John");

// var min = function(a, b) {
//     return a < b ? a : b;
// }

// console.log(min(3, 4));

// function increase(number){
//     let x = 5;
//     number += x;
//     console.log(number);
// }

// let number = 3;
// increase(number);

// console.log(number);

// console.log(x);

// function check_leap_year(year) {
//     if (year % 400 == 0){
//         console.log("YES");
//     }
//     else if (year % 4 == 0 && year % 100 != 0){
//         console.log("YES");
//     }
//     else console.log("NO");
// }

// check_leap_year(2003);

// // Viết function để kiểm tra một số có chia hết cho 5 và cho 3 hay không

// function kiem_tra_so(number) {
//     if (number % 3 ==0){
//        console.log("YES");
//     }
//     else if (number % 5 == 0){
//        console.log("YES")
//     }
//     else console.log("NO")
// }
 
// kiem_tra_so(20)

// const h1 = document.getElementById('h1');
// h1.style.color = 'red';

// const h2 = document.getElementsByClassName('h2');
// // => array = [123 1234 1234] 0 1 2
// h2[0].style.color = 'yellow';
// h2[2].style.color = 'blue';

document.getElementById('login-form').addEventListener("submit", function(event) {
    event.preventDefault(); // ngăn không cho trang web tải lại sau khi submit
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const default_username = 'MindX';
    const default_password = 'mindxdream';

    const message = document.getElementById('message');
    if (username === default_username && password === default_password) {
        message.textContent = "ĐĂNG NHẬP THÀNH CÔNG!!!";
        message.style.color = 'green';
    }
    else {
        message.textContent = "Sai tên đăng nhập hoặc mật khẩu"
        message.style.color = 'red';
    }
})