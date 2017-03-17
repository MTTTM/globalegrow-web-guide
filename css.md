# CSS规范
--- 

## 基本

- 属性冒号后面要空一格

```css
/* Must Not */
.logo{padding:12px;width:120px;}

/* Must */
.logo{padding: 20px;width: 120px;}
```

- 建议单行书写样式，每个css的属性都写在一行上，利于上下文class的查找；每行一个属性，会造成css文件行数过多，不利于大型项目维护（sublime 插件 [CSS Format](https://packagecontrol.io/packages/CSS%20Format) 可以统一处理）。
> 以下演示为方便对比说明，**示例代码**可能会使用一行一个属性值的情况， 与规范有冲突，特此说明。
   
- 整站样式要reset，因各站略有不同，这里不作统一，参考以下资料
  * [normalize.css](http://necolas.github.io/normalize.css/)
  * [cssreset](http://cssreset.com/)
  
- 所有的字体大小都不应该小于 12px
  
- 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。

- 十六进制值应该**全部小写**，例如，#fff。在扫描文档时，小写字符易于分辨，因为他们的形式更易于区分

- 为选择器中的属性添加双引号，例如，input[type="text"]。[只有在某些情况下](http://mathiasbynens.be/notes/unquoted-attribute-values#css) 是可选的，但是，为了代码的一致性，建议都加上双引号

- 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;

- 需要添加 hack 时应尽可能考虑是否可以采用其他方式解决，如合理的HTML结构、更高明的CSS用法，通常 hack 会导致维护成本的增加或者使某些预处理器无法正确识别

- Class 命名不得以样式信息进行描述，如 .float-right、text-red 等。


## 避免使用 id 命名
对样式的处理，避免使用id，id只能处理js的操作或者唯一标识
```css
/* Must Not */
#header-search{ ... }
#headerSearch{ ... }
#header_search{ ... }
/* 等等... */

/* Must */
.header-search{ ... }
```


## class 命名
- class 名称中只能出现小写字符和中划线（与 js 变量命名区别开，不再使用驼峰和下划线）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，.btn 和 .btn-danger）
- 避免过度任意的简写。.btn 代表 button，但是 .s 不能表达任何意思
- class 名称应当尽可能短，并且意义明确
- 基于最近的父 class 或基本（base） class 作为新 class 的前缀
```css
/* Must Not */
.hotelTitle {font-weight: bold;}
.div1{ ... }
.b{ ... }
/* Must */
.hotel-title {font-weight: bold;}
.main-content{ ... }
.btn{ ... }
```
扩展阅读：[CSS样式名中的下划线与连字符](http://www.cnblogs.com/kaiye/archive/2011/06/13/3039046.html)

## 选择器
- 选择器嵌套要尽可能短，并且尽量限制组成选择器的元素个数，建议不要超过 3层

- 选择标签时，考虑到后期维护命名、层级可能会冲突的问题

```css
/* Bad */
span { ... }
.page-container #stream .stream-item .tweet .tweet-header .username { ... }
.avatar { ... }

/* Good */
.avatar { ... }
.tweet-header .username { ... }
.tweet .avatar { ... }
```

- 如无必要，不得为 id、class 选择器添加类型选择器进行限定

```css
/* Bad */
div#error, p.danger-message { ... }

/* Good */
#error, .danger-message { ... }
```

## 声明顺序
相关的属性声明应当归为一组，并按照下面的顺序排列:

- 位置属性(position, top, right, z-index)

- 盒模型（display, float，width等）

- 大小(width, height, padding, margin)

- 文字系列(font, line-height, letter-spacing, color， text-align等)

- 背景，修饰(background, border等)

- 其他效果(animation, transition等)

```css
.declaration-order {
  /* 位置属性 */
  position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 100;
  
  /* 盒模型 */
  display: block;float: right;width: 100px;height: 100px;

  /* 文字系列*/
  font: normal 13px "Helvetica Neue", sans-serif;line-height: 1.5;color: #333;text-align: center;

  /* 背景，修饰 */
  background-color: #f5f5f5;border: 1px solid #e5e5e5;border-radius: 3px;

  /* 其它效果 */
  opacity: 1;transition: all 500ms;
}
```
完整的属性列表及其排列顺序请参考 [Recess](http://twitter.github.io/recess/) 。


## 媒体查询
将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。下面给出一个典型的实例。
```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}
```


## 简写形式的属性声明
在需要显示地设置所有值的情况下，应当尽量限制使用简写形式的属性声明。常见的滥用简写属性声明的情况如下：
- padding
- margin
- font
- background
- border
- border-radius 

大部分情况下，我们不需要为简写形式的属性声明指定所有值。例如，HTML 的 heading 元素只需要设置上、下边距（margin）的值，因此，在必要的时候，只需覆盖这两个值就可以。过度使用简写形式的属性声明会导致代码混乱，并且会对属性值带来不必要的覆盖从而引起意外的副作用。

```css
/* Bad */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* Good */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```
扩展阅读： [CSS 的简写属性 - CSS | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties)


## 清除浮动

当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 clear 或触发 BFC 的方式进行 clearfix。尽量不使用增加空标签的方式，推荐使用 [clearfix](http://www.daqianduan.com/3606.html) 方案


## 预处理器

使用预处理器（如Less/Sass/PostCSS/Stylus）时，请根据实际需求来选择，尽量用更小的成本实现更复杂的需求，以下规范以目前使用最多的Less举例。

- 代码组织
  必须按以下顺序组织
  * @import
  * 变量声明
  * 样式声明
  
  ```css
  @import "est/all.less";   
  @default-text-color: #333;  
  .page {
      width: 960px;
      margin: 0 auto;
  }
  ```
- 利用性高的css或常量，尽量使用预处理器的变量、Extend、Mixin来减少重复的代码




## 参考资料

- [推荐大家使用的CSS书写规范、顺序](http://www.shejidaren.com/css-written-specifications.html)



