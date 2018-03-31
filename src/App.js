import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
    value: ""
  }};
  click =(e)=>{
this.setState((state) => ({ value: state.value + 1}));
this.setState({
       value:   `${this.state.value}${e.target.value}`

    });
  }
  vclick =(e)=>{
    this.setState({value: eval(this.state.value)});
  }
  render() {

    return (
      <div className="App">
        <input type = "text" value ={this.state.value} disabled></input>
        <p>
      <button value ={1} onClick ={this.click}>1</button>
      <button value ={3} onClick ={this.click}>3</button>
      <button value ={4} onClick ={this.click}>4</button>
      </p>
      <button value ={5} onClick ={this.click}>5</button>
      <button value ={6} onClick ={this.click}>6</button>
      <button value ={7} onClick ={this.click}>7</button>
      <p>
      <button value ={8} onClick ={this.click}>8</button>
      <button value ={9} onClick ={this.click}>9</button>
      <button value ={0} onClick ={this.click}>0</button>
      </p>

      <button value ="+" onClick ={this.click}>+</button>
      <button value ="=" onClick ={this.vclick}>=</button>

      </div>
    );

}
}

export default App;
