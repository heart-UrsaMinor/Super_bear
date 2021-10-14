window.addEventListener("load", function() {
    // 轮播图 
    main();

    function main() {
        // 轮播图片地址
        cls_img();
        Shuffling_img();
        // 倒计时
        time();
        // 轮播图
        Shuffling();
        // 分类栏
        cls();
        // 搜索头部
        title();
    }

    function article() {
        var article = document.getElementById("article")
        var article_img = document.querySelector(".article_img");
        var Object = [{
            img: "<img src='../images/article.webp'></img>"
        }]
    }

    function Shuffling_img() {
        var Arrya = ["./images/slider.dpg", "./images/slider2.dpg", "./images/slider3.dpg", "./images/slider4.dpg", "./images/slider5.dpg"]
        var Shuffling_img = document.querySelectorAll(".Shuffling_img")
        for (var i = 0; i < Shuffling_img.length; i++) {
            Shuffling_img[i].src = Arrya[i];
        }
    }

    function cls_img() {
        var Ary = ["./images/cls_01.dpg", "./images/cls_02.dpg", "./images/cls_03.dpg", "./images/cls_04.dpg", "./images/cls_05.dpg", "./images/cls_06.dpg", "./images/cls_07.dpg", "./images/cls_08.dpg", "./images/cls_09.dpg", "./images/cls_10.dpg", "./images/cls_11.dpg", "./images/cls_12.dpg", "./images/cls_13.dpg", "./images/cls_14.dpg", "./images/cls_15.dpg", "./images/cls_16.dpg", "./images/cls_17.dpg", "./images/cls_18.dpg", "./images/cls_19.dpg", "./images/cls_20.dpg"]
        var cls_img = document.querySelectorAll(".cls_img")
        for (var j = 0; j < cls_img.length; j++) {
            cls_img[j].src = Ary[j];
        }
    }

    function Shuffling() {
        var Banner = document.querySelector(".search-wrap-text2_01");
        // 获取dom元素内的第几个下标子元素
        var ul = Banner.querySelector("ul:first-of-type");
        var ol = Banner.querySelector("ol:first-of-type");
        // 获取头尾两张图 
        var first = ul.querySelector("li:first-of-type");
        var last = ul.querySelector("li:last-of-type");
        // 首尾插入两张图片,cloneNode:赋值一个dom元素
        ul.appendChild(first.cloneNode(true));
        // insertBefore（需要插入dom元素，位置）
        ul.insertBefore(last.cloneNode(true), ul.firstChild);
        // 获取ul内全部li,得到总长度赋值给ul 
        var lis = ul.querySelectorAll("li");
        var count = lis.length;
        var BannerWidth = Banner.offsetWidth;
        ul.style.width = count * BannerWidth + (count * 20) + "px";
        for (var i = 0; i < lis.length; i++) {
            // 设置每个li宽高
            lis[i].style.width = BannerWidth + "px";
        };
        // 偏移前添加图片的间距
        var index = 1;
        // 因为图片要设置间隔所以运行前需要增加所间隔的距离，注意父元素的总宽度每张加所需的间隔 
        BannerWidth += 20;

        // 设置默认偏移量（从第二张图开始显示）
        ul.style.transform = "translateX(" + -BannerWidth + "px)";
        // 监听屏幕大小变化，重新计算宽度 
        window.onresize = function() {
                BannerWidth = Banner.offsetWidth;
                ul.style.width = count * BannerWidth + (count * 20) + "px"
                for (var i = 0; i < lis.length; i++) {
                    // 设置每个li宽高 
                    lis[i].style.width = BannerWidth + "px";
                }
                BannerWidth += 20;
                // 特别注意这里可视区域放大缩小时要和上面的一样添加图片间距不然会有bug 
                ul.style.transform = "translateX(" + index * -BannerWidth + "px)";
            }
            // ------------------------------------------------------------------------------
        var timer = setInterval(function() {
            index++;
            ul.style.transition = "all .4s";
            ul.style.transform = "translateX(" + index * -BannerWidth + "px)";

            ul.addEventListener("transitionend", function() {
                if (index >= count - 1) {
                    index = 1;
                    ul.style.transition = "none";
                    ul.style.transform = "translateX(" + index * -BannerWidth + "px)";
                }
                if (index <= 0) {
                    index = count - 2;
                    ul.style.transition = "none";
                    ul.style.transform = "translateX(" + index * -BannerWidth + "px)";
                }
                ol.querySelector('.current').classList.remove('current');
                ol.children[index - 1].classList.add('current');
            })

        }, 2000);

        // ------------------------------------------------------------------------------
        var startX = 0;
        var moveX = 0;
        var flag = 0;
        Banner.addEventListener("touchstart", function(e) {
            startX = e.targetTouches[0].pageX;
            clearInterval(timer);
        });
        Banner.addEventListener("touchmove", function(e) {
            moveX = e.targetTouches[0].pageX - startX;
            distanceX = index * -BannerWidth + moveX;
            ul.style.transition = "none";
            ul.style.transform = "translateX(" + distanceX + "px)";
            flag = true;
            e.preventDefault();
        });
        Banner.addEventListener("touchend", function(e) {
            clearInterval(timer);
            if (flag) {
                if (Math.abs(moveX) > 50) {
                    if (moveX > 0) {
                        index--;
                    } else {
                        index++;
                    }
                    distanceX = index * -BannerWidth;
                    ul.style.transition = "all .1s";
                    ul.style.transform = "translateX(" + distanceX + "px)";
                } else if (Math.abs(moveX) > 0) {
                    distanceX = index * -BannerWidth
                    ul.style.transition = "all .1s";
                    ul.style.transform = "translateX(" + distanceX + "px)";
                }
            }
            flag = false;
            clearInterval(timer);

        })


        // ------------------------------------------------------------------------------

        ul.addEventListener("transitionend", function() {
                if (index >= count - 1) {
                    index = 1;
                    ul.style.transition = "none";
                    ul.style.transform = "translateX(" + index * -BannerWidth + "px)";
                }
                if (index <= 0) {
                    index = count - 2;
                    ul.style.transition = "none";
                    ul.style.transform = "translateX(" + index * -BannerWidth + "px)";
                }
                ol.querySelector('.current').classList.remove('current');
                ol.children[index - 1].classList.add('current');
            })
            // ------------------------------------------------------------------------------

        var startX = 0;
        var moveX = 0;
        var flag = 0;
        Banner.addEventListener("touchstart", function(e) {
            startX = e.targetTouches[0].pageX;
            clearInterval(timer);
        });
        Banner.addEventListener("touchmove", function(e) {
            moveX = e.targetTouches[0].pageX - startX;
            distanceX = index * -BannerWidth + moveX;
            ul.style.transition = "none";
            ul.style.transform = "translateX(" + distanceX + "px)";
            flag = true;
            e.preventDefault();
        });
        Banner.addEventListener("touchend", function(e) {
            if (flag) {
                if (Math.abs(moveX) > 50) {
                    if (moveX > 0) {
                        index--;
                    } else {
                        index++;
                    }
                    distanceX = index * -BannerWidth;
                    ul.style.transition = "all .1s";
                    ul.style.transform = "translateX(" + distanceX + "px)";
                } else if (Math.abs(moveX) > 0) {
                    distanceX = index * -BannerWidth
                    ul.style.transition = "all .1s";
                    ul.style.transform = "translateX(" + distanceX + "px)";
                }
            }
            flag = false;
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                ul.style.transition = "all .4s";
                ul.style.transform = "translateX(" + index * -BannerWidth + "px)";
            }, 2000);
        })

    }

    function time() {
        var date = new Date().getTime();
        var enddate = "2021-8-28 22:00:00";
        enddate = new Date(enddate).getTime(); // 时间差 
        var timeD = enddate - date;
        var h = m = s = 0;
        if (timeD >= 0) {
            h = parseInt(timeD /
                1000 /
                60 / 60 % 24);
            m = parseInt(timeD / 1000 / 60 % 60);
            s = parseInt(timeD / 1000 % 60);
        }
        h = h <
            10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        document.getElementById("time_01").innerHTML = h;
        document.getElementById("time_02").innerHTML = m;
        document.getElementById("time_03").innerHTML = s;
        var Array = ["22"];
        document.getElementById("seckill-text_02").innerHTML = Array[0];
        setTimeout(time, 1000);
    }

    function cls() {
        var cls = document.querySelector(".cls");
        var cls_text = cls.children[0];
        var cls_text2 = cls.children[1];
        var width = cls.offseWidth;
        var initial = 0; //存储初始触控位置
        var distance = 0; //滑动距离 
        var flag2 = 0;
        var xiabiao = 0;
        cls.addEventListener("touchstart", function(e) { initial = e.targetTouches[0].pageX; });
        cls.addEventListener(
            'touchmove',
            function(e) {
                distance = e.targetTouches[0].pageX - initial;
                flag2 = true;
                e.preventDefault();
            });
        cls.addEventListener("touchend", function(e) {
            if (flag2) {
                if (distance > 50) {
                    xiabiao--;
                    cls_text.style.transition = "all 0.4s"
                    cls_text.style.transform = "translateX(" + 0 + "px)";
                } else {
                    xiabiao++;
                    cls_text.style.transition = "all 0.4s"
                    cls_text.style.transform = "translateX(" + -50 + "%)";
                }
                if (xiabiao <
                    0) {
                    xiabiao = 0;
                } else if (xiabiao > 1) { xiabiao = 1; }
                cls_text2.querySelector('.current2').classList.remove('current2');
                cls_text2.children[xiabiao].classList.add('current2');
            }
            flag2 = false
        })
    }

    function title() {
        let nav = document.querySelector(".search-wrap-text");
        window.addEventListener("scroll",
            function(e) {
                if (window.pageYOffset > nav.offsetTop) {
                    nav.style.position = "fixed"
                    nav.style.top = "0px"
                } else { nav.style.position = "static" }
            })
    }

});