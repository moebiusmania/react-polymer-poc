import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { registerReact } from 'reactive-elements';
import App from './App';

class ReactRoot extends Component {
  constructor(props) {
    super(props);
    this.nodes = [];
    this.register = this.register.bind(this);
    this.unregister = this.unregister.bind(this);
  }
  getChildContext() {
    return {
      register: this.register,
      unregister: this.unregister,
    };
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('click', e => {
      e.preventDefault();
      const node = this.nodes.filter(n => n.target === e.target)[0];
      return node && node.instance.props.onClick(e);
    });
  }
  register(target, instance) {
    this.nodes.push({
      target,
      instance,
    });
  }
  unregister(target) {
    this.nodes = this.nodes.filter(n => n.target !== target);
  }
  render() {
    return <App />;
  }
}

ReactRoot.childContextTypes = {
  register: React.PropTypes.func,
  unregister: React.PropTypes.func,
}

registerReact('react-app', ReactRoot);
