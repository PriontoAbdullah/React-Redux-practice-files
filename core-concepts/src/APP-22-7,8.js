import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const names = ['Maruf', 'Alomgir', 'Sabnur', 'Bobita'];
    const products = [
        { name: 'Photoshop', price: '$99.99' },
        { name: 'Illustrator', price: '$60.99' },
        { name: 'PDF Reader', price: '$6.99' }
    ]

    return (
        <div className="App">
            <header className="App-header">
                <p>I am React Person</p>

                <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>
                <Product product={products[2]}></Product>

                <Person name={names[0]} naika={names[2]}></Person>
                <Person name={names[1]} naika={names[3]}></Person>


            </header>
        </div>
    );
}

function Product(props) {
    const productStyle = {
        border: '1px solid gray',
        borderRadius: '5px',
        color: 'black',
        backgroundColor: 'lightgray',
        hight: '200px',
        width: '200px',
        float: 'left',
        margin: '10px'
    }

    const { name, price } = props.product; // distracture
    console.log(name, price);

    return (
        <div style={productStyle}>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <button>Buy now</button>
        </div>
    );
}

function Person(props) {
    const personStyle = {
        border: '1px solid white',
        padding: '10px',
        margin: '10px',
        width: '400px'
    }

    return (
        <div style={personStyle}>
            <h1>Nayok:{props.name} </h1>
            <h5>Hero of the {props.naika}</h5>
        </div>
    );
}

export default App;