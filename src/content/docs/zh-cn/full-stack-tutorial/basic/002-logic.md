---
title: 逻辑 / 循环
description: TypeScript if else 逻辑 switch case 基础运算符
---
在逻辑部分，我们会学习多个条件语句和循环语句。在学习这些语句之前，我们要先复习几个基础判断运算符。
## 判断运算符
常见的有 `==`、`===`、`!=`、`!==`、`&&`、`||`、`!`。
### `==` 和 `===`
`==` 是判断两个值是否相等，`===` 是判断两个值是否全等（值和类型都相等）。
```typescript
const a = 1;
const b = '1';
console.log(a == b); // true
console.log(a === b); // false
```
### `!=` 和 `!==`
`!=` 是判断两个值是否不相等，`!==` 是判断两个值是否不全等。
```typescript
const a = 1;
const b = '1';
console.log(a != b); // false
console.log(a !== b); // true
```
### `&&` 和 `||`
`&&` 是逻辑与，`||` 是逻辑或。
```typescript
const a = true;
const b = false;
console.log(a && b); // false
console.log(a || b); // true
```
除此之外，`&&`还可以用作条件判断，例如当 `a` 为真时，设置 `b` 的值为 `1`。
```typescript
const a = true;
let b = 0;
a && (b = 1);
console.log(b); // 1
```
### `!`
`!` 是逻辑非。
```typescript
const a = true;
console.log(!a); // false
```

## 三元运算符
三元运算符是一种简单的条件判断语句，语法是`{condition 条件} ? {true statement 真语句} : {false statement 假语句}`  
在下面这个例子中，如果 `a` 为真，则 `b` 的值为 `1`，否则为 `0`。
```typescript
const a = true;
const b = a ? 1 : 0;
console.log(b); // 1
```

## if ... else if ... else
`if` 语句是最基本的条件判断语句，`else if` 和 `else` 是在 `if` 语句的基础上增加了多个条件判断。`if` 是必须的，`else if` 和 `else` 是可选的，其中 `else if` 可以有多个，`else` 只能有一个。基础语法如下：
```typescript
if (condition1) {
  // 当 condition1 为真时执行
} else if (condition2) {
  // 当 condition1 为假且 condition2 为真时执行
} else {
  // 当 condition1 和 condition2 都为假时执行
}
```

## switch ... case
当需要通过一个语句的多个结果来执行不同的操作时，我们可以使用 `switch` 语句。`switch` 语句会根据一个表达式的值来匹配 `case` 语句，如果匹配成功，则执行对应的 `case` 语句。`switch` 语句的基础语法如下：
```typescript
switch (expression) {
  case value1:
    // 当 expression 的值等于 value1 时执行
    break;
  case value2:
    // 当 expression 的值等于 value2 时执行
    break;
  default:
    // 当 expression 的值不等于任何 case 时执行
}
```
注意，在 `value1` 和 `value2` 对应的语句中，都出现了一个 `break` 语句，这个语句的作用是终止 `switch` 语句的执行。如果没有 `break` 语句，`switch` 语句会继续执行下一个 `case` 语句。在这个例子里，如果 `expression` 的值等于 `value1` 并且没有 `break` 语句，那么 `case value1` 和 `case value2` 对应的两个语句都会被执行。  
之所以 `default` 没有 `break` 语句，是因为 `default` 语句是 `switch` 语句的最后一个语句，所以不需要终止 `switch` 语句的执行。  

## for 循环
`for` 循环是一种常见的循环语句，它会重复执行一个语句块，直到指定的条件为假。`for` 循环的基础语法如下：
```typescript
for (initialization; condition; increment) {
    // initialization 用于初始化计数器
    // condition 用于判断是否继续执行循环
    // increment 用于更新计数器
}
```
一个例子，在这里会执行 10 次 `console.log(i)`。
```typescript
for (let i = 0; i < 10; i++) {
    // 因为 i 从 0 开始，所以会执行 10 次
    console.log(i);
}
```

## for ... in 循环
`for ... in` 循环在 `for` 循环的基础上增加了对对象的遍历。`for ... in` 循环的基础语法如下：
```typescript
for (variable in object) {
    // variable 为对象的属性名
    // object 为要遍历的对象
}
```
一个例子，在这里会遍历一个数组的所有元素。
```typescript
const arr = [1, 2, 3];
for (const i in arr) {
    console.log(arr[i]);
}
```

## foreach 循环
类似于 `for ... in` 循环，`foreach` 循环也是用于遍历对象的。`foreach` 循环的基础语法如下：
```typescript
object.forEach((value, index) => {
    // value 为对象的属性值
    // index 为对象的属性名
});
```
这里的 `index` 可以省略，如果省略。还是一样，给出一个遍历数组的例子。
```typescript
const arr = [1, 2, 3];
arr.forEach(value => {
    console.log(value);
});
```

## while 循环
`while` 循环会在指定的条件为真时重复执行一个语句块。`while` 循环的基础语法如下：
```typescript
while (condition) {
    // condition 用于判断是否继续执行循环
}
```
在这种写法中，如果 `condition` 为假，那么一次循环都不会执行。如果想要让循环至少执行一次，可以使用 `do ... while` 循环。这样就会把判断条件放在循环的最后，确保循环至少执行一次。
```typescript
do {
    // condition 用于判断是否继续执行循环
} while (condition);
```

## break 和 continue
`break` 语句用于终止循环，`continue` 语句用于跳过当前循环的剩余代码，直接进入下一次循环。在之前的 `switch` 语句中，我们已经看到了 `break` 语句的用法。在下面的例子中，我们会看到 `continue` 语句的用法。
```typescript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // 跳过偶数
    }
    console.log(i);
}
```