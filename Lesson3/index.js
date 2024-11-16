// let a = 170;
// let b = 170;
// let c = 170;

// if (a > b && a > c) {
//     console.log("A cao nhất");
// } 
// else if (b > a && b > c) {
//     console.log("B cao nhất");
// } 
// else if (c > a && c > b) {
//     console.log("C cao nhất");
// }
// else if (a == b && a > c){
//     console.log("A và B cao bằng nhau và đều cao hơn C");
// }
// else if (b == c && b > a){
//     console.log("B và C cao bằng nhau và đều cao hơn A");
// }
// else if (c == a && c > b){
//     console.log("C và A cao bằng nhau và đều cao hơn B");
// }
// else console.log("3 bạn cao bằng nhau")

// Cú pháp vòng lặp for
// for (let i = 1; i <= 50; i++){
//     console.log(i);
// }

// i++ : i = i + 1

document.getElementById('test').addEventListener("submit", function(event) {
    event.preventDefault(); // ngăn không cho trang web tải lại sau khi submit

    const input = Number(document.getElementById('input').value.trim());
    
    for (let i = 0; i <= input; i++){
        if (i % 2 == 0){
            console.log(i +  " là số chẵn");
        }
        else {
            console.log(i + " là số lẻ");
        }
    }

})