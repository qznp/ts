/*
 * @Description: 变量声明
 * @Date: 2023-03-21 18:52:38
 * @LastEditTime: 2023-03-28 10:52:23
 */
// var声明
// let声明
// const声明
// 1、解构数组
let input: [number, number] = [1, 2];
// let [first, second] = input;
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
// f(input);

// 使用...语法创建剩余变量
// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first);
// console.log(rest);

let [first] = [1, 2, 3, 4];
// console.log(first);
let [, second, fourth] = [1, 2, 3, 4];
// console.log(second);
// console.log(fourth);

// 2、对象解构
let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
};
// let { a, b } = o;

// ({ a, b } = { a: 'baz', b:101 });
// console.log(a);
// console.log(b);

// 使用...语法创建剩余变量
// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;
// console.log(total);

// 属性重命名
// let { a: newName1, b: newName2 } = o;
// console.log(newName1);
// console.log(newName2);
// let { a, b }: { a: string, b: number } = o;
// console.log(a);
// console.log(b);

// 3、函数声明
// type C = { a: string, b?: number }
function fn({ a, b = 0 } = { a: '' }): void {
  console.log(a);
  console.log(b);
  
}
fn({ a: 'yes' });
fn();



