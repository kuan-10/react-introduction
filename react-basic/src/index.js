import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//       );
//     }
//   }
  
//   class Board extends React.Component {
//     renderSquare(i) {
//       return <Square />;
//     }
  
//     render() {
//       const status = 'Next player: X';
  
//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   // ========================================
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<Game />);
// const mydata=3
// const VDOM=(
//   <h1 >Hello,React
//      <h2 className='bg' style={{fontSize:'50px'}}>Hello,React{mydata.toFixed(2)}</h2>
//   </h1>
// )
// const object=['Angular','Vue','React']
// const VDOM=(
//   <div>
//     <h3>前端页面框架</h3>
//     <h1>{object[0]}</h1>
//     <h1>{object[1]}</h1>
//     <h1>{object[2]}</h1>
//   </div>
// )
// function Demo(){
//   return <h1>函数式组件</h1>
// }
// root.render(<Demo/>)
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
// const list = ReactDOM.createRoot(document.getElementById("root"))
// class List extends React.Component{
//   static propTypes={
//     name:PropTypes.string.isRequired,//对props进行限制，限制name为字符串类并且是必须的参数
//     job:PropTypes.string,//对props进行限制，限制name为字符串类并且是必须的参数
//     ds:PropTypes.number,//对props进行限制，限制name为字符串类并且是必须的参数
//   }
//   static defaultProps={
//     name:"do",
//     job:"sd"
//   }
//   render(){
//     const {name,job,ds}=this.props
//     return (
//      <ul>
//       <li>{name}</li>
//       <li>{job}</li>
//       <li>{ds}</li>
//      </ul>
//     )
//   }
// }

// const p={
// name:"hujk",
// job:"w",
// ds:2
// }
// list.render(<List {...p}/>)
class ShowData extends React.Component{
  click=()=>{
    alert(this.fir.value)
  }
  fir=(c)=>{
    this.fir=c
  }
  render(){
    return (
      <div>
      <input ref={this.fir} type="text" ></input>
      <button onClick={this.click}>点我显示数据</button>
      <input ref="sec" type="text" onBlur={this.click}></input>
      </div>
    )
  }
}
root.render(<ShowData/>)
//props是只读属性，不可以进行任何修改


