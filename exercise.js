//hgy
// //inheritance

// class Product {
//     constructor(name, price){
//         this.productName = name
//         this.price = price
//     }
// }

// class Book extends Product{
//     constructor(name, price, author){
//         super(name, price)
//         this.author = author
//     }
// }

// let book1 = new Book('Novel', 200000, 'Rudi')
// console.log(book1)

//inheritance

// class Makanan {
//     constructor(nama, harga){
//         this.Makanan = nama
//         this.Harga = harga
//     }
// }

// class Menu extends Makanan{
//     constructor(nama, harga, tambahan){
//         super(nama, harga)
//         this.Tambahan = tambahan
//     }
// }

// let Mn1 = new Menu('Pizza', 30000, 'Saos')
// console.log(Mn1)


//soal 1
function myFunc(){

}
let student = [
{ 
    name: 'Andi',
    email: 'budi@gmail.com',
    // age: 39,
    score: 80

}, 
{
    name: 'Budi',
    email: 'budi@gmail.com',
    // age: 29,
    score: 70
},
{
    name: 'Lala',
    email: 'lala@gmail.com',
    // age: 39,
    score: 80
},
{
    name: 'Yuni',
    email: 'yuni@gmail.com',
    // age: 49,
    score: 90
}
]//array di loop, tiap age dan score dimasukin ke satu array
// let initValue ={}
// function smartStudentReducer(acc,student){
//    if (!acc.name) {
//     acc = student
//    } else {
//     if (acc.score < student.score){
//         acc = student
//     }
//    }
//     return acc
//     //write code here
// }
// let smartStudent = student.reduce(smartStudentReducer, initValue)
// console.log(smartStudent)
