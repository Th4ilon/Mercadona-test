const IS_DOG: string = "dog"
const IS_CAT: string = "cat"

class Animal {

    constructor(
        private type: string
    ) { }

    getType(): string {
        return this.type
    }

    bark(): void {
        console.log("Woof!")
    }

    meow(): void {
        console.log("Meow!!!")
    }
}

function speak(animal: Animal) {
    const theIndex = {
        [IS_DOG]: animal.bark.bind(animal),
        [IS_CAT]: animal.meow.bind(animal)
    }
    theIndex[animal.getType()]()
}
//...
const animal = new Animal(IS_DOG)
speak(animal)