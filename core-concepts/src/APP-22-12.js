import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const names = ['BappaRaz', 'Alomgir', 'Sabnur', 'Bobita', 'Razzak', 'Bobo', 'Musumi'];
    const products = [
        { name: 'Photoshop', price: '$99.99' },
        { name: 'Illustrator', price: '$60.99' },
        { name: 'PDF Reader', price: '$6.99' },
        { name: 'Premier Pro', price: '$129.99' }
    ]

    // const nayokNames = names.map(nayok => nayok);
    // console.log(nayokNames); // same as names array

    const productNames = products.map(product => product.name);
    console.log(productNames);

    return (
        <div className="App">
            <header className="App-header">
                <p>I am React Person</p>

                <Counter></Counter>
                <Users></Users>

                <ul>
                    {
                        names.map(nayok => <li>{nayok}</li>)
                    }
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>

                {
                    products.map(item => <Product product={item}> </Product>)
                }

                <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>

                <Person name={names[0]} naika={names[2]}></Person>
                <Person name={names[1]} naika={names[3]}></Person>


            </header>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(10);
    const handleIncrease = () => {
        // console.log('clicked');
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // console.log('Calling Effect');
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []) // [] is initial state, for stop further

    return (
        <div>
            <h3>Dynamic User {users.length}</h3>
            <ul>
                {
                    console.log(users)
                }
                {
                    users.map(user => <li>{user.email}</li>)
                }
            </ul>
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