/*
 * @Description: 接口
 * @Date: 2023-03-28 11:01:46
 * @LastEditTime: 2023-03-28 16:57:19
 */
function printLabel(labelledobj: { label: string }) {
  console.log(labelledobj.label);
}
// let myobj = { size: 10, label: 'size 10 object' };
// printLabel(myobj);
// 改造成接口
// interface LabelledValue {
//   label: string
// }
// function bbb(labelledobj: LabelledValue) {
//   console.log(labelledobj.label);
// }
// let myobj = { size: 10, label: 'size 10 object' };
// printLabel(myobj);

// 可选属性后面加？
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // 跳过检查（方法二）
}
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
// let mySquare = createSquare({ color: 'block' });
// 如果想绕开属性检查，可使用类型断言(方法一)
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// (方法三)将对象赋值给另外一个变量，因为SquareOptions不会经过额外属性检查，所以编译器不会报错
let SquareOptions = { colors: 'red', width: 100 };
let mySquare = createSquare(SquareOptions);
console.log(mySquare);

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5;
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12
// ro.push(5);
// ro.length = 100;
// a = ro;
a = ro as number[];
console.log(a);

// 作为变量使用const，属性使用readonly

// 函数类型
interface SearchFun {
  (source: string, substring: string): boolean;
}
let mySearch: SearchFun;
// mySearch = function (source: string, substring: string) {
//   let result = source.search(substring);
//   return result > -1;
// }
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
}

interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ['bob', '12'];
let myStr: string = myArray[0];

// class Animal {
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }
// interface NumberD {
//   [index: string]: number;
//   length: number;
//   name: string;
// }

// 类类型
// interface ClockInterface {
//   currentTime: Date;
// }
// class Clock implements ClockInterface {
//   currentTime: Date;
//   constructor(h: number, m: number) {
    
//   }
// }
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }
// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) {

//   }
// }
// 
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }
// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) {

//   }
// }

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {
  constructor(h: number,m: number) {}
  tick() {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number,m: number) {}
  tick() {
    console.log('tick tick');
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
console.log(digital);
console.log(analog);
