---
title: 数据 / 变量
description: TypeScript 数据类型 变量 ENUM INTERFACE TYPE 快速入门
---
计算机语言的核心是对数据的展示和操作，在 TypeScript（简称 TS） 中，数据有了“类型”，接下来让我们进一步了解数据的类型和各种运用。
## 基础数据类型
在 TypeScript 中，有以下几个基础数据类型：
- `string`: 字符串，与 Java 不同，TS 中字符串是一个内置的基础数据类型而不是一个特殊的对象。
- `number`: 数字，与其他常见的语言不同，在 TS 中，无论是小数还是整数，全部表达为 number，number 没有固定的精度，可以存储任何存在的小数或整数。
- `boolean`: 布尔值，True 或者 False。
- `array`: 数组，通常表示为 `type[]`，例如一个字符串数组就会表示为 `number[]`，TS 中数组会自动扩展和缩小，因此不需要手动设置字符串长度。
- `enum`: 用于表示一组命名常量，会在后续的部分中具体介绍。  

几个特殊的数据类型：
- `null`: 空值，通常表示获取成功，但是是空数值。
- `undefined`: 未定义，通常表示获取失败。
- `unknown`: 不确定的数据类型，需要检查后使用。
- `any`: 可以是任何数据类型，通常在定义函数时使用，表示可以接收任何数据类型。
- `void`: 没有返回值，通常在定义函数时使用，表示不返回任何内容。一个例子是某个函数只执行操作，return 空。
- `never`: 没有返回值，通常在定义函数时使用，表示不会有返回值。一个例子是某个函数只报错，不会正常 return。  

一些不太常用的数据类型
- `tuple`: 表示已经确定的类型和长度数组
- `union`:表示多种类型  

最后的最后，还有一个最关键的 `object`（对象），这个数据类型我们会在之后的内容中具体详细介绍

## 变量
在介绍完数据类型后，我们学习一下如何定义一个变量。在 TS 中有两种主要定义变量的方法 `const` 和 `let`。`const` 用于表示某个不会修改的变量，而 `let` 则是会被修改的变量。如果一个数据不会被修改（只读），那么强烈推荐使用 `const`。首先，这会让你的代码可读性更强，避免错误修改数据。其次，在历史上某些 JavaScript 版本中，`let` 会导致一些莫名其妙的错误（但是看起来如今已经修复了）。

`const` 和 `let` 的使用方法类似，格式如下：
```typescript
const constantA: number = 15;
let constantB: number = 15;
constantB = 20; // 修改一个 let 定义的变量
```
这里的 `: number` 部分其实也是可以省略的，TS 有能力自动判断（如果判断不了则会设置为 unknown 类型。例如以下这两个的作用是一样的：
```typescript
const constantA: number[] = [15,16];
const constantB = [15,16];
```

## enum
enum 是一个比较常用但是复杂的数据类型，它就像是一个选择题。如果某个数据像选择题一样，只有固定的几个选项，那么使用 enum 再适合不过了。虽然使用 string 也能达成类似甚至更简单的实现，但是 enum 在代码可读性和规范性上会有显著的优势。  

比方说，现在我们要存储红绿灯的状态，我们就可以定义这样的一个 ENUM：
```typescript
export enum TrafficLight {
    "red", 
    "green", 
    "yellow", 
}
```
在这里，我们定义了三个 ENUM 的子类，红绿黄，这会让我们的调用更加简单直观，例如我们希望定义一个红灯的变量，我们可以直接用：
```typescript
const redLight: TrafficLight = TrafficLight.red;
```
这样的代码可读性和规范性就提高了很多，也可以避免传入不存在的类型造成错误。  
在上面这个例子里，我们可以看到 `TrafficLight.red` 在被调用时候会自动按照 `'red'` 处理。如果在某些情况中，我们不希望这样直接的把 `red` 定义为 `'red'`，我们也可以手动定义。比如说现在我们要把红绿灯的信号转换为数字，我们就可以定义：
```typescript
export enum TrafficLight {
    red = 0, 
    green = 1, 
    yellow = 2, 
}
```
那如果我们再次调用 `TrafficLight.red` 就会按照 `0` 处理。

## object
当我们需要进行更复杂的操作时，我们就需要定义 object，这样我们就可以定义一个数据类型的组合。  

比如说，现在我们想要定义一个 人 类型，那么我们就可以有：
```typescript
type People = {
    name: string;
    age: number;
    telephone?: string;
};
```
这里我们注意到 `telephone` 后有一个 `?`，这代表该字段是可选的，也就是说可以为空。定义好这个类型后，我们就可以进行调用了：
```typescript
const alex: People = {
    name: "Alex",
    age: 18,
    telephone: "123456789",
};
console.log(alex.name); // 获取名字 'Alex'
console.log(alex.telephone!); // 获取电话号码 '123456789'
```
这里扩展出来的一个知识是当我们要调用一个可选的字段时候，我们需要使用 `断言`，比如说我们定义了一个 `alex: People` 的人，那我们在调用 `telephone` 时，则需要使用 `alex.telephone!` 而不是 `alex.telephone`。这里的 `!` 则是告诉计算机我们确认这个地方一定会有数值，不是可选的。

除了 `type` 之外，我们还有一种自定义数据类型的方式 `interface`, 在基础用法上，这两者完全一致：
```typescript
interface People = {
    name: string;
    age: number;
    telephone?: string;
};
```
但是在实际使用中，`type` 用于定义数据类型，`interface` 用于定义函数传入的定义。这个具体会在后端部分中详细介绍。除此之外，`type` 和 `interface` 还是有一些其他区别的，自己找找看吧！