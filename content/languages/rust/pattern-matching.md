---
title: "Rust 模式匹配"
weight: 2
---

# Rust 模式匹配

模式匹配是Rust中非常强大的特性，通过`match`表达式和其他模式匹配语法，可以编写简洁而安全的代码。

## match 表达式

### 基本用法
```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

### 绑定值的模式
```rust
#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
    // --snip--
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        }
    }
}
```

## Option 枚举匹配

```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

## if let 语法糖

当只关心一个模式时，可以使用`if let`：

```rust
let some_u8_value = Some(0u8);

// 使用 match
match some_u8_value {
    Some(3) => println!("three"),
    _ => (),
}

// 使用 if let，更简洁
if let Some(3) = some_u8_value {
    println!("three");
}
```

## while let 循环

```rust
let mut stack = Vec::new();
stack.push(1);
stack.push(2);
stack.push(3);

while let Some(top) = stack.pop() {
    println!("{}", top);
}
```

> [!TIP]
> 模式匹配必须是穷尽的，编译器会检查所有可能的情况都被处理。