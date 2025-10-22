interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Dave", age: 25 },
  { name: "Mary", age: 24 },
];

function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 1000);
  });
}

getUsers().then((data) => console.log(data.map((user) => user.name)));
