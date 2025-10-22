interface User {
  name: string;
  age: number;
  role: "admin" | "user" | "super";
}

const user1: User = {
  name: "Dave",
  age: 25,
  role: "admin",
};

if (user1.role === "admin") {
  console.log("This is admin");
}

enum Role {
  Admin = "Admin",
  User = "User",
  Super = "Super",
}

const role: Role = Role.User;

console.log(role); // User

if (role === Role.User) {
  console.log("This is admin");
}

const status1: 200 | 201 | 400 = 200;

if (status1 === 200) {
  console.log("Request is success");
} else if (status1 === 201) {
  console.log("Request created resource");
} else if (status1 === 404) {
  console.log("Resource is not found");
}

enum Status {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
}

interface ApiResponse {
  status: Status;
}

const response: ApiResponse = {
  status: Status.NotFound,
};

function message(res: ApiResponse) {
  switch (res.status) {
    case Status.Success:
      return "Success response";
    case Status.Created:
      return "Recourse created";
    case Status.BadRequest:
      return "Bad request";
    case Status.NotFound:
      return "Recourse not found";
  }
}

console.log(message(response));
