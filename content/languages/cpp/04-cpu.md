---
title: "C++ CPU"
weight: 3
---

# C++ 内存管理详解

内存管理是C++编程的核心技能之一，正确的内存管理能避免内存泄漏和悬空指针等问题。

## 智能指针

### unique_ptr
独占所有权的智能指针：

```cpp
#include <memory>

std::unique_ptr<int> ptr = std::make_unique<int>(42);
// 自动管理内存，无需手动delete
```

### shared_ptr
共享所有权的智能指针：

```cpp
std::shared_ptr<int> ptr1 = std::make_shared<int>(100);
std::shared_ptr<int> ptr2 = ptr1;  // 引用计数增加
// 当最后一个shared_ptr销毁时，内存才会被释放
```

### weak_ptr
解决循环引用问题：

```cpp
std::weak_ptr<int> weak = ptr1;
if (auto locked = weak.lock()) {
    // 安全访问对象
    std::cout << *locked << std::endl;
}
```

## RAII原则

Resource Acquisition Is Initialization - 资源获取即初始化：

```cpp
class FileHandler {
private:
    FILE* file;
public:
    FileHandler(const char* filename) {
        file = fopen(filename, "r");
        if (!file) throw std::runtime_error("Cannot open file");
    }
    
    ~FileHandler() {
        if (file) fclose(file);
    }
    
    // 禁止拷贝
    FileHandler(const FileHandler&) = delete;
    FileHandler& operator=(const FileHandler&) = delete;
};
```

> [!WARNING]
> 避免使用裸指针进行动态内存管理，优先使用智能指针。