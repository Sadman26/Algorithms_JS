class Animal {
    constructor(name) {
        this.name = name
    }
    show() {
        console.log("This is a ", this.name)
    }
}
let obj = new Animal("Cat")
let obj2 = new Animal("Dog")
obj.show()
obj2.show()