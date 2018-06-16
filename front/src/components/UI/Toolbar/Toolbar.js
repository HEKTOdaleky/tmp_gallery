import React from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import UserMenu from "./Menus/UserMenu";
import AnonymousMenu from "./Menus/AnonymousMenu";

const Toolbar = ({user, logout,facebook,allPhotos}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/" exact><a>Main</a></LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/" exact>
          <NavItem onClick={allPhotos}>AllPhotos</NavItem>
        </LinkContainer>
      </Nav>

      {user ? <UserMenu user={user} logout={logout} /> : <AnonymousMenu facebook={facebook}/>}
    </Navbar.Collapse>
  </Navbar>
);

export default Toolbar;