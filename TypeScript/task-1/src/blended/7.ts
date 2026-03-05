interface IUser {
    name: string,
    age: number,
}

const users: IUser[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];
  
  users.push({ name: "Katrin", age: 21 });
  // users.push({ name: "Anna" });