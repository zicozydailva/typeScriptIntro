let id:number = 5
let company:string = "Media"
let isMember:boolean = true
let x:any = "Hello"

// arrOfNum
let ids:number[] = [1,2,3,4,5]

// arr of ...
let arr: any[] = [1, true, "hey"]

// tuple ..takes respective val accordingly
let person: [number, string, boolean] = [1,"welcome", true]


// tuple arr
let employee: [number, string][] 
employee = [
    [1, "Jane"],
    [2, "James"],
    [3, "John"],
]

// unions ... a var to hold more than one type
let proId: string | number 
proId = 22

// enum .. by def, its index based .. i.e up: 0, down: 1
enum Direction1 {
    up,
    down,
    left,
    right
}

enum Direction2 {
    up = "up",
    down = 'down',
    left = 'left',
    right = 'right'
}

// Objects
const user: {id: number, name: string} = {
    id: 1,
    name: "Joe"
}

// OR

type User = {
    id: number,
    name: string
}

const newUser: User = {
    id: 1,
    name: "John"
}

// typ assertion ..treat an entity as a diff type
let cId: any = 1
let customerId = <number>id
// or
let customId = cId as number

// functions
function addNum(x: number, y:number): number {
    return x + y
}

function log(message: string | number):void {
    console.log(message);
}

// Interfaces ...can't take unions ...to make optional.. add "?" to the key prop...when set to "readonly..it cant be modified on the run"
interface UserInterface  {
   readonly id: number,
    name: string
    age?: number
}

const newUser1: UserInterface = {
    id: 1,
    name: "John",
    age: 23
}


interface MathFunc {
    (x:number, y:number):number
}

const add: MathFunc = (x:number, y:number):number => x+y
const sub: MathFunc = (x:number, y:number):number => x-y

// classes ..."private" makes it only accessible from only within the class. "protected" makes it accessible from within or an extended class. default is "public"
class Person {
    private id: number
   protected name: string

    constructor(id: number, name:string) {
       this.id = id
       this.name = name
        
    }
}

const brown = new Person(1, "Brad Brown")
const mike = new Person(2, "Mike Jordan")

// generics
function getArray<T>(item: T[]): T[] {
    return new Array().concat(item)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["brad", "john", "jill"])

