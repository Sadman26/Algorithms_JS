class Animal {
    constructor(name) {
        this.name = name
    }
    shows() {
        console.log("This is a ", this.name)
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    show() {
        console.log("This is a ", this.name)
    }
}
let obj = new Animal("Cat")
let obj2 = new Animal("Dog")
obj.show()
obj2.show()
let obj3 = new Dog("Dog")
obj3.show()
