//no 1//
class Person {
    constructor(name, age, isHuman, occupattion) {
        this.name = name;
        this.age = age;
        this.isHuman = isHuman;
        this.occupattion = occupattion;
    }
}
//no 2//
class cowok extends Person {
    eat(){
        console.log(this.name+ " sedang makan");
    }
}
//no 3//
class buaya extends Person {
    swim(){
        console.log(this.name+ " sedang berenang");
    }
}
//no 4//
const cowok1 = new cowok('udin',19, true,'nganggur');
//no5//
const buaya1 = new buaya('ucup',2000,false,'nyari jodoh');

cowok1.eat();
buaya1.swim();

console.log(cowok1);
console.log(buaya1);
