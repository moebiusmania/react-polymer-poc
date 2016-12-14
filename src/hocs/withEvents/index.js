import React from 'react';
import ReactDOM from 'react-dom';

const withEvents = Component => {
  class Events extends React.Component {
    componentDidMount() {
      this.context.register(ReactDOM.findDOMNode(this), this);
    }
    componentWillUnmount() {
      this.context.unregister(ReactDOM.findDOMNode(this));
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  Events.contextTypes = {
    register: React.PropTypes.func,
    unregister: React.PropTypes.func,
  }

  return Events;
}

export default withEvents;
