export class Player {
    // brief
    /* public name : string;
      private age : number;
      readonly country : string;
      constructor(n: string, a : number, c:string){
        this.name = n;
        this.age = a;
        this.country = c
      } */
    // * shortcut
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
