/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

// const product: { title: string; price: number; isFavourite: boolean} = {
//     title: "lemon",
//     price: 50,
//     isFavourite: true
// }

interface ProductType {
  title: string
  price: number
  isFavourite: boolean
}

const product: ProductType = {
  title: 'lemon',
  price: 50,
  isFavourite: true,
}

console.log(product)

// product.price

// product.tittle = "test"

interface StudentType {
  readonly studentName: string
  course: string
  time: number
  isFavourite?: boolean
  avatar?: string
}

const student: StudentType = {
  studentName: 'Oleg',
  course: 'React',
  time: 10,
  isFavourite: true,
}

const student2: StudentType = {
  studentName: 'Olha',
  course: 'JS',
  time: 8,
  avatar: './image.jpg',
}

// student2.studentName = "Tetiana"; буде помилка, тому що цей ключ доступний лише для читання;
