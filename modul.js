export class User{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    show(){
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
}

export function Hello(){
    console.log(`Hello ${this.name}`);
}