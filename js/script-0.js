function loadCommonElements() {
    let topNavbarNav = document.getElementById("topNavbarNav");
    let links = [
        {
            "innerHTML": "新闻",
            "href": "/news/"
        }, {
            "innerHTML": "文章",
            "href": "/articles/"
        }, {
            "innerHTML": "研究",
            "href": "/researches/"
        }, {
            "innerHTML": "关于我",
            "href": "/about-me/"
        }, {
            "imgSrc": "/img/0xshare.me.jpg",
            "innerHTML": "式",
            "href": "https://0xshare.me/",
            "target": "_blank"
        }, {
            "imgSrc": "/img/lueur.cn.png",
            "innerHTML": "Lueur",
            "href": "http://www.lueur.cn/",
            "target": "_blank"
        }
    ];
    for (let i = 0; i < links.length; i++) {
        let link = document.createElement("a");
        if (links[i].hasOwnProperty("imgSrc")) {
            let img = document.createElement("img");
            img.setAttribute("class", "d-inline-block align-top");
            img.setAttribute("src", links[i].imgSrc);
            img.setAttribute("width", "24");
            link.appendChild(img);
        }
        link.innerHTML += links[i].innerHTML;
        link.setAttribute("class", "nav-item nav-link");
        link.setAttribute("href", links[i].href);
        if (links[i].hasOwnProperty("target")) {
            link.setAttribute("target", links[i].target);
        }
        topNavbarNav.appendChild(link);
    }
}