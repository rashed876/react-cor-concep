import logo from './logo.svg';
import React from'./App.css';
import { useState } from 'react';

function App() {
  const bonDhos = ['abdula', 'omor', 'aboBokor', 'osman', 'rasedin', 'quran', 'hades', 'sonnot']
  //const nayoks = ['rashed','islam' ,'quran', 'ketab', ]
  const milk = [
    {name:'fares', price: '$58.9', email:'fak@gmail.com'},
    {name:'aron', price: '$68.98', email: 'par@gmail.com'},
    {name:'aron', price: '$68.98', email: 'pyt@gmail.com'},
    {name:'arn', price: '$68.98', email: 'pop@gmail.com'},
  ]
  const product = [
    {name:'phone', price: '$58.99' },
    {name:'books', price: '$98.99' },
    {name:'wace', price: '$76.99' },
    {name:'vivo', price: '$65.99' },
    {name:'opp', price: '$765.99' },
  ]
  const bonDhoName =  bonDhos.map( bonDho => bonDhos);
  console.log(bonDhoName);
    //const nayokName = nayoks.map(nayok => nayoks);
    //console.log(nayokName);
     
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit den <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {
            bonDhos.map(bonDho => <li>{bonDho}</li>)
             //nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            milk.map(milk => <li>{milk.email}</li>)
            //product.map(product => <li>{product.name}</li>)
          }
          {
            milk.map(milk => <milk></milk> )
           //product.map(product => <Product product = {product}></Product>)
          }
          
        </ul>
        <Counter></Counter>
        <Product product = {product[0]}></Product>
        <Product product = {product[1]}></Product>
        <Product product = {product [2]} ></Product>
         
        <Person></Person>
      </header>
    </div>
  );
  }
  function Counter(){
    const [count, setCount] = useState(10)
    const handleIncrease = () =>   {
      const newCount = count + 1;
     setCount(newCount + 1);
    }
    return(
      <div>
        <h1>{count}</h1>
        <button onClick = {() => setCount(count - 1)}>Decrease</button>
        <button onClick = {() => setCount(count + 1)}>Increase</button> 
      </div>
    )
    
  }
  function Product(props){
  const productStyle={
    margin:'10px',
    border:'2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'red',
    height:'250px',
    width: '500px',
    float: 'left'

  }
  const {name, price} = props.product;
  console.log(name, price)
    return(
      <div style={productStyle}>
        <h1>Name:{name}</h1>
        <h3>price:{price}</h3>
        <p>hsa</p>
        <button>Bay Now</button>
      </div>
    )
  }
  function Person(props){
    const personStyle = {
      border:'2px solid red',
      margin:'10px',
      padding:'10px',
      width:'500px'
    
    }
    return (
    <div style = {personStyle}>
      {/* kas na korle ? a ta de be */}
      <h1>Name: {props?.name}</h1>
      <h3>Hero of{props.nayka}</h3>
      <p>rashed is a good bay</p>
    </div>
    )
  }


export default App;
