/*
 * @Descripttion: 基础类型
 * @Author: yanyan
 * @Date: 2021-06-24 14:08:56
 * @LastEditTime: 2021-06-24 15:18:54
 */
// 1、布尔值
let isDone: boolean = false;
console.log(isDone);

// 2、数字：支持十进制、十六进制、二进制和八进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);

// 3、字符串
// let myName: string = 'bob';
// myName = 'coc';
// console.log(myName);
// 使用模板字符串，可以定义多行文本和内嵌表达式，这种字符串是被反引号包围（`）,并且以${expr} 这种形式嵌入表达式
let myName: string = `Gene`;
let age: number = 37;
let sentence: string = `hello,my name is ${myName}.`;
console.log(sentence);

// 4、数组
// let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
console.log(list);

// 5、元组Tuple：元组类型允许表示一个已知元素数量和类型得数组，各元素得类型不相同。
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello']; //error,应与上方定义得数据类型对应
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // error,'number'没有substr方法
// 不可越界访问第三个元素
// console.log(x[2]);

// 6、枚举:enum类型是对js标准数据类型的一个补充
// enum Color { Red, Green, Blue }
// 手动赋值
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;
console.log(c);
let colorName: string = Color[2];
console.log(colorName);

// 7、Any：当不清楚类型的变量指定一个类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
let lists: any[] = [1, true, "free"];
lists[1] = 100;
console.log(lists);

// 8、Void：某种程度上来说，void类型与any类型相反，它表示没有任何类型
function warnUser(): void {
  console.log("This is my warning message");
}
warnUser();
let unusable: void = undefined;
console.log(unusable);

// 9、Null和Undefined和void相似
let u: undefined = undefined;
let n: null = null;

// 10、Never：表示的是永不存在的值的类型

// 11、Object：表示非原始类型，也就是除number，string，Boolean，symbol，null，undefined
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
// create(42); //error
// create("string"); //error
// create(false); // error
// create(undefined); //error

// 12、类型断言
// 类型断言有两种形式，其一是“尖括号”语法：
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// 其二是as语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;


