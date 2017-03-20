# JavaScript规范

---

## 基本

* 用'===', '!=='代替'==', '!='

* 不要在同个作用域下声明同名变量

* 不要声明了变量却不使用，更不要使用未声明的变量

* 使用未确定的变量或者dom元素前，一定要事先判断是否定义/存在

* 请尽量避免大量的dom操作，尤其是大量重复的$\(\)

* 提交代码前请删除代码所有的测试代码 如 debugger、 return false、 console等

* 对上下文this的引用建议使用 that 或者 self

* 不管是使用原生JS还是框架、库，都应该尽量减少DOM操作

* 尽量避免使用 eval 函数，常见的JSON数据转换请使用 [JSON parsing](http://caniuse.com/#search=JSON)

## 变量命名

* 标准变量采用驼峰式命名（除了对象的属性外）
* 命令一定要符合当前场景的含义，让名称具有描述性，且尽量简短
* 全局变量、常量考虑全大写，用下划线连接
* 构造函数，大写第一个字母
* jQuery对象必须以'$'开头命名
* 命名私有属性时建议使用前置下划线

```javascript
var thisIsMyName;

var COOKIESDIAMON = '.dezzal.com';

var MAX_COUNT = 10;

function Person(name) {
    this.name = name;
}
new Person();

// Bad
var body = $('body');
// Good
var $body = $('body');

// Bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
// Good
this._firstName = 'Panda';
```

## 变量声明

* 尽量减少全局变量的声明，声明变量时一定要使用var \(此处暂不考虑ES6\)
* 一个函数作用域中所有的变量声明尽量提到函数开头，且用一个var声明，不需要出现两个连续的var声明。

```javascript
// Bad
function doSomethingWithItems(items) {
    var value = 10;
    var result = value + 10;

    // 一些代码...    
    var i;

    // 一些代码...    
    var len;

    for (i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}


// Good
function doSomethingWithItems(items) {
    // 多个声明尽量提到函数开头，且使用一个var
    var value = 10,
        result = value + 10,
        i,
        len;

    for (i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}
```

## 函数

* 无论是函数声明还是函数表达式，'\('前不要空格，但'{'前一定要有空格；
* 函数调用括号前不需要空格；
* 立即执行函数外必须包一层括号；
* 不要给inline function命名；
* 参数之间用', '分隔，注意逗号后有一个空格。

```javascript
// '('前不要空格，但'{'前一定要有空
var doSomething = function(item) {
    // do something
};

function doSomething(item) {
    // do something
}

// Bad
doSomething (item);

// Good
doSomething(item);

// 立即执行函数外必须包一层括号，且前面需要加分号
;(function() {
    return 1;
})();

// Bad
[1, 2].forEach(function x() {
    ...
});

// Good
[1, 2].forEach(function() {
    ...
});

// 参数之间用', '分隔，注意逗号后有一个空格。
var doSomething = function(a, b, c) {
    // do something
};
```

## 数组、对象

* 对象属性名不需要加引号；
* 对象以缩进的形式书写，不要写在一行；
* 数组、对象最后一个不要逗号。

```javascript
// Bad
var a = {
    'b': 1
};

var a = {b: 1};

var a = {
    b: 1,
    c: 2,
};

// Good
var a = {
    b: 1,
    c: 2
};
```

## 分号

以下几种情况后需加分号：

* 变量声明
* 表达式
* return
* throw
* break
* continue
* do-while

```javascript
/* var declaration */
var x = 1;

/* expression statement */
x++;

/* do-while */
do {
    x++;
} while (x < 10);
```

## 空格

**以下几种情况不需要空格：**

* 对象的属性名后
* 前缀一元运算符后
* 后缀一元运算符前
* 函数调用括号前
* 无论是函数声明还是函数表达式，'\('前不要空格
* 数组的'\['后和'\]'前
* 对象的'{'后和'}'前
* 运算符'\('后和'\)'前

**以下几种情况需要空格：**

* 二元运算符前后
* 三元运算符'?:'前后
* 代码块'{'前
* 下列关键字前：else, while, catch, finally
* 下列关键字后：if, else, for, while, do, switch, case, try, catch, finally, with, return, typeof
* 单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'\*'后
* 对象的属性值前
* for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
* 无论是函数声明还是函数表达式，'{'前一定要有空格
* 函数的参数之间

对以上空格规范理解不明确的可以直接看代码 ：

```javascript
// Bad
var a = {
    b :1
};
// Good
var a = {
    b: 1
};

// Bad
++ x;
y ++;
z = x?1:2;
// Good
++x;
y++;
z = x ? 1 : 2;

// Bad
var a = [ 1, 2 ];
// Good
var a = [1, 2];

// Bad
var a = ( 1+2 )*3;
// Good
var a = (1 + 2) * 3;

// '('前不要加空格
// '{'前要加空格
// 参数之间要空格隔开
var doSomething = function(a, b, c) {
    // do something
};

// '('前不要加空格
doSomething(item);

// Bad
for(i=0;i<6;i++){
    x++;
}
// Good
for (i = 0; i < 6; i++) {
    x++;
}
```

## 空行

以下几种情况需要空行：

* 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
* 注释前（当注释在代码块的第一行时，则无需空行）
* 代码块后（在函数调用、数组、对象中则无需空行）
* 文件最后保留一个空行

```javascript
// 变量声明后需要空格
var x = 1;

// 当变量声明在代码块的最后一行时，则无需空行
if (x >= 1) {
    var y = x + 1;
}

var a = 2;

// 注释前需要空格
a++;

function b() {
    // 当注释在第一行时不需要空行
    return a;
}

// 代码块后需要空行
for (var i = 0; i < 2; i++) {
    if (true) {
        return false;
    }

    continue;
}

var obj = {
    foo: function() {
        return 1;
    },

    bar: function() {
        return 2;
    }
};

// 在函数调用、数组、对象中则无需空行
func(
    2,
    function() {
        a++;
    },
    3
);

var foo = [
    2,
    function() {
        a++;
    },
    3
];


var foo = {
    a: 2,
    b: function() {
        a++;
    },
    c: 3
};
```

## 换行

* 换行的地方，行末必须有','或者运算符；

* 以下几种情况不需要换行：

  * 下列关键字后：else, catch, finally
  * 代码块'{'前 

* 以下几种情况需要换行：

  * 代码块'{'后和'}'前
  * 变量赋值后

```javascript
// Bad
var a = {
    b: 1
    , c: 2
};

x = y
    ? 1 : 2;

// Good
var a = {
    b: 1,
    c: 2
};

x = y ? 1 : 2;

// 这些关键字后不需要换行：else, catch, finally
if (condition) {
    ...
} else {
    ...
}

try {
    ...
} catch (e) {
    ...
} finally {
    ...
}

// Bad
function test()
{
    ...
}

// Good
function test() {
    ...
}

// Bad
var a, foo = 7, b,
    c, bar = 8;

// Good
var a,
    foo = 7,
    b, c, bar = 8;
```

## 单行注释

* 双斜线后，必须跟一个空格；
* 缩进与下一行代码保持一致；
* 可位于一个代码行的末尾，与代码间隔一个空格。

```javascript
if (condition) {
    // 这是一行注释
    allowed();
}

var str = 'wuuashen'; // 这也是个注释
```

## 多行注释

最少三行, '\*'后跟一个空格，具体参照下面的代码；

建议在以下情况下使用：

* 公共方法
* 难于理解的代码段
* 可能存在错误的代码段
* 浏览器特殊的HACK代码
* 业务逻辑强相关的代码

```javascript
/**
 * 在'*'后面要空一格
 * 第二行
 */
var x = 1;

/**
 * 全局切换币种方法
 * 使用方法： Currency.set(); <span class="site-price" data-orgp=""></span>
 */
import Cookies from 'src/plugins/js.cookie';
...
```

## 文档注释

各类标签@param, @method等，更新请参考以下资料

拓展阅读：[usejsdoc](http://usejsdoc.org/) / [JSDoc Guide](http://yuri4ever.github.io/jsdoc/) / [sublime-jsDoc](https://github.com/spadgos/sublime-jsdocs/)

建议在以下情况下使用：

* 所有常量
* 所有函数
* 所有类

```javascript
/**
 * @callback myCallback
 * @desc 这是自定义的type
 * @param {number} a - 参数a
 * @returns {boolean} 返回值
 */
function myCallback(a) {
    ...
    return true;
}
```

## 字符串引号

字符串最外层统一使用单引号，这样输入单引号不需要按住shift，方便输入。且在实际使用中，字符串有时候用来拼接HTML。为方便HTML中包含双引号而不需要转义写法

```javascript
// 不推荐
var x = "test";
var z = "<div id=\"test\"></div>";
// 推荐
var y = 'foo',
    z = '<div id="test"></div>';
```

当然，在复杂的数据到视图字符串的转换过程，考虑选用一种模板引擎，这里建议大家使用 [artTemplate](https://github.com/aui/artTemplate)

## 括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with

```javascript
// Bad
if (condition)
    doSomething();

// Good
if (condition) {
    doSomething();
}
```

## undefined

永远不要直接使用undefined进行变量判断，而要使用typeof和字符串'undefined'对变量进行判断。

```javascript
// Bad
if (person === undefined) {
    ...
}

// Good
if (typeof person === 'undefined') {
    ...
}
```

## jQuery

尽管前端框架更新迭代速度很很快，但目前大多数网站还是使用 jQuery，但jQuery优势 门槛低和灵活性导致了经常被滥用，以下举例

* DOM操作请务必记住缓存

```js
// Bad
$('#loading').html('完毕');
$('#loading').fadeOut();

// Good
var $loading = $('#loading');
$loading.html('完毕');
$loading.fadeOut();
//或者 
$loading.html('完毕').fadeOut();
```

* 精简jQuery代码  

```js
// Bad
$button.click(function(){
    $target.css('width','50%');
    $target.css('border','1px solid #202020');
    $target.css('color','#fff');
});
// Good
$button.click(function(){
    $target.css({'width':'50%','border':'1px solid #202020','color':'#fff'});
});

// Bad
if($collection.length > 0){..}
// Good
if($collection.length){..}

// 以上代码只是举例，实际应用中，请尽量不要把样式写在JS里
```

* 避免多个ID选择符
```js
// Bad
$('div#myid');
$('div#footer a.myLink');
// Good
$('#myid');
$('#footer .myLink');
```

* 在可能的情况下，使用原生JS来代替jQuery，特别在是在使用JS更方便的情况下

  ```js
    // Bad
    $('input').on('click', function(){
        var str = $(this).val();
    })
    // Good
    $('input').on('click', function(){
        var str = this.value;
    })
  ```

  扩展阅读：[YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com/) / [You-Dont-Need-jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery)

* jQuery还有一些非常好用的方法，如Deferred对象、$.ajax、各种成熟的插件

  扩展阅读：

  * [jQuery的deferred对象详解](http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html)  
  * [延迟对象](http://www.jquery123.com/category/deferred-object/)

## 参考资料

* [JavaScript Style Guide](https://github.com/airbnb/javascript)
* [书写高质量jQuery代码的12条经验](http://www.jianshu.com/p/38f67f866c83)



