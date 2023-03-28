"use strict"
function parseCount(number) {
    const value = Number.parseFloat(number);
    if (isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return value;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        const p = (this.sideA + this.sideB + this.sideC) / 2;
        return Number(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));
    }
}

function getTriangle(a , b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },

            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}