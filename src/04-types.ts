/**
 * - Union
 * - Літеральні типи ( "small", "medium", "large", "extralarge")
 */

let response: string | number = 'success'
response = 404

// response = true; буде помилка

let value: 'small' | 'medium' | 'large' = 'medium'
// value = "test"; буде помилка

type ContainerSize = 'small' | 'medium' | 'large'

let containerValue: ContainerSize = 'large'

console.log(containerValue)

// containerValue = "mobile";
