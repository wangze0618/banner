window.onload = function() {
    //@wangze0618 2021年3月30日 22:47:37
    var oulList = document.getElementsByClassName("ulList")[0];
    var oimgList = oulList.getElementsByTagName("li");
    var oBanner = document.getElementsByClassName("banner")[0];
    // var oUl = document.getElementsByTagName("ul")[0];
    // var oUl_li = oUl.getElementsByTagName("li");
    var oSide = document.getElementsByClassName("side")[0];
    var oLeft = document.getElementsByClassName("left")[0];
    var oRight = document.getElementsByClassName("right")[0];
    var oRadius = document.getElementsByClassName("radius")[0];
    var oRadius_Ul = oRadius.getElementsByTagName("ul")[0];
    var oRadius_Ul_li = oRadius_Ul.getElementsByTagName("li");
    var num = 0;

    oLeft.onclick = function() {
        for (let index = 0; index < oimgList.length; index++) {
            //排他思想，先让这些元素都不显示
            oimgList[index].style.display = "none";
            oRadius_Ul_li[index].className = "";
        }
        num--;
        if (num < 0) {
            //当num的索引值<0时，使num赋值为3，也就是第四张图片
            //以此来实现循环的效果 oimgList的长度为0-3
            num = oimgList.length - 1
        }
        oimgList[num].style.display = 'block';
        oRadius_Ul_li[num].className = 'red'
    }

    oRight.onclick = function() {
        for (let index = 0; index < oimgList.length; index++) {
            oimgList[index].style.display = "none";
            oRadius_Ul_li[index].className = "";
        }
        num++;
        if (num > oimgList.length - 1) {
            // 当num（索引）值为4时，使num赋值为0，也就是第一张图片
            // 以此来实现循环的效果
            num = 0
        }
        oimgList[num].style.display = 'block';
        oRadius_Ul_li[num].className = 'red';
    }

    // 给左右的按钮添加鼠标 移入/移出 来实现 隐藏/显示 的效果
    oBanner.onmouseenter = function() {
        oSide.style.display = "block"
    }
    oBanner.onmouseleave = function() {
        oSide.style.display = "none"
    }
















}