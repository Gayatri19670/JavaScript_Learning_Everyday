class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }
    issuedBook(bookname, user) {
        console.log(this.issuedBooks[bookname]);
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
        } else {
            console.log("Book is already issued");
        }


    }
    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }
}