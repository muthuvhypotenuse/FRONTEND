export interface Users {
    name: string;
    age: number;
  }
  export type User= {
    name: string;
    age: number;
  }

export const concatStrings=(user1: string, user2?: string): string =>{
    if (user2) {
      return user1 + user2;
    } else {
      return user1;
    }
  }