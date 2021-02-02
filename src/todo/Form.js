import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
      }

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.state.title.trim())
      this.props.onCreate(this.state.title);
    this.setState({title: ''});
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
    <form className='form' onSubmit={this.submitHandler}>
      <input className='form-input' type="text" value={this.state.title} onChange={this.handleChange} />
      <input className='form-btn' type="submit" />
    </form>
  )
  }
  
}

export default Form;