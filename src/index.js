/*
 * @Author: your name
 * @Date: 2021-02-03 09:54:02
 * @LastEditTime: 2021-02-04 09:41:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Row, Col, Divider } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'antd/dist/antd.css';
import './index.css';

// 当组件需要使用 state 状态资源管理时 需要定义一个 class 继承组将 React.component
// 当组件不在需要 state 状态资源管理时 组件只需要 render 方法 直接使用一个函数组件就变得更简单
// class SquareDel extends React.Component {
//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //     value: null
//   //   }
//   // }
//   // 渲染函数
//   render() {
//     return (
//       <button className="square" onClick={() => { this.props.onClick() }}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    // 去除 this, 事件回调更短 
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

// class BoardDel extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       isFirstP: true,
//     }
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice(0);
//     if (calculateWinner(squares) || squares[i]) return;
//     squares[i] = this.state.isFirstP ? '╳' : 'О';
//     this.setState({ squares, isFirstP: !this.state.isFirstP });
//   }

//   renderSquare(i) {
//     return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
//   }

//   render() {
//     let winner = calculateWinner(this.state.squares)
//     let status;
//     if (winner) status = 'Winner:' + winner;
//     else status = 'Next Player:' + (this.state.isFirstP ? "╳" : "О");
//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

class Board extends React.Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 记录
      historySquare: [
        Array(9).fill(null),
      ],
      // 第一个人操作
      isFirstP: true,
      // 记录状态 即: 为偶数时 isFirstP 为 true, 反之为 false
      stepNumber: 0,
    }
  }


  jumpTo(stepNumber) {
    this.setState({
      stepNumber: stepNumber,
      isFirstP: (stepNumber % 2) === 0
    })
  }

  handleClick(i) {
    const history = this.state.historySquare.slice(0, this.state.stepNumber + 1);
    const squares = Array(...history[history.length - 1]);
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.isFirstP ? "X" : 'О';
    this.setState({
      historySquare: history.concat([squares]),
      isFirstP: !this.state.isFirstP,
      stepNumber: history.length,
    })
  }

  render() {
    const history = this.state.historySquare;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current);
    const move = history.map((item, index) => {
      const des = index ? `Go to move ${index}` : `Go to game start`;
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>{des}</button>
        </li>
      )
    })
    let status;
    if (winner) status = 'Winner:' + winner;
    else status = 'Next Player:' + (this.state.isFirstP ? "X" : "О");

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current} onClick={(i) => { this.handleClick(i) }} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{move}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  var winnerLinear = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
  for (let i = 0; i < winnerLinear.length; i++) {
    const [a, b, c] = winnerLinear[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
  }
  return null
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className='clock'>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}

class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'off',
    }
  }
  handleClick() {
    this.setState({
      btnText: this.state.btnText === 'off' ? "on" : 'off'
    })

  }
  render() {
    return (
      <button onClick={() => this.handleClick()}>{this.state.btnText}</button>
    )
  }
}


class AntdConfig extends React.Component {
  handleChange(date, dateString) {
    console.log(dateString);
  }
  render() {
    return (
      <div className={'datePicker'}>
        <DatePicker locale={locale} onChange={this.handleChange} ></DatePicker>
        <DatePicker locale={locale} onChange={this.handleChange} picker="week" />
        <DatePicker locale={locale} onChange={this.handleChange} picker="month" />
        <DatePicker locale={locale} onChange={this.handleChange} picker="quarter" />
        <DatePicker locale={locale} onChange={this.handleChange} picker="year" />
      </div>
    )
  }
}

const style = { background: '#0092ff', padding: '8px 0', textAlign: 'center' };

function ProductCol() {
  for (let i = 0; i < 10; i++) {
    return (
      <Col key={i} span={6} className='gutter-row' style={style}><span>span-6</span></Col>
    )
  }
}

function RowCol() {
  return (
    <div>
      <Divider orientation={'left'}>Horizontal</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <ProductCol></ProductCol>
      </Row>
    </div>
  )
}



ReactDOM.render(
  <div>
    <Clock />
    <Game />
    <ButtonToggle />
    <AntdConfig />
    <RowCol />
  </div>,
  document.getElementById('root')
);
