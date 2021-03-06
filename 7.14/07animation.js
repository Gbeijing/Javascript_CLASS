
//获取
function getStyle(ele, str) {
    var res;
    if (ele.currentStyle) {
        res = el.currentStyle;
    } else {
        res = getComputedStyle(ele, null)[str];
    }
    return res
}

var box = document.querySelector('.box');
// ani(box, 'width', 200, 0.5);
ani(box, 'width', 200, 0.5,function(){
    alert('ddd')
});
ani(box,'opacity',0.3,0.5)
//callback是动画执行完毕后执行的动作
function ani(ele, str, end, time,callback) {
    var start = getStyle(ele, str);
    start = parseInt(start);
    var s = end - start;//求过度值
    time = time * 1000
    var timer = setInterval(function () {
        //time/16.7=====>fun执行次数
        //s/time/16.7  没16.7ms的值变化的量
        start += s / (time / 16.7);

        //判断是否大于零
        if (s > 0) {
            if (start >= end) {
                //出口前,也需要ele的str属性赋值
                //==>区分;那些需要单位,那些不需要
                (str == 'opacity' || str === 'zIndex')
                    ? ele.style[str] = end
                    : ele.style[str] = end + "px"
                clearInterval(timer);//标志着动画执行完毕
                if(typeof callback == 'function'){  //=====>这样的话不传入callback也可以
                    callback()
                }
                 // callback()  //这样必须传callback
            }
        } else {
            if (start <= end) {
                (str == 'opacity' || str === 'zIndex')
                    ? ele.style[str] = end
                    : ele.style[str] = end + "px"
                clearInterval(timer);//标志着动画执行完毕
                if(typeof callback == 'function'){   //=====>这样的话不传入callback也可以
                    callback()
                }
                // callback()  //这样必须传callback
            }
        }
        //处理没有单位的css属性
        if (str == 'opacity' || str === 'zIndex') {
            ele.style[str] = start
        } else {
            ele.style[str] = start + "px"
        }
    }, 16.7);//浏览器刷新时间是16.7ms
}