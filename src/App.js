import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)

    this.items = [
      {
        id:1,
        content: 'Milk'
      },
      {
        id:2,
        content: 'Bread'
      },
      {
        id:3,
        content: 'Honey'
      },
      {
        id:4,
        content: 'Butter'
      },
    ]
  }
  render(){

    return (
      <div className="wrap">
        <header>
            <div className="header-container">
                <h1>Shopping List</h1>
            </div>
        </header>
        <main>
            <div className="main-container">

              {
                this.items.map(function(item){
                  return (

                    <div className="imput-group">
                      <input type="checkbox" id="task" name="task"/>
                      <label htmlFor="task"> {item.content}</label>
                  </div>
                  )
                })
              }

            </div>
        </main>
    </div>
    )

  }

}

export default App;
