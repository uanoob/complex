import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seenIndexes: [],
      values: {},
      index: '',
    };
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues = async () => {
    const values = await axios.get('api/values/current');
    this.setState({ values: values.data });
  };

  fetchIndexes = async () => {
    const seenIndexes = await axios.get('api/values/all');
    this.setState({ seenIndexes: seenIndexes.data });
  };

  renderSeenIndexes = () => this.state.seenIndexes.map(({ number }) => number).join(', ');
  renderValues = () => {
    const { values } = this.state;
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>,
      );
    }
    return entries;
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { index } = this.state;
    await axios.post('/api/values', { index });
    this.setState({ index: '' });
  };

  render() {
    const { index } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input value={index} onChange={event => this.setState({ index: event.target.value })} />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}
        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
