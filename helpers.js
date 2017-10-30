const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i])
}

numbers.forEach(number => {
  console.log(number)
})

const even = numbers.filter(number => {
  return number % 2 === 0
})

console.log(even)

const odd = numbers.filter(number => {
  return number % 2 !== 0
})

console.log(odd)

const newArray = numbers.map(number => {
  return `The number ${number}`
})

const has2 = numbers.some(number => {
  return number === 2
})

const isOdd = odd.every(number => {
  return number % 2 !== 0
})

const animals = ['gret', 'hannah', 'tyler', 'frankie']
const welcomeMessage = `
  Welcome!

  Here are our animals:
  ${
    animals.map(animal => {
      return `We have ${animal}`
    }).join('\n')
  }
  Hope you have a great day!
  `
console.log(isOdd)
console.log(numbers)
console.log(newArray)
console.log(welcomeMessage)

