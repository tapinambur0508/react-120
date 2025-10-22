import axios from "axios";

interface User {
  name: string;
  age: number;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:8080/api/users");
  const data = (await response.json()) as User[];

  return data;
}

fetchUsers().then((data) => console.log(data));

interface Order {
  id: number;
  price: number;
}

async function fetchOrders(): Promise<Order[]> {
  const { data } = await axios.get<Order[]>("http://localhost:8080/api/orders");

  return data;
}

async function fetchOrder(id: number): Promise<Order> {
  const { data } = await axios.get<Order>(
    `http://localhost:8080/api/orders/${id}`,
  );

  return data;
}
