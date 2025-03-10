// es6 class类方法
// import React, { Component } from 'react'
// class Example extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   addCount() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() { 
//     return (
//       <div>
//         <p>you clicked {this.state.count}</p>
//         <button onClick={this.addCount.bind(this)}>click me1</button>
//       </div>
//     );
//   }
// }

// react-hooks方法
import React, { useState } from 'react';
let flag = true;
function UseState() {
  const [count, setCount] = useState(0); // 数组解构,如果useState方法不传人值的话，count的值就是undefined
  
  // 等价
  // const countValue = useState(0);
  // const count = countValue[0];
  // const setCount = countValue[1];

  // 多状态
  // 在每个组件呈现中，必须以完全相同的顺序调用React hook,不能在条件判断，遍历循环等表达式中使用
  // if (flag) {
  //   const [name, setName] = useState('guoba');
  //   flag = false;
  // }
  // const [age, setAge] = useState(18);
  // const [work] = useState('搬砖工人');

  // 状态合并
  // const [state, setState] = useState({ age1: 16, work1: '码农'})

  return (
    <div>
      <p> you click {count}</p>
      <button onClick={() => {setCount(count + 1)}}>click me2</button>
      {/* <p onClick={() => {setAge(age + 1)}}>age: {age}</p>
      <p>work: {work}</p>

      <p>age1: { state.age1}</p>
      <p>work1: {state.work1}</p> */}
    </div>
  )
}
 
export default UseState;