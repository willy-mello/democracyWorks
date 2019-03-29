import React, { Component } from 'react';
import { ElectionForm } from './components'

import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {

      data: []
    }


  }


  componentDidMount() {

    console.log('this.state', this.state)
  }




  render() {


    return (
      <div>
        <ElectionForm />
      </div>
    );
  }
}

export default App;
