const ANONYMOUS = -1;
const NEWS = 0;
const ARTICLES = 1;
const RESEARCHES = 2;
const ABOUT_ME = 3;

const TOP_LINKS = [
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

const BOTTOM_LINKS = [
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

function loadTopNavbar(activeId) {
    let topNavbarNav = document.getElementById("topNavbarNav");
    for (let i = 0; i < TOP_LINKS.length; i++) {
        let link = document.createElement("a");
        if (TOP_LINKS[i].hasOwnProperty("imgSrc")) {
            let img = document.createElement("img");
            img.setAttribute("class", "d-inline-block align-top");
            img.setAttribute("src", TOP_LINKS[i].imgSrc);
            img.setAttribute("width", "24");
            link.appendChild(img);
            link.innerHTML += " ";
        }
        link.innerHTML += TOP_LINKS[i].innerHTML;
        if (i === activeId) {
            link.setAttribute("class", "nav-item nav-link active");
        } else {
            link.setAttribute("class", "nav-item nav-link");
        }
        link.setAttribute("href", TOP_LINKS[i].href);
        if (TOP_LINKS[i].hasOwnProperty("target")) {
            link.setAttribute("target", TOP_LINKS[i].target);
        }
        topNavbarNav.appendChild(link);
    }
}

function loadBottomNavbar() {
    let bottomNavbarNav = document.getElementById("bottomNavbarNav");
    for (let i = 0; i < BOTTOM_LINKS.length; i++) {
        let link = document.createElement("a");
        if (BOTTOM_LINKS[i].hasOwnProperty("imgSrc")) {
            let img = document.createElement("img");
            img.setAttribute("class", "d-inline-block align-top");
            img.setAttribute("src", BOTTOM_LINKS[i].imgSrc);
            img.setAttribute("width", "18");
            link.appendChild(img);
            link.innerHTML += " ";
        }
        link.innerHTML += BOTTOM_LINKS[i].innerHTML;
        link.setAttribute("class", "nav-item nav-link");
        link.setAttribute("href", BOTTOM_LINKS[i].href);
        if (BOTTOM_LINKS[i].hasOwnProperty("target")) {
            link.setAttribute("target", BOTTOM_LINKS[i].target);
        }
        bottomNavbarNav.appendChild(link);
    }
}

function loadCommonElements(activeId) {
    loadTopNavbar(activeId);
    loadBottomNavbar();
}