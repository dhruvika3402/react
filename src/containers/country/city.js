import React, { Component } from 'react';

export default class city extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cityname: 'surat'
        }
    }

    changecity = () => {
        this.setState({
           cityname: 'gandhinagar' 
        })
    }
    

    render() {
        return (
            <>
            <div>city:{this.state.cityname}</div>
            <button onClick={() => this.changecity()}>change</button>
        </> 
        );
    }
}

// export default city;