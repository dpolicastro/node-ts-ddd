import { UserInterface } from "../interfaces";

export class User implements UserInterface {

  name: string;
  age: number;

  constructor(user: UserInterface) {
    this.name = user.name;
    this.age = user.age;
  }

  getAge() {
    return this.age;
  }

}
