import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./HeaderStyle.css";

class Header extends React.Component {
  rednerLinks() {
    if (this.props.authenticate) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.rednerLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticate: state.auth.authenticate
  };
};

export default connect(mapStateToProps)(Header);
