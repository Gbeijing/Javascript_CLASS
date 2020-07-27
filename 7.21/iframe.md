## iframe 注意
1： iframe 是独立窗口；有windwo 对象
2： 浏览器窗口也有window 对象
3： 窗口之间通信；按照同源策略 ----> 启动页面时候；需要用服务启动 live serve

4  浏览器窗口中页面 为父页面  window 为父window
   4.1 如何获取子window\
   ~~~js
   var childWindow = docoument.getElementsByTagtName('ifarame')[0].contentWindow;
   ~~~ 
   4.2 如何获取 子window dom
   ~~~js
   var childDOM = childWindow.document.xxx() // dom的api
   ~~~
   4.3 如何父页面中数据传递到子页面
   ~~~js
   var  data = window.data // 父页面数据
   childWindow.data = data  //  给子window 添加data 属性；并赋值  父页面数据data
   ~~~
   
5  iframe 加载的页面为  子页面，该页面写js中window 为iframew window；子window 
   5.1 如何获取父window
   ~~~js
   var parentWindow = window.parent;
   ~~~
   5.2 如何将将子页面数a 传递给父页面 b
   ~~~js
   var data = window.a// 获取子页面数据
   parentWindow.b = data  // 把子页面的数据a传递父页面变量b
   ~~~
6 注意
 -  1.每一个window都有location localStorage document..
 -  2.在子页面中,localtion.href重新加载的是子窗口页面而不是父页面
 -  3.localstorage.是所有窗口公用的数据

### 相邻的iframe怎么传递数据
 - localStaorage
 - 共同的父窗口