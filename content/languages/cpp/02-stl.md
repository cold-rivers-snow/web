---
title: "C++ STL 容器详解"
weight: 2
---

# STL 容器深入解析

STL（Standard Template Library）是C++标准库的重要组成部分，提供了丰富的容器类型。

## 序列容器

### vector
动态数组，支持随机访问：

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    
    // 添加元素
    vec.push_back(6);
    
    // 遍历
    for (const auto& item : vec) {
        std::cout << item << " ";
    }
    
    return 0;
}
```

### list
双向链表，支持高效的插入和删除：

```cpp
#include <list>

std::list<int> myList = {1, 2, 3};
myList.push_front(0);  // 在前面插入
myList.push_back(4);   // 在后面插入
```

## 关联容器

### map
键值对容器，自动排序：

```cpp
#include <map>
#include <string>

std::map<std::string, int> scores;
scores["Alice"] = 95;
scores["Bob"] = 87;
```

> [!TIP]
> 使用 `unordered_map` 可以获得更好的查找性能，但不保证顺序。
