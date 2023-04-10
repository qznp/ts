/*
 * @Description: 类
 * @Date: 2023-04-06 10:33:48
 * @LastEditTime: 2023-04-10 15:42:51
 */
// 基于类的面向对象
// class Greeter {
//   greeting: string;
//   constructor (message: string) {
//     this.greeting = message;
//   }
//   greet () {
//     return 'hello ' + this.greeting;
//   }
// }
// let greeter = new Greeter('world');
// console.log(greeter.greet());

// 1、继承：基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类,extends关键字
// class Animal {
//   move (distance: number = 0) {
//     console.log(`Animal moved ${distance}m`);
//   }
// }
// class Dog extends Animal {
//   bark () {
//     console.log('dog');
    
//   }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// class Animal {
//   name: string;
//   constructor(theName: string) { this.name = theName; }
//   move(distanceInMeters: number = 0) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// class Snake extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 5) {
//       console.log("Slithering...");
//       super.move(distanceInMeters);
//   }
// }

// class Horse extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 45) {
//       console.log("Galloping...");
//       super.move(distanceInMeters);
//   }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

// 2、公共：public(默认修饰符)
// class Animal {
//   public name: string;
//   public constructor(theName: string) { this.name = theName; }
//   public move(distanceInMeters: number) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// 3、私有：private，当成员被标记为private时，他就不能在声明他的类的外部访问
// class Animal {
//   private name: string;
//   constructor(theName: string) { this.name = theName; }
// }
// new Animal("Cat").name; // 错误: 'name' 是私有的.

// class Animal {
//   private name: string;
//   constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends Animal {
//   constructor() { super("Rhino"); }
// }

// class Employee {
//   private name: string;
//   constructor(theName: string) { this.name = theName; }
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");

// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.

// 4、protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
// class Person {
//   protected name: string;
//   constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//       super(name)
//       this.department = department;
//   }

//   public getElevatorPitch() {
//       return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

// 构造函数被标记为protected，这意味着这个类不能在包含他的类外被实例化，但是能被继承
// class Person {
//   protected name: string;
//   protected constructor(theName: string) { this.name = theName; }
// }

// // Employee 能够继承 Person
// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//       super(name);
//       this.department = department;
//   }

//   public getElevatorPitch() {
//       return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.

// 5、readonly修饰符，只读只读属性必须在声明时或构造函数里别初始化
// class Octopus {
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
//   constructor (theName: string) {
//       this.name = theName;
//   }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

// 6、存取器 getter/setter
// let passcode = "secret passcode";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         } else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }

// 7、静态属性 static 
// class Grid {
//   static origin = {x: 0, y: 0};
//   calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//       let xDist = (point.x - Grid.origin.x);
//       let yDist = (point.y - Grid.origin.y);
//       return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor (public scale: number) { }
// }

// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// 8、抽象类：做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
// abstract class Department {

//   constructor(public name: string) {
//   }

//   printName(): void {
//       console.log('Department name: ' + this.name);
//   }

//   abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {

//   constructor() {
//       super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//   }

//   printMeeting(): void {
//       console.log('The Accounting Department meets each Monday at 10am.');
//   }

//   generateReports(): void {
//       console.log('Generating accounting reports...');
//   }
// }

// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// // department.generateReports(); // 错误: 方法在声明的抽象类中不存在


// 把类当做接口使用
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
