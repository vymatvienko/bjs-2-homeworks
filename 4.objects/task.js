"use strict"
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

new Student("Vladimir");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if ("marks" in this) {
    return this.marks.push(...marksToAdd);
  } 
}

Student.prototype.getAverage = function () {
  if (this.marks.length === 0 || !("marks" in this)) {
    return 0;
  } else {
    return this.marks.reduce((acc, number) => acc + number, 0) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
