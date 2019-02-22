import React, { PureComponent } from 'react'
import makeguess from '../actions/makeguess'
import { connect } from 'react-redux'

class Guess extends PureComponent {

  onChange(event){
    this.props.makeguess(event.target.value)
    event.target.value = ""
  }

  render() {
    return(
      <div>
        <form>
        <label>Start guessing! </label>
          <input onChange = {this.onChange.bind(this)}/>
        </form>
      </div>
    )
  }
}

export default connect(null, {makeguess})(Guess)
