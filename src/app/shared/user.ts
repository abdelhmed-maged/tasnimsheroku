export interface User {
      uid: string;
      email: string;
      displayName?: string;
      photoURL?: string;
      roles?: {
        admin?: boolean;
        visitores?: boolean;
      };
}

export interface Roles {

}
