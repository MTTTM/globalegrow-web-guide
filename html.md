# HTML规范

---

## 基本

- 标签要语义化，这与页面可维护性、seo等都有关系 

    参考资料：
    * [Semantic HTML](http://justineo.github.io/slideshows/semantic-html/#/)
    * [语义化的HTML结构到底有什么好处？](http://www.css88.com/archives/1668)
    * [关于语义化 HTML 以及前端架构的一点思考](http://www.oschina.net/translate/about-html-semantics-front-end-architecture)
    

- 嵌套元素必须缩进换行一次（即4个空格），同级元素对齐，且尽量减少DOM层级

```html
<!-- Must Not -->
<div><ul>
<li><strong></strong></li>
<li><strong></strong></li>
</ul>
</div>

<!-- Must -->
<div>
	<ul>
		<li><strong></strong></li>
		<li><strong></strong></li>
	</ul>
</div>
```

- html中，除了统计代码或特殊情况，尽量不出现js代码片段

- 不要在自闭合（self-closing）元素的尾部添加斜线 -- [HTML5 规范](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag)中明确说明这是可选的

- 块级元素可以包含内联元素和某些块级元素，内联元素不可以包含块级元素，只能包含内联元素

```html
<!-- Must Not -->
<span>
    <div>wrong</div>
</span>

<!-- Must -->
<div>
    <h2>jikexueyuan</h2>
    <p>IT education</p>
</div>
```

- p标签不可以包含块级元素

- li标签可以包含div以及ul，ul的子元素应该只有li

- 尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

- 所有的img标签：
    - 必须添加src属性，懒加载图片也要设置src属性，值为占位符loading图片
    - 不允许出现过时的border属性，使用样式替代
    - 尽可能的加上alt属性，如果alt不知道写什么，暂时可以用网站名代替


## 文档类型
- 全部使用 HTML5 的文档类型申明：`<!DOCTYPE html>`

## 字符编码
- head标签中需要添加编码meta标签
```html
<head>
    <meta charset="UTF-8">
</head>
```

## 标签嵌套
a 不允许嵌套 div这种约束属于语义嵌套约束，与之区别的约束还有严格嵌套约束，比如a 不允许嵌套 a。

严格嵌套约束在所有的浏览器下都不被允许；而语义嵌套约束，浏览器大多会容错处理，生成的文档树可能相互不太一样，嵌套标签不正确可能会出现未知问题。
参考 [WEB标准系列-HTML元素嵌套](http://www.smallni.com/element-nesting/)

## 一律使用小写字母
```html
<!-- Must Not -->
<A HREF="/">Home</A>

<!-- Must -->
<a href="/">Home</a>
```

## 属性
- 对于属性的定义，确保全部使用双引号，不使用单引号
```html
<!-- Must Not -->
<img src='Rosegal.png' alt='Rosegal'>
<!-- Must -->
<img src="Rosegal.png" alt="Rosegal">
```

- 以“data-”为前缀来添加自定义属性，避免使用其他命名方式

```html
<!-- Bad -->
<strong orgp="99"></strong>
<!-- Good -->
<strong data-orgp="99"></strong>
```

- 布尔（boolean）型属性  

    布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。
    
    更多信息请参考 [WhatWG section on boolean attributes](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)：
    
    >元素的布尔型属性如果有值，就是 true，如果没有值，就是 false。
    
    如果一定要为其赋值的话，请参考 WhatWG 规范：
    
    >如果属性存在，其值必须是空字符串或 [...] 属性的规范名称，并且不要在首尾添加空白符。
    简单来说，就是不用赋值。
    
    ```html
    <input type="text" disabled>
        <input type="checkbox" value="1" checked>
    <select>
        <option value="1" selected>1</option>
    </select>
    ```

## Type 属性
根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 text/css 和 text/javascript 分别是它们的默认值。
```html
<!-- Bad -->
<link rel="stylesheet" type="text/css" href="code-guide.css">
<style type="text/css"></style>
<script src="code-guide.js" type="text/javascript"></script>

<!-- Good -->
<link rel="stylesheet" href="code-guide.css">
<style></style>
<script src="code-guide.js"></script>
```


## 元素并排
块级要和块级并列，内联要和内联并列
```html
<!-- Bad -->
<div>
    <span>我是内联元素</span>
    <p>我是块级元素</p>
</div>

<!-- Good -->
<div>
    <h2></h2>
    <p></p>
</div>
<div>
    <img src="" alt="">
    <a href=""></a>
    <span></span>
</div>
```

## 元素转换
行内元素不可以强制转成块级元素，块级元素不可以强制转成行内元素  

如下做法是不推荐的：  
给div标签设置 inline 属性  
给span标签设置 block 属性

## 资源加载顺序
因为浏览器是自上而下加载网页的，所以html的书写顺序会影响资源的加载顺序，进而影响到用户体验及性能，所以必须要严格控制html书写顺序。
如无特殊结构项目，在可能的条件下，尽量按以下顺序：
- 重要的meta声明标签
- css文件
- 页面主要内容布局标签
- 导航、侧边栏标签
- js文件
- 统计代码


## 属性顺序
HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。
- id, name
- class
- data-xxx
- src, for, type, href
- title, alt
- aria-xxx, role

## 减少标签的数量
编写 HTML 代码时，尽量避免多余的父元素，减少DOM数量。
```html
<!-- Bad -->
<span class="avatar">
  <img src="...">
</span>

<!-- Good -->
<img class="avatar" src="...">
```

代码验证不是最终目的，真的目的在于让开发者在经过多次的这种验证过程后，能够深刻理解到怎样的语法或写法是非标准和不推荐的，即使在某些场景下被迫要使用非标准写法，也可以做到心中有数。

## 参考资料

- [html5 Doctor](http://html5doctor.com/)
- [HTML 5.2](http://w3c.github.io/html/single-page.html#introduction)



