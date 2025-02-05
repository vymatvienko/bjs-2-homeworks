"use strict"
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
    // return this.state;
  }

  set state(newState) {
    if (this.newState < 0) {
      this.status = 0;
    } else if (newState > 100) {
      this.status = 100;
    } else {
      this.status = newState;
    }
  }
  get state() {
    return this.status;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findBook = this.books.find(item => item[type] === value);
        if (findBook === undefined) {
            return null;
        } else {
            return findBook;
        }
    }

    giveBookByName(bookName) {
        const findBookIndex = this.books.findIndex(item => item.name === bookName);
        if (findBookIndex === -1) {
            return null;
        } else {
            const findBook = this.books[findBookIndex];
            this.books.splice(findBookIndex, 1);
            return findBook;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (!(subject in this.marks)) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subjectName) {
      if (!(subjectName in this.marks)) {
          return 0;
      }
      return Number(this.marks[subjectName].reduce(
          (accumulator, currentValue) => accumulator + currentValue, 0
      ) / this.marks[subjectName].length);
  }

    getAverage() {
        const allMarks = Object.keys(this.marks);
        if (allMarks.length === 0) {
            return 0;
        }
        let summ = 0;
        for (let i = 0; i < allMarks.length; i++) {
            summ += this.marks[allMarks[i]].reduce(
                (accumulator, currentValue) => accumulator + currentValue, 0
            ) / this.marks[allMarks[i]].length;
        }
        return Number(summ / allMarks.length);
    }
}