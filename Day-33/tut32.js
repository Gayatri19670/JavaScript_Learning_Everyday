console.log("JavaScript_Learning_Day-32");


// Library Class Implementation

// ********************** Exercise-04 ******************
// Create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)



// ************Exercise-04 SOLUTION******************


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

console.log('Happy_Learning_JavaScript');