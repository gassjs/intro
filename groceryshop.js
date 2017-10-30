class GroceryShop {
  constructor() {
    this.products = []
  }

// class Fruit {
//  constructor(cost) {
//    this.cost = cost
//    this.category = 'fruit'
//  }
// }

addProduct(product) {
this.products.push(product)
  }
}

listCategory(category) {
  return this.products.filter(product => {
    return product.category === category
  })
}

class Product {
  constructor(cost, category) {
    this.cost = cost
    this.category = category
  }
}

class Fruit extends Product {
  constructor(cost,) {
    super(cost, 'fruit')
  }
}

class Vegetable extends Product {
  constructor(cost) {
    super(cost, 'vegetable')
  }
}

class Orange extends Fruit {
  constructor(origin, cost)
    super(cost)
  this.origin = origin
  }
}

class Carrot extends Vegetable {
  constructor(color, cost) {
    super(cost)
    this.color = color
  }
}


class Apple extends Fruit {
  constructor(color, cost) {
    this.color = color
    this.cost = cost
  }
}

const harrysShop = new GroceryShop()

harrysShop.addProduct(new Apple('green', 2))
harrysShop.addProduct(new Apple('red', 3))
harrysShop.addProduct(new Apple('purple', 4))
harrysShop.addProduct(new Orange('florida', 4))
harrysShop.addProduct(new Orange('valencia', 1))
harrysShop.addProduct(new Carot('orange', 5))
harrysShop.addProduct(new Carot('purple', 3))

const vegetables = harrysShop.listCategory('vegetable')
console.log(harrysShop)
