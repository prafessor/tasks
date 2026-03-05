interface IUser {
    name: string,
    address?: {
        city: string,
    }
}

const user: IUser = {
    name: "Alice",
    address: {
      city: "Kyiv",
    },
  };
  
  console.log(user.address?.city);