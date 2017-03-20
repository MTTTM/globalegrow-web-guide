module.exports = {
    // Documentation for GitBook is stored under "docs"d
    root: './docs',
    title: "环球易购前端开发规范",
    author: "wuuashen",
    "links" : {
    "sidebar" : {
            "首页": "https://wuuashen.gitbooks.io/globalegrow-web-guide/"
        }
    },
    language: "zh-tw",
    plugins: [
        "github-buttons",
        "anchors", 
        "ga", 
        "atoc", 
        "-highlight", 
        "prism", 
        "prism-themes", 
        "duoshuo",
        "edit-link"
    ],
    pluginsConfig: {
        "theme-default": {
            "showLevel": true
        },
        "github-buttons": {
            "repo": "wuuashen/globalegrow-web-guide",
            "types": ["star"],
            "size": "small"
        },
        ga: {
            "token": "UA-94031430-1"
        },
        atoc: {
            "addClass": true,
            "className": "atoc"
        },
        prism: {
		    "css": [
		      "prismjs/themes/prism-solarizedlight.css"
		    ]
		},
		duoshuo: {
            "short_name": "wuuashen",
            "theme": "default"
        },
        sharing: {
            weibo: true,
            facebook: true,
            twitter: false,
            google: false
        },
        "edit-link": {
            "base": "https://github.com/wuuashen/globalegrow-web-guide/blob/master/docs/",
            "label": "Edit This Page"
        }
    }
};
