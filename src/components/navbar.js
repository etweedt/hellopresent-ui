import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import * as authActions from "../actions/authActions";

export class navbarContainer extends React.Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    authInfo: PropTypes.object
  };

  state = {
    navbarIsOpen: false
  };

  componentWillMount() {
    const { auth, getUserInfo } = this.props;

    if (auth.isAuthenticated()) {
      getUserInfo();
    }
  }

  navbarClose = () => {
    this.setState({
      navbarIsOpen: false
    });
  };

  navbarToggle = () => {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  };

  render() {
    const { auth, authInfo } = this.props;
    const { navbarIsOpen } = this.state;

    return (
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand tag={Link} to="/">
          Hello, Present!
        </NavbarBrand>
        <NavbarToggler onClick={this.navbarToggle} />
        <Collapse isOpen={navbarIsOpen} navbar>
          {auth.isAuthenticated() ? (
            <Nav navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/drone-plugins"
                  onClick={this.navbarClose}
                >
                  Drone Plugins
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Test</NavLink>
              </NavItem>
            </Nav>
          ) : null}
          <div className="dropdown-divider d-md-none" />
        </Collapse>
        <Collapse isOpen={navbarIsOpen} navbar>
          {auth.isAuthenticated() ? (
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink onClick={auth.logout} className="clickable">
                  Log Out
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active">{authInfo.email}</NavLink>
              </NavItem>
            </Nav>
          ) : (
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink onClick={auth.login} className="clickable">
                  Log In
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    );
  }
}

export const mapStateToProps = state => {
  return {
    authInfo: state.auth
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: () => {
      dispatch(authActions.retrieveAuthProfile());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navbarContainer);
