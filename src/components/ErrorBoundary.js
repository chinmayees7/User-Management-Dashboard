// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information or send it to an error reporting service
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    return this.props.children; // Render child components if no error
  }
}

export default ErrorBoundary;
