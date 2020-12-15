import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Header = () => {
    return <h2>Hello, World</h2>
}

const Field = () => {
    const holder = 'Enter here';
    return <input type="text" placeholder={holder} />
}

const Button = () => {
    const text = 'Log-in';
    return <button>{text}</button>
    // const res = () => {
    //     return 'Log-in, please'
    // }
    // const p = <p>Log-in, quick!</p>
    // return <button>{p}</button>
    // return <button>{res()}</button>

    // return <button>{3+4}</button>
}

const App = () => {
    return (
        <div>
            <Header/>
            <Field/>
            <Button/>
        </div>
    )
}




// const elem = React.createElement('h2', null, "Hello, World!!!");

ReactDOM.render(<App/>, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
