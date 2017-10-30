## Web Production
- **Model** means it can be applied in different contexts
- **DNS server** lookup dns records
  - Retail store analogy
- Take designs and turn them into code + assets with html/css
- Use JS for interactions
    - business **logic** on back-end
    - can load content wo a refresh AJAX
    - synchronous code runs step at a time tf blocking
    - cf non-blocking asynchronous
- **Libraries** extend native capabilities
- **FW** libraries that impose their own way of writing code (conventions, best practices)
- **Node** lets you run JS outside of browser
- **compiled** cf **just-in-time**
- **Terminal** is a text input/output environment to interact with computer
- **Console** traditionally a physical terminal but used interchangeably with the software like iTerm
- **Shell** is software that interprets what is inputted in the terminal like fish
- `echo` returns a string

##### Git
- `commit` saves the state (a version) of your project w snapshots
- `diff` Tests changes to a *file*
    - Run *before* adding files
- `fork` branches *all* branches
- `clone` copies a repo
- `pull request` requests a `merge`
- `origin` is the **one-true-fork**
- `push` whereto `->` which branch
- `branch` is a log of commits `master` is default
- `merge` combines branches
    - `pr` request to merge from one fork's branch into another

##### Node
> `undefined` is not an error; it indicates there're no further processes arising from a variable assignment ie *returns* nothing (&amp; tf `false`)

- `_` character is reserved result of last operation
- tab complete variables
- words: `.break` `.clear` `.clear` same as `<C-c>`
- `.help` with words
- `.save+filename` saves session which can be referenced by `.load+filename`

###### Repl
- `.help`
- `.break`  Sometimes you get stuck, this gets you out
- `.clear`  Alias for .break
- `.editor` Enter editor mode
- `.exit` Exit the repl
- `.help` Print this help message
- `.load` Load JS from a file into the REPL session
- `.save` Save all evaluated commands in this REPL session to a file

## Data Types, Variables, Booleans, Comparison &amp; Logical Operators, Conditionals

Data types are classifications of...

- Arrays are data types too
- Object `{name: 'Nick'}`

> **Operations** are special syntax applied to values to produce a result.

> **Syntax** are the rules of a programming language we need to follow to produce valid code.

JS is `truthy` or `falsy` cf black &amp; <white></white>:

    false 0 " " NaN null undefined

**Comparison Operators** let us compare values and produce a **Boolean**.

`==` performs **type coercion** *before* comparing values.

JS only cares if `truthy`/`falsy` rather than being different types:

    'cat' == 'cat' // => true

    0 == false // => true

    1 == "1" // => true

**cf** `===` which checks type *and* values:

    "cat" === "cat" // => true

    0 === false
    // => false
    // ie not truthy bc
    // one is boolean
    // one integer

    1 === "1" // => false

    != is opposite to ==
    !=== is opposite to ===

    1 != '1' // => false

    1 !== '1' // => true

### Logical Operator
Compare booleans/truthy-falsy values and return t/f value

    && AND
    || OR
    ! NOT

`&&` will return the *last* value if *all* values are truthy else `false`. If it doesn't return `false` it must be `truthy`.

    true && true // => true

    true && false // => false

    true && true && true // => true

    1 && 2 && 3
    // = 3
    // ie compares
    // (1 + 2) & 3
    // then returns last value

`||` will return the *first* value that is `true` else returns `false`. If it doesn't return `false` it must be `truthy`.

    true || true // => true

    true || false // => true

    false || false || false // => false

    1 || 2 || 3 // => 1

    !!(1 || 2 || 3) // => true

`!` or `NOT` operator return the opposite Boolean of a truthy or falsy value. We can `!` that value again to get the Boolean version of a value:

    !false // => true

    !true // => false

    !!false // => false

    !!1 // => true

**Conditionals** use ty/fy values to branch code into different paths:

**Expressions** are any code that returns a value:

    7 // => 7

    1 && 2 && 3 // => 3

    console.log('hi') // => undefined

**Keyword** that excecutes some code is a **Statement**.

**Blocks** are code between `{ }` following a Statement.

**`if`** statements allow us to run code in the block if expression is truthy:

    if (true) {
      console.log('true is true!')
    }

We can use any expression and the `if` statement will check if it ty/fy:

    const age = 18
    const country = 'australia'

    if (age >= 18 && country === 'australia') {
      console.log('you can drink')
    }

`else` follows an `if` and will run the code in the provided block if the expression is falsy.

`else` block is not a new statement it's part of the original `if` statement turning into `if esle` statement

    const age = 15
    const country = 'oz'

    if (age >= 18 && country === 'oz') [
      console.log('you can drink')
    } else {
      console.log('too young')
    }

`else if` keyword always follow `if` but is *before* `else` and will run its block if no other blocks before it were run and the `if` expression it's passed is ty:

    if (age >= 18 && country === 'oz') {
      console.log('you can drink')
    } else if (age >= 21 && country === 'usa') {
      console.log('you can drink usa beer')
    } else {
      console.log('too young')
    }

## Iteration
### `while` Loops

    let count = 0
    while (count <= 10) {
      console.log(count)
      count = count + 1
    }

### `for` Loops
Assign a variable, check if the variable in the expression is ty, run the block of code, then run the last expression to increment the variable:

    for (let count = 0; count <= 10; count++) {
      console.log(count)
    }

## Arrays, Functions &amp; Scope
### Arrays
- Is an **ordered** collection of **elements**
- Each element in an array can be any type of data (inc other arrays)

      const name = 'nick'
      const someArray = [77, 'dogs', [true, name], 'cats']

Each element is referenced by its **index**  and the total amount of elements in an array is equal to its `length`


      someArray[1]
      // => 'dogs'

We can assign elements using indexes:

A variable is **value** assigned to an **identifier** by **reference**.

Using `const` mean we can't change the **reference** but we can modify the **value**

### `.` dot operator

> `Today, I consumed a ${quantity[0]} cups of ${food[0]}`

## Methods
- `console.log(x)` log is a method
- `push()` adds to end of array
    - `food.push("spam", "dick")`
- `pop()` removes and shows what's removed ie last element
    popped = food.pop();`
    // ie new array popped
    // has one less element
- `shift()` removes from start & returns removed value
    `shifted = food.shift();`
- `unshift()` add element to front of array
    - returns `message[message.length - 1]`??

`.length` is a property *not* a method so doesn't need anything at the end.

<a href="http://mdn.io/arrays">MDN Docs</a>
<a href="http://bit.ly/js-array-practice">Practice</a>

    const favouriteThings = [
    'javascript',
    'video games',
    'beers',
    'js4'
    ]

### Functions
Reusable bits of code called from anywhere where it has access.

It's a datatype &amp; tf **first-class**.

Segments large code bases so > manageable

Two ways to define functions
- 1. Declaration
Use a keyword ...
To invoke a function we must **call** it

    function greet() {
    console.log('hello')
    }
    console.log(greet.toString())

Functions must be in **scope**.

**Function Expression** when we do this we can drop the name tf don't need name in `()` tf anyonymous

    const greet = function() {
    console.log('hello')
    }

    // Shorthand with
    const greet = () => {
    console.log('hello')
    }
    // Use arrow syntax with function expression or anonymous function

**Function expressions** can only be called after they are **assigned**

- 2. Expression

#### DRY
Makes modifications easier eg 'hello' by wrapping in a function

### Parameters &amp; Arguments
Functions that produce the same result everytime it's called is the js def of insanity.

Creating multiple functions and calling them once to achieve a similar result isn't DRY.

**Parameters** allow us to pass values for use in our functions

When calling a function values passed to a function are called **arguments**.

    function greet(name) { // mane is the parameter
    console.log(`Hello ${name]`)
    }
    greet('Greg') // Greg is the argument
    // => 'Hello, Greg'

We can write functions that take more than one parameter, by using a comma separated list.

When calling these functions, we use the comma separated list in the same order to pass it arguments

    function add(x, y) {
    console.log(x + y)
    }

    add(1, 2)
    // => 3

if a function epxression using arrow syntas has only one parameter we can drop brackets

we can even write functions that take any number of parameters using the **spread operator**

> function sum

#### RETURN
When we want a value from a function we must **return** it

    function add(x, y) {
    return x + y
    }
    const total = add(1, 2)
    console.log(total)
