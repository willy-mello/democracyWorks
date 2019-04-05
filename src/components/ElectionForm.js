

import React from 'react'
import axios from 'axios'
import DefaultForm from './DefaultForm'
import { requestMaker, apiMakerVtwo, googleRequestMaker, listOcd } from '../utils'
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

  }
  render() {
    if (this.state.electionData.length === 0) {
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
        {this.state.electionData.map((elem, idx) => {
          return (
            <div key={idx}>
              <ElectionInfo data={elem} />
            </div>
          )
        })}
        {/* <ElectionInfo data={this.state.electionData} /> */}

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

      const ocd = await axios.get(`http://localhost:8080/ocd` + googleRequestMaker(this.state))
      this.setState({ electionData: ocd.data })

    } catch (error) {
      console.error(error)
    }
  }
}




export default ElectionForm