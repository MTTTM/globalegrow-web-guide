module.exports = {
    // Documentation for GitBook is stored under "docs"d
    root: './docs',
    title: 'GitBook Toolchain Documentation',
    plugins: [ "github", "anchors", "ga", "atoc", "prism", "-highlight", "duoshuo"],
    pluginsConfig: {
        github: {
            "url": "https://github.com/wuuashen/globalegrow-web-standard"
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
        }
    }
};
