
####react中的虚拟DOM
本质上就是一个Object对象（一般对象），
虚拟DOM比较轻，真实DOM比较重，因为虚拟DOM是react内部在用，无需真实DOM上那么多属性
###Jsx基础语法
1.定义虚拟DOM不要加引号
2.在标签中混入js表达式时要用{}
3.样式的类名指定不要用class，要用className
4.内联样式，要用style={{key:'value'}}的形式，value要加引号
5.虚拟DOM必须只有一个根标签
6.标签必须闭合
7.若小写字母开头，则将标签转为html中同名元素，若html中无同名元素则报错
8.若大写字母开头，react就去渲染对应的组件

函数式组件，组件中的this是undefined，因为babel编译后开启了严格模式
React解析组件标签，找到了Demo组件。发现组件是使用函数定义的，调用该函数，将返回的虚拟DOM转为真实的DOM，呈现在页面中

###组件
函数式组件
```
function Demo(){
  return <h1>函数式组件</h1>
}
root.render(<Demo/>)
执行步骤:React解析组件标签，找到了M有Component组件，发现组件使用函数定义的，随后执行该函数，将返回值从虚拟DOM转为真实DOM，随后呈现在页面中
函数组件中没有this
```
类式组件
```
class MyCpmponent extends React.Component{
  render(){
    return <h1>类式组件，用来定义复杂数据</h1>
  }
}
root.render(<MyCpmponent/>)
执行步骤:React解析组件标签，找到了MyComponent组件，发现组件是用类定义的，随后new出来实例，并通过调用实例上的render方法，将render返回的虚拟DOM转化为真实的DOM
MyComponent中的this指向自己实例的对象
```
###state
state代表组件的状态，
```
const root = ReactDOM.createRoot(document.getElementById("root"))
class MyComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={isHot:true}
    this.demo=this.demo.bind(this)//需要将demo函数的this指向改变一下，不然在demo中的this式undefinned
  }
  render(){
    return <h1 onClick={this.demo}>今天天气很{this.state.isHot===true?'炎热':'寒冷'}</h1>
  }
  demo(){
    const isHot=this.state.isHot
   this.setState({isHot:!isHot})//直接调用，局部开启严格模式，不是实例调用
   //state不可直接更改，必须用setState进行更改
  }
}

root.render(<MyComponent/>)
```
```
const root = ReactDOM.createRoot(document.getElementById("root"))
class MyComponent extends React.Component{
  state={isHot:true}
  render(){
    return <h1 onClick={this.demo}>今天天气很{this.state.isHot===true?'炎热':'寒冷'}</h1>
  }
  demo=()=>{
    const isHot=this.state.isHot
   this.setState({isHot:!isHot})
  }
}
root.render(<MyComponent/>)
实际写法使用箭头函数
```
###props类型检查
```
import PropTypes from 'prop-types'
class List extends React.Component{
  render(){
    const {name,job,ds}=this.props
    return (
     <ul>
      <li>{name}</li>
      <li>{job}</li>
      <li>{ds}</li>
     </ul>
    )
  }
}
List.propTypes={
  name:PropTypes.string.isRequired,//对props进行限制，限制name为字符串类并且是必须的参数
  job:PropTypes.string,//对props进行限制，限制name为字符串类并且是必须的参数
  ds:PropTypes.number,//对props进行限制，限制name为字符串类并且是必须的参数
}
const p={
name:"hujk",
job:"dasdas",
ds:2
}
list.render(<List {...p}/>)
//props是只读属性，不可以进行任何修改
```
###constructor
在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。

通常，在 React 中，构造函数仅用于以下两种情况：

通过给 this.state 赋值对象来初始化内部 state。
为事件处理函数绑定实例
在开发过程中，构造器能省略就省略

###Ref功能
1.字符串绑定refs
2.回调函数绑定refs
3.createRefs绑定refs
该容器调用后可以返回一个文档，该容器可以存储ref所标识的节点，createRefs是专人专用的，每一个容器只能放一个