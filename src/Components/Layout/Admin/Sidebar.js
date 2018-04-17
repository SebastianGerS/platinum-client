import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AuthNavLink } from "../../../Lib/Common/Views";
import SignOutButton from "../../../Redux/Containers/Sessions/SignOutButton";

/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid,
 prefer-destructuring, react/prop-types */

class Sidebar extends Component {
  render() {
    const path = this.props.match.path;
    const referrer = window.location.pathname;

    return (
      <nav className="sidebar">
        <ul className="nav nav-sidebar">
          <AuthNavLink title="Dashboard" to="/admin/dashboard" path={path} />
          <AuthNavLink title="Users" to="/admin/users" path={path} />
          <AuthNavLink title="Settings" to="/admin/settings" path={path} />
          <SignOutButton referrer={referrer} />
        </ul>
      </nav>
    );
  }
}

export default withRouter(Sidebar);

/* eslint-enable react/prefer-stateless-function, jsx-a11y/anchor-is-valid,
 prefer-destructuring, react/prop-types */
