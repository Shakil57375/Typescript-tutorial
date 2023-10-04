// ! classes
// We can modify the access by using access modifier
// * there is 3 different kids of modifiers in typescript
// ? they are : 1. public 2. private & 3. readonly
// * public: If you give public modifier to any of our class variable any one can change or access it.
// * private : If you give private modifier to any of our class variable no one can change or access it.
// * readonly : If you give readonly modifier to any of our class variable no one can change or but they can access it.
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
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}
  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
