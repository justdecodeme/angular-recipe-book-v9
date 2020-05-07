// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// SAME AS ABOVE | ↓ SHORTCUT

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}