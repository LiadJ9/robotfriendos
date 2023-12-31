import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) {
      return <h1>Oooops... this wasn't supposed to happen :/</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
