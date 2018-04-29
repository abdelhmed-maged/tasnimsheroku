export interface User {
      uid: string;
      email: string;
      displayName?: string;
      photoURL?: string;
      roles?: Roles;
}

export interface Roles {
  admin: boolean;
}
