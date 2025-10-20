/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 */

function sum(x: number, y: number): number {
  const result = x + y
  return result
}

sum(1, 2)
// sum(1, "2"); буде помилка, бо передаємо другим аргументом рядок

// -------------------------------------------------------------------

// function makeMessage(word: string): void {
//     console.log(word);

// }

// makeMessage("Hello")

// export default function makeMessage(age: string | number): void {
//     console.log(`Your age is ${age}`);

// }

// makeMessage(20)

// ---------------------------------------------------------------------

function test(num: number): string {
  let value = 'test'
  let result = value + num
  return result
}
const a = Number('6')
test(a)

// ----------------------------------------------------------------------

interface StudentType {
  studentName: string
  course: string
  time: number
}

const students: StudentType[] = [
  {
    studentName: 'Olha',
    course: 'JS',
    time: 8,
  },
  {
    studentName: 'Oleg',
    course: 'React',
    time: 8,
  },
  {
    studentName: 'Tetiana',
    course: 'HTML/CSS',
    time: 3,
  },
]

function showCourses(studentsArr: StudentType[]): string[] {
  const coursesList = studentsArr.map((student) => student.course)
  return coursesList
}

console.log(showCourses(students))

// напишемо функцію з опціональними параметрами
function makeMessage(username: string, login?: string): string | number {
  if (login !== undefined) {
    return `${username} has login ${login}`
  } else {
    return `${username} `
  }
}

makeMessage('Oleg', 'test')
makeMessage('Tetiana', undefined)

// -------------------------------------------------------

interface ProductType {
  title: string
  price: number
}

interface BasketType {
  owner: string
  products: ProductType[]
  showOwner: (x: number, y?: string) => string
  addProduct: (product: ProductType) => void
}

// типізація методів обʼєктів
const basket: BasketType = {
  owner: 'Oleg',
  products: [],
  // showOwner: () => {}
  showOwner(x) {
    return `The owner of basket is ${this.owner} and has ${x} products`
  },
  addProduct(product: ProductType) {
    this.products.push(product)
    // return this.products
  },
}

basket.showOwner(5)

const avocado: ProductType = {
  title: 'avocado',
  price: 100,
}
basket.addProduct(avocado)
