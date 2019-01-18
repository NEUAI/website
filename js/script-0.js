const ANONYM = -1;
const NEWS = 0;
const ARTICLES = 1;
const RESEARCHES = 2;
const ABOUT_ME = 3;

function loadTopNavbar(activeId) {
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
            link.innerHTML += " ";
        }
        link.innerHTML += links[i].innerHTML;
        if (i === activeId) {
            link.setAttribute("class", "nav-item nav-link active");
        } else {
            link.setAttribute("class", "nav-item nav-link");
        }
        link.setAttribute("href", links[i].href);
        if (links[i].hasOwnProperty("target")) {
            link.setAttribute("target", links[i].target);
        }
        topNavbarNav.appendChild(link);
    }
}

function loadBottomNavbar() {
    let bottomNavbarNav = document.getElementById("bottomNavbarNav");
    let links = [
        {
            "innerHTML": "辽ICP备18008623号-1",
            "href": "http://www.miitbeian.gov.cn/publish/query/indexFirst.action",
            "target": "_blank"
        }, {
            "imgSrc": "/img/ghs.png",
            "innerHTML": "辽公网安备21011202000299号",
            "href": "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21011202000299",
            "target": "_blank"
        }
    ];
    for (let i = 0; i < links.length; i++) {
        let link = document.createElement("a");
        if (links[i].hasOwnProperty("imgSrc")) {
            let img = document.createElement("img");
            img.setAttribute("class", "d-inline-block align-top");
            img.setAttribute("src", links[i].imgSrc);
            img.setAttribute("width", "18");
            link.appendChild(img);
            link.innerHTML += " ";
        }
        link.innerHTML += links[i].innerHTML;
        link.setAttribute("class", "nav-item nav-link");
        link.setAttribute("href", links[i].href);
        if (links[i].hasOwnProperty("target")) {
            link.setAttribute("target", links[i].target);
        }
        bottomNavbarNav.appendChild(link);
    }
}

function loadCommonElements(activeId) {
    loadTopNavbar(activeId);
    loadBottomNavbar();
}