/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

// const products: string[] = ["cherry", "lemon", "apple"]
// другий спосіб

const products: Array<string> = ['cherry', 'lemon', 'apple']

// products. ts підкаже які методи можна використовувати для роботи з масивами

interface productsBasketType {
  title: string
  price: number
  isFavorite: boolean
}

const productsBasket: productsBasketType[] = [
  {
    title: 'lemon',
    price: 100,
    isFavorite: true,
  },
  {
    title: 'apple',
    price: 10,
    isFavorite: false,
  },
  {
    title: 'cherry',
    price: 200,
    isFavorite: true,
  },
  {
    title: 'avocado',
    price: 80,
    isFavorite: true,
  },
]

// productsBasket[0].price. можемо глянути які доступні властивості в productsBasket[0] через крапку чи методи для значення ключа price

// const filteredProductsBasket = productsBasket.filter((product) => {

// })
