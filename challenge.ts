import { User } from "./User";

// challenge.ts
const prettyPrintWilder = (users: User []) => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  const wilders: User[] = [];
  const user1: User = { name: "Pierre", age: 23};
  const user2: User = { name: "Paul", birthday: "10/02/1990", age: 18};
  const user3: User = { name: "Jacques", age: 25 };
  wilders.push(wilders[0]);
  wilders.push(wilders[1]);
  wilders.push(wilders[2]);
  prettyPrintWilder(wilders);