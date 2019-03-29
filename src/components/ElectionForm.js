

import React from 'react'
import axios from 'axios'
import DefaultForm from './DefaultForm'
import { requestMaker } from '../utils'
import { ElectionInfo } from './index';

class ElectionForm extends React.Component {
  constructor() {
    super()
    this.state = {
      street1: '',
      street2: '',
      city: '',
      state: '',
      country: 'us',
      electionData: []


    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  render() {
    if (this.state.electionData.length < 0) {
      return (

        <DefaultForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          props={this.state} />
      )
    }
    return (
      <div>
        <DefaultForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          props={this.state} />
        <ElectionInfo data={this.state.electionData} />

      </div>

    )
  }
  handleChange(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  async handleSubmit(evt) {
    evt.preventDefault()
    try {
      console.log(requestMaker(this.state))
      const electionData = await axios.get(`http://localhost:8080/elections` + requestMaker(this.state))
      this.setState({ electionData: electionData.data })
    } catch (error) {
      console.log('error', error)
    }


  }
}




export default ElectionForm