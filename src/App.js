import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([""]);
  const [val1,setVal1] = useState("");

  useEffect(()=>{
    const Items = JSON.parse(localStorage.getItem('Items') || "[]");
    if(Items){
      setItems(Items);
    }
  },[]);
  
  function valChange(e) {
    setVal1(e.target.value);
  }
  function addItem() {
    if(val1 !== ""){
    const finitems = [...items,val1];
    setItems(finitems);
    localStorage.setItem('Items', JSON.stringify(finitems));
    setVal1("");
    }
    else{
      alert("Enter Item Name...");
    }
  }
  function clearAll(){
    localStorage.setItem('Items', []);
    setItems([]);
  }
  function deleteItem(index){
    const values = [...items];
    values.splice(index, 1);
    console.log(values);
    localStorage.setItem('Items', JSON.stringify(values));
    setItems(values);
  }

  return (
    <div>
      <header>
      <nav>
        <div className="navbar">
        <span>Shopping List</span>
        <button className="btn" onClick={clearAll}>Clear All</button>
        </div>
      </nav>
      </header>
      <section className="main">
        <div className="form">
          <input type="text" value={val1} onChange={valChange} placeholder="Enter Item Name" required></input>
          <button onClick={addItem}>Add</button>
        </div>
        <div className="content">
          <ul>
            {items.map((item, index) => {
              return <li key={index}><span>{index+1}.  </span>{item}
              <button onClick={() => deleteItem(index)} className="btn2">Delete</button>
              </li>
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
