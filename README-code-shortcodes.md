# 代码引用 Shortcodes 使用说明

本项目提供了两种代码引用的 shortcode，适用于不同的使用场景。

## 1. code-block - 简单代码链接

### 用途
用于引用外部代码文件，提供链接和基本信息，用户点击链接查看完整代码。

### 使用方法
```markdown
{{< code-block url="https://raw.githubusercontent.com/user/repo/main/file.cpp" lang="cpp" title="代码标题" >}}
```

### 参数说明
- `url` (必需): 代码文件的 URL
- `lang` (可选): 代码语言，用于标识
- `title` (可选): 代码块标题

### 示例
```markdown
{{< code-block url="https://raw.githubusercontent.com/cold-rivers-snow/recipes/master/datastruct/priority_queue.cpp" lang="cpp" title="优先队列完整实现" >}}
```

### 效果
- 显示代码文件信息
- 提供到源文件的链接
- 简洁可靠，无网络依赖问题

## 2. remote-code - 远程代码加载

### 用途
尝试直接在页面中加载和显示远程代码内容，支持语法高亮和复制功能。

### 使用方法
```markdown
{{< remote-code url="https://raw.githubusercontent.com/user/repo/main/file.cpp" lang="cpp" title="代码标题" lines="1-50" >}}
```

### 参数说明
- `url` (必需): 代码文件的 URL
- `lang` (可选): 代码语言，用于语法高亮
- `title` (可选): 代码块标题
- `lines` (可选): 显示行范围，格式 "开始行-结束行"

### 示例
```markdown
{{< remote-code url="https://raw.githubusercontent.com/user/repo/main/example.cpp" lang="cpp" title="C++ 示例" lines="1-30" >}}
```

### 功能特性
- 自动加载远程代码内容
- 支持语法高亮显示
- 一键复制功能
- 行号显示
- 错误处理和重试机制

### 注意事项
- 依赖网络连接
- 可能受 CORS 限制影响
- 某些网站可能无法直接访问

## 推荐使用方式

### 简单引用 (推荐)
对于大多数情况，推荐使用 `code-block`：

```markdown
## 实战示例

### 优先队列实现
以下是一个完整的优先队列实现：

{{< code-block url="https://raw.githubusercontent.com/cold-rivers-snow/recipes/master/datastruct/priority_queue.cpp" lang="cpp" title="优先队列完整实现" >}}
```

### 内嵌显示 (高级)
如果需要直接在页面显示代码，使用 `remote-code`：

```markdown
### 代码片段
关键实现部分：

{{< remote-code url="https://raw.githubusercontent.com/user/repo/main/core.cpp" lang="cpp" title="核心算法" lines="50-100" >}}
```

## 最佳实践

1. **优先使用 code-block**：更稳定可靠
2. **提供描述性标题**：帮助读者理解代码用途
3. **使用稳定的 URL**：避免链接失效
4. **选择合适的代码片段**：使用 `lines` 参数显示关键部分
5. **添加上下文说明**：在代码块前后提供必要的解释

## 支持的代码语言

- `cpp`, `c++` - C++
- `python`, `py` - Python
- `javascript`, `js` - JavaScript
- `typescript`, `ts` - TypeScript
- `go` - Go
- `rust`, `rs` - Rust
- `java` - Java
- `bash`, `shell` - Shell
- `json` - JSON
- `yaml`, `yml` - YAML
- `html` - HTML
- `css` - CSS
- `sql` - SQL
- `text` - 纯文本

## 故障排除

### code-block 不显示
- 检查 shortcode 语法是否正确
- 确认 URL 参数已提供

### remote-code 加载失败
- 检查网络连接
- 确认 URL 可直接访问
- 查看浏览器控制台错误信息
- 考虑改用 code-block

### 链接无法访问
- 使用 GitHub raw 链接格式
- 确认文件是公开的
- 检查 URL 拼写是否正确

这两种方式为不同需求提供了灵活的解决方案！