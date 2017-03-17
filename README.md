# 

![Globalegrow](http://www.globalegrow.com/temp/skin4/dist/images/domeimg/ch/logo.jpg)

---

## 开始
所谓规范，是需要大家遵守的标准。为了项目的可维护性，以及前端团队的建设，特撰写此规范手册。
- [线上地址](https://wuuashen.gitbooks.io/globalegrow-web-standard/content/)
- 更新日期：2017年3月


## 对象
本规范适合以下三类人员阅读：
- 全体web前端开发人员
- 需要与前端对接口的后端人员（针对性章节：）
- 对公司前端开发感兴趣的其它岗位人员


## 实施
此规范是由技术委员会主导，融合了大家的经验并参考行业规范/指南制定的，如无特殊情况，环球易购前端开发人员都需要遵守此规范。

## 约定
为了让同事更好的理解、遵守手册中的规范，本手册将采用以下约定。

#### 代码示例
代码示例中可能会出现以下注释或说明

  - Good / Bad： 在无特殊情况下，根据实际项目情况需要遵守  
  - Must / Must Not： 必须按照代码中的示例遵守
  
#### 参考
蓝色文字是参考链接或者扩展阅读，本规范对链接中的文章有参考，可以根据兴趣了解




## 更新
在前端技术发展如此快速的大环境下，该规范只是保证大方向一致性和最佳实践的阶段性总结，不是最后结论，它会随着时间而更新。

我们尽最大的努力确保正文没有错误，但错误可能在所难免，技术委员会有考虑不全面的地方。如本手册 出现错别字、遗漏、错误等任何问题，大家可以使用以下二种方法给我们反馈：

1. 鼠标悬停在正文中，正文右边会出现 "+" 符号，点击后输入反馈，点击 "Post" ；
2. Fork 本手册的 [Github](https://wuuashen.gitbooks.io/globalegrow-web-standard/content/)，提交在Git，审核通过后我会统一合并。


## 目标

- ####节约运营成本
采用WEB标准，书写页面，我们可以做到表现和形式及内容的分离，我们采用HTML5语言来表现数据，用CSS来控制形式，写的好的页面，HTML代码中基本上都是用户要看到的数据，而其他修饰性的东西，全部由CSS控制。这样来页面的体积就大大减少了，带宽上的费用就降低了。

- ####用户友好性及SEO
采用WEB标准开发的页面，结构清晰，页面体积小，浏览器兼容性好。普通用户访问的时候，页面打开速度快，而且不管是那种浏览器，都能够正常访问页面，且页面的结构清晰，要找的数据可以很方便的浏览到。
对搜索引擎来说，一个标准的WEB开发的页面，是做过SEO优化的，对搜索引擎更加友好，被搜索引擎收录的机会更多。

- ####提高开发效率、降低项目维护成本
统一标准的页面，编程习惯的一致性，更加便于后期工作的维护，也能大大缩短新员工的适应和熟悉代码的时间，有利于团队效率的提高。
通过代码风格的一致性，降低维护代码的成本以及提高多人协作的效率。同时遵守最佳实践，确保页面性能得到最佳优化和高效的代码。


## 现状
目前公司项目较多，分配在各个项目部，各站没有一个开发标准，更没有全公司统一，新同事初次接触项目也会比较迷茫，作为一个专业的开发团队，也需要逐渐统一标准。目前项目部现有项目由于各种历史原因，对其代码进行统一修改比较困难、有风险，我们只能做新需求、改版、新项目时按照此规范执行，这是一个长期的过程，希望大家一起努力。

--- 

>———— 种下一棵树最好的时间是25年前，其次是现在。


## 目录 Summary

* [开始](README.md)
* [通用规范](common.md)
  * [理想](common.md#理想)
  * [编码](common.md#编码)
  * [缩进/换行](common.md#缩进/换行)
  * [优雅降级和渐进增强](common.md#优雅降级和渐进增强)
  * [文件/资源命名](common.md#文件/资源命名)
  * [协议](common.md#协议)
  * [代码检查/验证](common.md#代码检查/验证)
  * [参考资料](common.md#参考资料)
* [HTML规范](html.md)
  * 基本
  * 文档类型
  * 字符编码
  * 标签嵌套
  * 一律使用小写字母
  * 属性
  * Type 属性
  * 元素并排
  * 元素转换
  * 资源加载顺序
  * 属性顺序
  * 减少标签的数量
  * 参考资料
* [CSS规范](css.md)
  * 基本
  * 避免使用 id 命名
  * class 命名
  * 选择器
  * 媒体查询
  * 简写形式的属性声明
  * 参考资料
* [JavaScript](javascript.md)
* [注释](explanatory.md)
* [兼容性](compatible.md)
* [第三章节](3.md)
* [尾巴](end.md)


