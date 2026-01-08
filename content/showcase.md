---
title: "功能展示 (Features Showcase)"
menu:
  main:
    weight: 99
    params:
      icon: "adjustments"
---

这里展示 Hextra 主题的一些强大功能，帮助你更好地编写技术文档。

## 1. 提示块 (Callouts)

{{< callout type="info" >}}
这是一个 **Info** 提示块。适合放置一般性说明。
{{< /callout >}}

{{< callout type="warning" >}}
这是一个 **Warning** 提示块。适合放置警告信息。
{{< /callout >}}

{{< callout type="error" >}}
这是一个 **Error** 提示块。适合放置错误提示。
{{< /callout >}}

## 2. 选项卡 (Tabs)

适合展示多语言代码或不同系统的操作指令。

{{< tabs items=["C++", "Rust", "Python"] >}}
  {{< tab >}}
  ```cpp
  #include <iostream>
  int main() {
      std::cout << "Hello, Hextra!" << std::endl;
      return 0;
  }
  ```
  {{< /tab >}}
  {{< tab >}}
  ```rust
  fn main() {
      println!("Hello, Hextra!");
  }
  ```
  {{< /tab >}}
  {{< tab >}}
  ```python
  print("Hello, Hextra!")
  ```
  {{< /tab >}}
{{< /tabs >}}

## 3. 步骤条 (Steps)

适合编写教程。

{{< steps >}}
### 第一步：安装 Hugo
```bash
brew install hugo
```

### 第二步：克隆仓库
```bash
git clone https://github.com/imfing/hextra.git my-site
```

### 第三步：运行服务器
```bash
hugo server -D
```
{{< /steps >}}

## 4. 折叠块 (Details)

{{< details title="点击查看详细信息" >}}
这里是隐藏的详细内容。
可以放置很长的日志或代码。
{{< /details >}}

## 5. 卡片 (Cards)

{{< cards >}}
  {{< card link="/web/languages" title="编程语言" icon="code-bracket" >}}
  {{< card link="/web/cs-basics" title="CS 基础" icon="cpu-chip" >}}
{{< /cards >}}
