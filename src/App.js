import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
    value: ""
  }};
  click =(e)=>{

    this.setState({
       value:   `${this.state.value}${e.target.value}`
    });

  }

  render() {

    return (
      <div className="App">
        <input type = "text" value ={this.state.value}></input>
      <button value ={1} onClick ={this.click}>1</button>
      <button value ={2} onClick ={this.click}>2</button>
      <button value ={3} onClick ={this.click}>3</button>
      </div>
    );

}
}

export default App;
