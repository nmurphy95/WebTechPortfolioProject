import React, { Component } from 'react';
import PropTypes from 'prop-types';

import strings from '../util/strings';

export default class Fetch extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
  };

  state = {
    data: [],
    isLoading: false,
    intervalIsSet: false
  };

  componentDidMount() {
    this.getDataFromDb();
    this.setState({ isLoading: true });
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch(strings.GET_DATA)
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data, isLoading: false }))
  };

  render() {
    return this.props.render(this.state);
  }
}
//To be implemented later
{/* <div>
<Fetch render={({ data, isLoading }) => (
  <div>{this.mapResume}</div>
)} />
</div> */}