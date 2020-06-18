var person =  {
    name:"aaa"
}
// 需求：既要看到person具体内容  又要阻止下面代码执行
//---->打断调试  watch  监听某一个变量  是否声明 以及赋值过程
// ----->没有有声明  no  available 有声明 初始 undifined 值的变化
console.log(person)
alert(person)
console.log("==========")
var _name = 'bb'
console.log('444')
// alert(_name)
var num=1
// alert(num)
var num1=2
// alert(num1)
var sum = num + num1


// ascll

// abc>aabc----->false

