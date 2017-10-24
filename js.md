
Identify likely objects, attributes, and methods in each scenario. Remember to consider implicit objects as well as explicit ones.

    A user is required to watch video training sessions as part of a recertification process and answer questions about them.

    - User
    - Videos
    - Questions
    - Completion

    - Watch
    - Completion
    - Required

    A user on a cooking website enters the number of dinner guests, and the cooking website adjusts all the recipes accordingly.

    - Guests
    - Recipes

    - Quantity

    A user who had reserved a GoGet arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

    - User
    - Car

    Booking
    Returned

    A computer game allows the user to take the role of a unit commander or general at Gettysburg and simulates the battle based on his or her commands.

    A user searches for her reservation on a hotel website, and changes the arrival date and room type.





# 3
## Arrays, Functions &amp; Scope
### Arrays
- An **ordered** collection of **elements**
- Each element iin an array can be any type of date (inc other arrays)

    const name = 'nick'
    const someArray = [77, 'dogs', [true, name], 'cats']

Each lement is reference dby its**index**
The total amount of elements in an array is its length

    someArray[1]
    // => 'dogs'

We can assign using indexes

A variable is **value** assigned to an **identifier** by **reference**

Using `const` mean we can not change the **reference** but we can modify the **value**

// no go
color = 'blue'

const things - '

look up


`.` dot operator

> `Today, I consumed a ${quantity[0]} cups of ${goods[0]}`

#### Methods
console.log log is a method
push() adds to end of array
pop() removes and shows what's removed ie last element
shift() removes from start
  message[message.length - 1]
unshift()

.length is a property *not* a method so doesn't need anything at the end

<a href="http://mdn.io/arrays">MDN Docs</a>
<a href="http://bit.ly/js-array-practice">Practice</a>

const favouriteThings = [
'javascript',
'video games',
'beers',
'js4',
]

### Functions
Reusable bits of code called from anywhere where it has access
It's a datatype tf **first-class**
Segments large code bases so > manageable

Two ways to define functions
- 1. Declaration
Use a keyword ...
To invoke a function we must **call** it

    function greet() {
      console.log('hello')
    }

    console.log(greet.toString())

Must be in **scope**.
**Function Expression** when we do this we can drop the name Don't need name in () tf anyonymous

  const greet = function() {
    console.log('hello')
  }

  // Shorthand with
  const greet = () => {
    console.log('hello')
  }
  // Use arrow syntax with function expression or anonymous function

**Function expressions** can only be called after they were **assigned**

- 2. Expression

#### DRY
Makes modifications easier eg 'hello' by wrapping in a function

### Parameters &amp; Arguments
Functions tha tproduce the same result everytime it's called is the js def of insanity
Creating multiple functions and calling them once to achieve a ismilar result isn't DRY

**Parameters** allow us to pass values for use in our functions

When calling a function values passed to a function are called **arguments**.

    function greet(name) { // mane is the parameter
    console.log(`Hello ${name]`)
    }
    greet('Greg') // Greg is the argument
    // => 'Hello, Greg'

We can write functions that take more than one parameter, by using a comma separated list
When calling these functions, we use the comma separated list in the same order to pass it arguments

    function add(x, y) {
      console.log(x + y)
    }

    add(1, 2)
    // => 3

if a function epxression using arrow syntas has only one parameter we can drop brackets



  we can even write functions that take any number of parameters using the **spread operator**

  function sum


#### RETURN
When we want a value from a function we must **return** it 

  function add(x, y) {
    return x + y
  }
  const total = add(1, 2)
  console.log(total)
