import React, { Component } from 'react';
import Header from './Basic/Header';
import Footer from './Basic/Footer';

/* eslint-disable react/prefer-stateless-function, react/prop-types */

export default class Basic extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <main className="container">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, react/prop-types */
