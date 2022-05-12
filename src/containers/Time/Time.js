import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
      this.setState({
        time: new Date()
      })  
      
    }

    componentDidMount =() => {
        setInterval(()=> this.tick(),1000);
    }
    componentDidUpdate = (prevprops,prevState) => {
        if (prevState.time !== this.state.time){
            console.log("componentDidUpdate");
        }
    }
    componentWillUnmount = () => {
    
        clearInterval(this.timeid);
    }
    
    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Time;