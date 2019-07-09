let javaBook = {
    code: "java",
    description: "Murach's Java Programming",
    price: 57.50
};

console.log("code" in javaBook);
console.log("test" in javaBook);
console.log(Object.keys(javaBook));

let mysqlBook = {
    code: "mysql",
    description: "Murach's mySQL",
    price: 55
};

let books = [javaBook, mysqlBook];

console.log(books);
console.log("do an old school for loop...");
for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
}
console.log("do the enhanced for loop...");
for (let book of books) {
    console.log(book);
}