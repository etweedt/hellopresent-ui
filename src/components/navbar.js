import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  // NavLink,
  NavbarBrand,
  NavbarToggler,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown
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
              {/* <NavItem>
                <NavLink
                  tag={Link}
                  to="/drone-plugins"
                  onClick={this.navbarClose}
                >
                  Drone Plugins
                </NavLink>
              </NavItem> */}
            </Nav>
          ) : null}
          <div className="dropdown-divider d-md-none" />
          <Nav className="ml-auto" navbar>
            {auth.isAuthenticated() ? (
              <UncontrolledDropdown className="d-none d-md-block" inNavbar nav>
                <DropdownToggle nav>
                  <img
                    src={authInfo.picture}
                    alt="Auth profile user"
                    className="navbar__profile-image"
                    height="26"
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <div className="px-4 py-2">
                    <div className="navbar__email">{authInfo.email}</div>
                    <div className="dropdown-divider" />
                    <Button color="danger" size="sm" onClick={auth.logout}>
                      Log Out
                    </Button>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <NavItem>
                <Button color="primary" onClick={auth.login}>
                  Log In
                </Button>
              </NavItem>
            )}
          </Nav>
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
