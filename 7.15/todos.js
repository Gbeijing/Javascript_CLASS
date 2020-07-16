function show(ele){
    ele.style.display = 'block';
    ele.style.opacity = 0
    var val = 0
    var timer = setInterval(function(){
        val += 0.1;
        if(val>=1){
            ele.style.opacity = 1;
          
            clearInterval(timer);
            return
        }
        ele.style.opacity = val;
    },100)
    return ele
}

function hide(ele){
    var val = 1;
    ele.style.opacity = val;
    var timer = setInterval(function(){
        val -= 0.1;
        if(val<= 0){
            ele.style.opacity = 0;
            ele.style.display = 'none';
            clearInterval(timer);
            return
        }
        ele.style.opacity = val;
    },30)
    return ele
}
function getElement(str){
    if(str.charAt(0)==="."){
        return document.getElementsByClassName(str)
    }else if(str.charAt(0)==="#"){
        return document.getElementById(str)
    }else{
        return document.getElementsByTagName(str) 
    }
}

function html(ele,str){
    ele.innerHTML = str
    return ele
}