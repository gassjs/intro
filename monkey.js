class Monkey {
  constructor(name, species, foodsEaten) {
    this.name = name
    this.species = species
    this.foodsEaten = foodsEaten
  }
  eatSomething(food) {
    this.foodsEaten.push(food)
  }
}

const greg = new Monkey('greg', 'baboon', ['banana', 'leaves', 'bamboo'])

const edna = new Monkey('edna', 'gibbon', ['banana', 'apple', 'lime'])

const maya = new Monkey('maya', 'chimp', ['leaves', 'bug', 'shoots', 'roots'])

greg.eatSomething('orange')
edna.eatSomething('squash')
maya.eatSomething('tarzan')
console.log(greg, edna, maya)

