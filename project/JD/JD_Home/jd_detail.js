
//设置某元素（根据 ID）显示或者隐藏
function showElementById(nodeId, isShow) {
    //根据 ID 或者 class 的值，找到节点对象
    var obj = document.getElementById(nodeId);
    var show = isShow ? "block" : "none";
    obj.style.display = show;
}

//设置 top_box 里页签的高亮/正常效果
function showTopTag(node, isHover) {
    //找到 Label 元素（标签文本），设置鼠标悬停的样式效果
    var obj = node.parentNode.getElementsByTagName("label")[0];
    if (isHover)
        obj.className += " hover";
    else
        obj.className = "rt";

    //找到标签的链接，设置鼠标悬停的样式效果
    var linkObj = obj.getElementsByTagName("a")[0];
    if (isHover)
        linkObj.className += " hover";
    else
        linkObj.className = "";
}

//显示二级分类菜单
function showNaviSubItems(divObj) {
    var menus = document.getElementById("leftMenu").getElementsByClassName("sub_cate_box");
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.display = "none";
    }

    divObj.getElementsByTagName("div")[0].style.display = "block";
}

//初始化页面数据
function initialData() {
    //设置产品图片框的宽度
    var imageCount = document.getElementById("icon_list").getElementsByTagName("img").length;
    document.getElementById("icon_list").style.width = 62 * imageCount + "px";
    if (imageCount > 5) {
        var forwardObj = document.getElementById("preview").getElementsByTagName("a")[1];
        forwardObj.className = "forward";
    }
}

//移动产品的小图标
var forwardCount = 0;
var backwardCount = 0;
function right(obj) {
    if (document.getElementById("preview").getElementsByTagName("a")[1].className == "forward_disabled")
        return;

    //移动
    forwardCount++;
    var list = obj.parentNode.getElementsByTagName("ul")[0];
    list.style.left = -62 * forwardCount + "px";

    //修改右移样式
    var imageCount = document.getElementById("icon_list").getElementsByTagName("img").length;
    if (forwardCount == imageCount - 5)
        document.getElementById("preview").getElementsByTagName("a")[1].className = "forward_disabled";

    //设置左移的样式和计数
    if (forwardCount > 0) {
        backwardCount = 0;
        document.getElementById("preview").getElementsByTagName("a")[0].className = "backward";
    }
}

//显示或者隐藏更多的分享图标
function showMoreShares(obj) {
    var divObj = obj.parentNode;
    var linkNodes = divObj.getElementsByTagName("a");
    for (var i = 3; i < linkNodes.length - 1; i++) {
        if (linkNodes[i].style.display == "block") {
            linkNodes[i].style.display = "none";
            divObj.style.width = 155 + "px";
            obj.firstChild.className = "";
        }
        else {
            linkNodes[i].style.display = "block";
            obj.parentNode.style.width = 200 + "px";
            obj.firstChild.className = "backword";
        }
    }
}

//送货地区选择框：鼠标移入时
function storeSelecterHover(isHover) {
    if (isHover) {
        document.getElementById("store_select").getElementsByTagName("div")[0].className += " textHover";
        showElementById('store_close', isHover);
        showElementById('store_content', isHover); 
    }
    else {
        document.getElementById("store_select").getElementsByTagName("div")[0].className = "text";
        showElementById('store_close', isHover);
        showElementById('store_content', isHover); 
    }
}

//送货地址选择框：选择不同的页签
function storeSelectorTabsChange(index) {
    var tabs = document.getElementById("store_tabs").getElementsByTagName("li");
    for (var i = 0; i < tabs.length; i++) {
        if (i == index)
            tabs[i].className = "hover";
        else
            tabs[i].className = "";
    }
}

//显示minicart
function showMiniCart(isShow) {
    if (isShow) {
        document.getElementById("minicart").className = "minicart";
        document.getElementById("minicart").getElementsByTagName("div")[0].style.display = "block";
    }
    else {
        document.getElementById("minicart").className = "";
        document.getElementById("minicart").getElementsByTagName("div")[0].style.display = "none";
    }
}

//产品介绍里的页签切换
var tabsArray = ["product_info", "product_data", "product_package", "","product_saleAfter"];
function showProductTabs(aObj, index) {
    var liObjs = aObj.parentNode.getElementsByTagName("li");
    for (var i = 0; i < tabsArray.length; i++) {
        var tabObj = document.getElementById(tabsArray[i]);
        if (tabObj == null) {
            liObjs[i].className = "";
            continue;
        }
        if (i == index) {
            tabObj.style.display = "block";
            liObjs[i].className = "current";
        }
        else {
            tabObj.style.display = "none";
            liObjs[i].className = "";
        }
    }
    //只显示商品评价
    if (index == 3)
    {
        for (var i = 0; i < tabsArray.length; i++) {
            var tabObj = document.getElementById(tabsArray[i]);
            if (tabObj == null) {
                continue;
            }
            tabObj.style.display = "none";
        }
        liObjs[index].className = "current";
    }
}

//是否显示回复
function showReply(aObj) {
    var node = aObj.parentNode.parentNode.nextSibling.nextSibling;
    if (node.style.display == "none")
        node.style.display = "block";
    else
        node.style.display = "none";
}