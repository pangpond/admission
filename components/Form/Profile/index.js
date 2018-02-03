import React, { Component } from 'react'
import RegistrantInfo from './RegistrantInfo'

class Profile extends Component {
  state = {
    fields: {
      username: { value: 'pangpond' },
      password: { value: '' },
      lastname: { value: '' },
    },
  }
  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    })
  }
  render() {
    const { fields } = this.state
    return (
      <div>
        <RegistrantInfo {...fields} onChange={this.handleFormChange} />
        {/* <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre> */}
      </div>
    )
  }
}

export default Profile
