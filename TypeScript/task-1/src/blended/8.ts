enum Role {
    Admin,
    User,
    Guest
}

type Permisson = "create" | "read" | "update" | "delete";

function getPermissions(role: Role): Permisson[] | undefined {
    switch (role) {
      case Role.Admin:
        return ["create", "read", "update", "delete"];
      case Role.User:
        return ["read", "update"];
      case Role.Guest:
        return ["read"];
      default:
        [];
    }
}