import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <h1>Hello, react!</h1>, //JSX
//   document.getElementById('root')
// );

ReactDOM.render(
  <form>
    <input name="username" type="text" />
    <input name="password" type="password" />
    <button type="submit">Sign in</button>
  </form>,
  document.getElementById('root')
);



// const callback = () => {
//   ReactDOM.render(
//     <div>
//       <h1>{new Date().toLocaleTimeString()}</h1>
//     </div>, //JSX
//     document.getElementById('root')
//   )
// }
// setInterval(callback, 1000)

// function func() {

// }

// const func = () => {

// }

// function Welcome(props) {
//   console.log(props)
//   return <h1>Hello Welcome {props.name}</h1> //JSX
// }

// ReactDOM.render(
//   <Welcome name="foo" gender="male" city="sydney"/>, //JSX
//   document.getElementById('root')
// );

// function StudentCard(props) {
//   console.log(type props.age)
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <div>
//         age: {props.age}
//       </div>
//     </div>
//   )
// }

// function cb() {
//   ReactDOM.render(
//     <div>
//       <h1>It is {new Date().toLocaleTimeString()}.</h1>
//     </div>,
//     document.getElementById('root')
//   );
// }
// setInterval(cb, 1000)

// function displayTime() {
// }

// setInterval(displayTime, 1000)


// function Welcome(props) {
//   console.log(props)
//   return <h1>Hello Welcome {props.name}</h1> //JSX
// }

// ReactDOM.render(
//   <Welcome name="foo" gender="male"/>,
//   document.getElementById('root')
// );

// functional component
// pure function
// pure component
function StudentCard(props) {
  console.log(typeof props.age)
  // props.age = 12 // error
  return (
    <div>
      <h1>{props.name}</h1>
      <div>Age: {props.age}</div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <StudentCard name="foo" age="12" />
    <StudentCard name="bar" age={13} />
  </div>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
