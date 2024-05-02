
class User {
    constructor(name) {
        this.name = name;
    }

    
    borrowBook(book) {
        console.log(`${this.name} is borrowing ${book}`);
    }
}


class Librarian extends User {
    constructor(name) {
        super(name);
    }

    
    borrowBook(book) {
        console.log(`${this.name} (Librarian) is borrowing ${book}`);
    }

    
    manageLibrary() {
        console.log(`${this.name} is managing the library.`);
    }
}


class Member extends User {
    constructor(name) {
        super(name);
    }

    
    borrowBook(book) {
        console.log(`${this.name} (Member) is borrowing ${book}`);
    }

    
    returnBook(book) {
        console.log(`${this.name} is returning ${book}.`);
    }
}

let librarian = new Librarian('Bruce Banners');
librarian.borrowBook('Surrounded by idiots');
librarian.manageLibrary();

let member = new Member('Hubert');
member.borrowBook('Deception Point');
member.returnBook('Deception Point');