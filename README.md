
![Globalegrow](http://www.globalegrow.com/temp/skin4/dist/images/domeimg/ch/logo.jpg)

---

## 环球易购前端开发规范

所谓规范，是需要大家遵守的标准。为了项目的可维护性，以及前端团队的建设，特撰写此规范文档。
- [线上地址](https://wuuashen.gitbooks.io/globalegrow-web-standard)
* [Github](https://github.com/wuuashen/globalegrow-web-standard)
- 更新日期：2017年3月

## 目标

####节约运营成本

采用WEB标准，书写页面，我们可以做到表现和形式及内容的分离，我们采用HTML5语言来表现数据，用CSS来控制形式，写的好的页面，HTML代码中基本上都是用户要看到的数据，而其他修饰性的东西，全部由CSS控制。这样来页面的体积就大大减少了，带宽上的费用就降低了。

####用户友好性及SEO

采用WEB标准开发的页面，结构清晰，页面体积小，浏览器兼容性好。普通用户访问的时候，页面打开速度快，而且不管是那种浏览器，都能够正常访问页面，且页面的结构清晰，要找的数据可以很方便的浏览到。
对搜索引擎来说，一个标准的WEB开发的页面，是做过SEO优化的，对搜索引擎更加友好，被搜索引擎收录的机会更多。

####提高开发效率、降低项目维护成本

统一标准的页面，编程习惯的一致性，更加便于后期工作的维护，也能缩短新员工的适应和熟悉代码的时间，有利于团队效率的提高。
通过代码风格的一致性，降低维护代码的成本以及提高多人协作的效率。同时遵守最佳实践，确保页面性能得到最佳优化和高效的代码。

## 对象
本规范适合以下三类人员阅读：
- 全体web前端开发人员
- 需要与前端对接口的后端人员（针对性章节：）
- 对公司前端开发感兴趣的其它岗位人员


## 实施
此规范是由技术委员会主导，融合了大家的经验并参考行业规范/指南制定的，如无特殊情况，环球易购前端开发人员都需要遵守此规范。

目前公司项目较多，分配在各个项目部，各站没有一个开发标准，更没有全公司统一，新同事初次接触项目也会比较迷茫，作为一个专业的开发团队，也需要逐渐统一标准。

但目前项目部现有项目由于各种历史原因，对其旧代码进行统一修改比较困难、有风险，我们只能做新的需求、改版、新项目时严格按照此规范执行，这是一个长期的过程，希望大家一起努力。

>———— 种下一棵树最好的时间是25年前，其次是现在。




## 约定
为了让同事更好的理解、遵守文档中的规范，本文档将采用以下约定。

- #### 代码示例的注释或说明

  - Good / Bad： 在无特殊情况下，根据实际项目情况需要遵守  
  - Must / Must Not： 必须按照代码中的示例遵守
  
- #### 参考链接
蓝色文字是参考链接或者扩展阅读，本规范对链接中的文章有参考，可以根据兴趣了解




## 更新与维护
在前端技术发展如此快速的大环境下，该规范只是保证大方向一致性和最佳实践的阶段性总结，不是最后结论，本文档会随着时间而更新或者增加章节。

我们尽最大的努力确保正文没有错误，但错误可能在所难免，技术委员会有考虑不全面的地方。如本文档 出现错别字、遗漏、代码示例错误、不合理等任何问题，大家可以使用以下方法与我们反馈：

* 鼠标悬停在正文中，正文右边会出现 "+" 符号，点击后输入反馈，点击 "Post" ，这是Gitbook自带的反馈功能；

如果你熟悉Git和MarkDown的话，我们更推荐用以下方法直接编译此文档：

* Fork 本文档的 [Github](https://github.com/wuuashen/globalegrow-web-standard)，点击页面头部的 EDIT THIS PAGE 可以定位到当前所处原文件，修改后使用Git提交，我会统一合并。

页面底部增加了 [多说](https://github.com/codepiano/gitbook-plugin-duoshuo) 评论功能，大家也可以在这里评论哦。

希望大家一起参与本规范文档的更新与维护。

--- 



## 目录 Summary

* [开始](README.md)
* [通用规范](common.md)
  * [基本准则](common.md#基本准则)
  * [编码](common.md#编码)
  * [缩进/换行](common.md#缩进换行)
  * [优雅降级和渐进增强](common.md#优雅降级和渐进增强)
  * [协议](common.md#协议)
  * [代码检查/验证工具](common.md#代码检查验证工具)
  * [参考资料](common.md#参考资料)
* [HTML规范](html.md)
  * [基本](html.md#基本)
  * [文档类型](html.md#文档类型)
  * [字符编码](html.md#字符编码)
  * [标签嵌套](html.md#标签嵌套)
  * [一律使用小写字母](html.md#一律使用小写字母)
  * [属性](html.md#属性)
  * [type](html.md#type)
  * [元素并排](html.md#元素并排)
  * [元素转换](html.md#元素转换)
  * [资源加载顺序](html.md#资源加载顺序)
  * [属性顺序](html.md#属性顺序)
  * [减少标签的数量](html.md#减少标签的数量)
  * [注释](html.md#注释)
  * [参考资料](html.md#参考资料)
* [CSS规范](css.md)
  * [基本](css.md#基本)
  * [命名](css.md#命名)
  * [选择器](css.md#选择器)
  * [样式换行](css.md#样式换行)
  * [空格](css.md#空格)
  * [引号](css.md#引号)
  * [声明顺序](css.md#声明顺序)
  * [媒体查询](css.md#媒体查询)
  * [简写形式的属性声明](css.md#简写形式的属性声明)
  * [清除浮动](css.md#清除浮动)
  * [预处理器](css.md#预处理器)
  * [单行注释](css.md#单行注释)
  * [多行注释](css.md#多行注释)
  * [参考资料](css.md#参考资料)
* [JavaScript](javascript.md)
  * [基本](javascript.md#基本)
  * [变量命名](javascript.md#变量命名)
  * [变量声明](javascript.md#变量声明)
  * [函数](javascript.md#函数)
  * [数组、对象](javascript.md#数组、对象)
  * [分号](javascript.md#分号)
  * [空格](javascript.md#空格)
  * [空行](javascript.md#空行)
  * [换行](javascript.md#换行)
  * [单行注释](javascript.md#单行注释)
  * [多行注释](javascript.md#多行注释)
  * [文档注释](javascript.md#文档注释)
  * [字符串引号](javascript.md#字符串引号)
  * [括号](javascript.md#括号)
  * [undefined](javascript.md#undefined)
  * [jQuery](javascript.md#jQuery)
  * [参考资料](javascript.md#参考资料)
* [项目目录/文件](folder.md)
  * [历史项目](folder.md#历史项目)
  * [文件/目录命名](folder.md#文件目录命名)
  * [雪碧图](folder.md#雪碧图)
* [JSON数据传输标准](json.md)
  * [命名](json.md#命名)
  * [基本响应示例](json.md#基本响应示例)
* [兼容性](compatible.md)

