# 通用规范

---

## 理想

不管有多少人共同参与同一项目，尽量确保每一行代码都像是同一个人编写的。

## 编码

文件统一使用utf-8编码

## 缩进/换行

所有代码缩进使用4个空格（建议在编辑器/IDE中设置Tab Size为4，这样可以按一次Tab缩进），一定不要混用tab和space

## 优雅降级和渐进增强

HTML5 和 CSS3 的快速发展，给我们带来了极大的便利，比如从此再也不用花费大量的时间只是为了设计一个圆角的效果。

但是！我们不能像控制机器一样来控制所有的人都一夜之间升级到现代浏览器，因为那些 不够现代的浏览器 诞生之时，HTML5和CSS3尚未被正式推出。

于是，我们的问题来了：针对那些不支持新特性的浏览器而言，我们是直接放弃这些用户群呢，还是直接不用这些新特性，老老实实的用图片拼出圆角的特效？

我想，答案是显而易见的。我们不能放弃那些因为这样那样的原因没法升级他们的浏览器用户，但从开发效率、网站性能、可维护各方面考虑，尽量使用稳定、标准的代码来实现需求。

## 文件/资源命名

在 web 项目中，所有的文件名应该都遵循同一命名约定。以可读性而言，减号（-）是用来分隔文件名的不二之选。同时它也是常见的 URL 分隔符（i.e. //example.com/blog/my-blog-entry or //s.example.com/images/big-black-background.jpg），所以理所当然的，减号应该也是用来分隔资源名称的好选择。

请确保文件命名总是以字母开头而不是数字。而以特殊字符开头命名的文件，一般都有特殊的含义与用处。

资源的字母名称必须全为小写，这是因为在某些对大小写字母敏感的操作系统中，当文件通过工具压缩混淆后，或者人为修改过后，大小写不同而导致引用文件不同的错误，很难被发现。

还有一些情况下，需要对文件增加前后缀或特定的扩展名（比如 .min.js, .min.css），抑或一串前缀（比如 3fa89b.main.min.css）。这种情况下，建议使用点分隔符来区分这些在文件名中带有清晰意义的元数据。

不推荐命名：

```
MyScript.js
myCamelCaseName.css
i_love_underscores.html
1001-scripts.js
my-file-min.css
```

推荐命名：

```
my-script.js
my-camel-case-name.css
i-love-underscores.html
thousand-and-one-scripts.js
my-file.min.css
```

## 协议

不要指定引入资源所带的具体协议。

当引入图片或其他媒体文件，还有样式和脚本时，URLs 所指向的具体路径，不要指定协议部分（http:, https:），除非这两者协议都不可用。

不指定协议使得 URL 从绝对的获取路径转变为相对的，在请求资源协议无法确定时非常好用，而且还能为文件大小节省几个字节。


```html
<!-- Bad -->
<script src="http://cdn.com/file.min.js"></script>
<!-- Good -->
<script src="//cdn.com/file.min.js"></script>
```

## 代码检查/验证工具

为符合 W3C 标准及 SEO 优化，我们在遵守本手册规范的基本之上，上线的网站都要使用以下工具来检查代码，虽说优化没有100分，但我们要尽量符合要求
- 使用 [W3C Markup Validation Service](https://validator.w3.org/) 验证html规范
- 使用 [CSS Validation Service](http://jigsaw.w3.org/css-validator/) 验证css规范

为了提高代码的统一性和整洁度，我们将用 [ESLint](http://eslint.cn/) 来检查JS代码

为了提高网站的打开速度，我们上线的网站都要使用 [Pingdom](https://tools.pingdom.com/) 来检查网站的打开速度

---

## 参考资料

* [编码规范 by @mdo](http://codeguide.bootcss.com/)







