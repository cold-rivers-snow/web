---
title: "Rust 所有权系统"
weight: 1
---

# Rust 所有权系统详解

所有权（Ownership）是Rust最独特的特性，它使Rust能够在不使用垃圾回收的情况下保证内存安全。

## 所有权规则

1. Rust中的每一个值都有一个被称为其所有者（owner）的变量
2. 值在任一时刻有且只有一个所有者
3. 当所有者离开作用域，这个值将被丢弃

## 移动语义

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1的值移动到s2，s1不再有效
    
    // println!("{}", s1);  // 编译错误！s1已经无效
    println!("{}", s2);     // 正确
}
```

## 借用和引用

### 不可变引用
```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);  // 借用s1
    println!("The length of '{}' is {}.", s1, len);  // s1仍然有效
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

### 可变引用
```rust
fn main() {
    let mut s = String::from("hello");
    change(&mut s);
    println!("{}", s);  // 输出: hello, world
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

## 生命周期

生命周期确保引用有效的时间不会超过其引用的数据：

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

> [!NOTE]
> 所有权系统在编译时检查内存安全，运行时没有额外开销。
