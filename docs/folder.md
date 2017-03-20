# 项目目录/文件

 --- 
 

 因本规范是针对公司所有涉及前端参与的项目所定制的，不同项目使用的框架略有不同，所以我们无法规定死目录结构，但可以大致的定一些命名规范。
 
 ## 历史项目

 先简单说明一下目前项目常用的目录结构（新项目请根据实际情况来，不需要参考此目录结构，因为此目录结构因为技术的发展可能已经不符合标准开发的要求了，此示例只是让大家了解目前的结构）

```
├─ trunk/a/b/c                // 分支
│ └─ temp/                    // 模板
│   ├─ skin4/                 // 模板
│   │  ├─ dist                // 前端静态资源
│   │  │   ├─ images          // 图片
│   │  │   ├─ js              // js源文件
│   │  │   ├─ js.plug         // js插件
│   │  │   ├─ json            // 测试用的json文件
│   │  │   ├─ less            // less文件
│   │  │   ├─ minjs           // 由js目录压缩后的js文件
│   │  │   └─ mincss          // 由less目录压缩编译后的css文件
│   │  └─ statistics          // 统计代码模板 
│   └─ gulp/                  // gulp配置
│      ├─ node_modules/
│      ├─ gulpfile.js
│      ├─ package.json
│      └─ readme.txt
├─ index.php
└─ favicon.ico
 ```
 
 ## 文件/目录命名

在 web 项目中，所有的文件名、目录名应该都遵循同一命名约定。以可读性而言，减号（-）是用来分隔文件名的不二之选。同时它也是常见的 URL 分隔符（i.e. //example.com/blog/my-blog-entry or //s.example.com/images/big-black-background.jpg），所以理所当然的，减号应该也是用来分隔资源名称的好选择。

请确保文件命名总是以字母开头而不是数字。而以特殊字符开头命名的文件，一般都有特殊的含义与用处。

资源的字母名称必须全为小写，这是因为在某些对大小写字母敏感的操作系统中，当文件通过工具压缩混淆后，或者人为修改过后，大小写不同而导致引用文件不同的错误，很难被发现。

还有一些情况下，需要对文件增加前后缀或特定的扩展名（比如 .min.js, .min.css），抑或一串前缀（比如 3fa89b.main.min.css）。这种情况下，建议使用点分隔符来区分这些在文件名中带有清晰意义的元数据。


```
// Bad
MyScript.js
myCamelCaseName.css
i_love_underscores.html
1001-scripts.js
my-file-min.css

// Good
my-script.js
my-camel-case-name.css
i-love-underscores.html
thousand-and-one-scripts.js
my-file.min.css
```

## 雪碧图

为了减少网站的请求数量，我们一般都会使用 [雪碧图](http://m.dezzal.com/temp/skin_wap/dist/images/icon/sprite@2x.png?v=dba928214a)，
但痛苦的psd图标导出、切图、测量posititon、压缩、维护难、psd文件冲突等繁琐的问题困扰着前端工程师，使得效率无法提高。

推荐使用 [gulp.spritesmith](https://www.npmjs.com/package/gulp.spritesmith) 来解放双手，目前有 rosegal、yoshop社区 等几个站已经使用过一段时间了

需要快速上手，可以参考以下gulp配置：


```js

const gulp = require('gulp'),
    // 读取文件
    fs = require('fs'),
    // 雪碧图
    spritesmith = require('gulp.spritesmith'),
    // 压缩图片
    tinypng = require('gulp-tinypng-compress'),
    // md5
    revHash = require('rev-hash');
    
// 雪碧图
gulp.task('sprite', () => {

    // 建目录
    mkdirsSync(path.resolve(PATH_SRC, 'images/icon/sprite/'));

    // 判断小图标是否存在 
    let iconFiles = fs.readdirSync(path.resolve(PATH_SRC, 'images/icon/sprite/'));
    if(!iconFiles.length) {
        console.log(`请将切好的png文件放在目录 ${path.resolve(PATH_SRC, 'images/icon/sprite/')} 后再执行 gulp sprite `);
        return;
    }

    // 加 md5 版本号
    let spritePngPath = path.resolve(PATH_SRC, 'images/icon/sprite.png');
    let spriteHash = fs.existsSync(spritePngPath) ? revHash(fs.readFileSync(spritePngPath)) : '1';


    // 开始合并图片
    let spriteData = gulp.src(path.resolve(PATH_SRC, 'images/icon/sprite/*.png'))
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            padding: 8,
            imgPath: '~src/images/icon/sprite.png',
        }))

    
    let imgStream = spriteData.img    
        .pipe(buffer())
        .pipe(compressImage(false))
        .pipe(gulp.dest(path.resolve(PATH_SRC, 'images/icon/')));
    
    let cssStream = spriteData.css
        .pipe(gulp.dest(path.resolve(PATH_SRC, 'images/icon/')));

    console.log('图片合并完成~ 请在你的样式中引入生成的文件sprite.scss\n然后再使用函数 @include sprite($filename)');
        
});

// 以上配置来自于 yoshop社区
```

最终会生成以下目录:

```
├─ images                 // 图片
│   └─ icon/              
│      ├─ sprite.png 
│      ├─ sprite.scss
│      └─ sprite/         // 小图标目录 
└─ favicon.ico
 ```











