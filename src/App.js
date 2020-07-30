import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      items : [
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
      ],
      newItemInput:''
    }

  }
  handleNewItemInputChange = (e)=>{

    this.setState({
      newItemInput:e.target.value
    })
  
  }
  handleNewButtonClick = (e)=>{
    e.preventDefault()
    
    var newItem = {
      id:Date.now(),
      content: this.state.newItemInput
    }

    var newList = [newItem, ...this.state.items]

    this.setState({
      items:newList,
      newItemInput:''
    })
  }


  handleItemDelete = (e)=>{
    console.log(e.target)
    var itemToDelete = parseInt(e.target.id)
    var items = this.state.items

    var filteredItems = items.filter((item)=>{
      return item.id != itemToDelete
    })

    this.setState({items:filteredItems})
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
                this.state.items.map((item) => {
                  return (

                    <div className="imput-group" key={item.id}>
                      <input type="checkbox" id="task" name="task"/>
                      <label htmlFor="task"> {item.content}</label>
                      <button id={item.id} className="delete-btn" onClick={this.handleItemDelete}><i className="fas fa-trash-alt"></i></button>
                    </div>
                  )
                })
              }

            </div>
            <div className="input-container">
            <form>
              <div className="form-group">
                <input type="text" className="new-item-input" placeholder="New Note" value={this.state.newItemInput} onChange={this.handleNewItemInputChange}></input>
              </div>
              <button type="submit" className="btn" onClick={this.handleNewButtonClick}><i className="fas fa-plus"></i></button>
            </form>
            </div>
        </main>
    </div>
    )

  }

}

export default App;
