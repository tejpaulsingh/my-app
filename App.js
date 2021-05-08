import React, { Component } from 'react'

import Counter from './components/counter.jsx'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Counter/>
         );
    }
}
 

export default App