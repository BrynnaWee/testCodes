import React, { Component } from 'react';

class Counter extends Component {

     state = { 
         counter : 0 
        }

    
    handleIncrease = () => {
        let counter = (this.state.counter >=10) ? 10 : this.state.counter+1;
        this.setState({...this.state, counter});
    } 

    handleDecrease = () => {
        let counter = (this.state.counter <=0)? 0 : this.state.counter-1;
        this.setState({...this.state, counter})
    }




    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        );
    }
}

export default Counter;