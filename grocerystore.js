class GroceryShop {
  constructor() {
    this.products = []
  }
  addProduct(product) {
    this.products.push(product)
  }
  listCategory(category) {
    return this.products.filter(product => product.category === category)
  }
  //return true or false if the shop has the product
  has(checkProduct) {
  return this.products.some(product => }
    return checkProduct === product
  })
}
  //buys product, returning the change
  //should remove the product from inventory
  //should only alow the prodict to be bought if
  //  = the product exists
  //  = the the caller has enough money
  //
  // if the product can't be bought, should display message why
  buy(product, money) {
    if(this.has(product)) {
      // method written above
      if(money >= product.cost) {
        const change = product.cost

        this.products - this.products.filter(existingProduct => {
          return product !== product
        })

        return change

      } else {
        console.log(`Soz you cannot buy ${prouct}, you dont have enough money`)
    } else {
      console.log(`Soz you cannot buy ${product}, we are out.`)
    }

  }
  //Displays a welcome message similar to:
  //
  //Welcome to my shop!
  //
  //Our products include:
  //
  //[list of products here]
  //
  // Have a nice day
  display() {
  }
}
class Product {
  constructor(cost, category) {
    this.cost = cost
    this.category = category
  }
}
class Vegetable extends Product {
  constructor(cost) {
    super(cost, 'vegetable')
  }
}
class Fruit extends Product {
  constructor(cost) {
    super(cost, 'fruit')
  }
}
class Carrot extends Vegetable {
  constructor(color, cost) {
    super(cost)
    this.color = color
  }
}
class Orange extends Fruit {
  constructor(origin, cost) {
    super(cost)
    this.origin = origin
  }
}
class Apple extends Fruit {
  constructor(color, cost) {
    super(cost)
    this.color = color
  }
}
const harrysShop = new GroceryShop()
harrysShop.addProduct(new Apple('green', 2))
harrysShop.addProduct(new Apple('red', 3))
harrysShop.addProduct(new Apple('purple', 4))
harrysShop.addProduct(new Orange('florida', 8))
harrysShop.addProduct(new Orange('valencia', 1))
harrysShop.addProduct(new Carrot('orange', 5))
harrysShop.addProduct(new Carrot('purple', 3))
console.log(harrysShop.has(Orange))
// harrysShop.display()
//
// const vegetable = harrysShop.listCategory('vegetable')[0]
//
// const change = harrysShop.buy(vegetable, 6)
//
// console.log(change) // should be 1
//
// harrysShop.buy(vegetable, change) // should not work, vegetable already bought
//
// const anotherVegetable = harrysShop.listCategory('vegetable')[0]
//
// harrysShop.buy(anotherVegetable, change) // should not work, not enough money
