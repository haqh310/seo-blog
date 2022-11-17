import React, { useEffect, useState } from "react";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Router from "next/router";
import Link from "next/link";
import ".././node_modules/nprogress/nprogress.css"
import Search from "./blog/Search";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState();
  const btnStyle = {'cursor': 'pointer'}

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setAuth(isAuth());
  }, []);
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md" className="px-0">
        <NavLink href="/" className="font-weight-bold text-dark">
          {APP_NAME}
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>
              <NavItem>
                <NavLink href="/blogs">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </React.Fragment>

            {!auth ? (
              <NavItem>
                <NavLink href="/signin">Signin</NavLink>
              </NavItem>
            ) : auth.role === 0 ? (
              <NavItem>
                <NavLink href="/user">{`${auth.name}'s Dashboard`}</NavLink>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink href="/admin">{`${auth.name}'s Dashboard`}</NavLink>
              </NavItem>
            )}

            {auth && (
              <NavItem>
                <NavLink
                style={btnStyle}
                  onClick={() => signout(() => Router.replace("/signin"))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}

            <NavItem>
              <Link
                href={{ pathname: "/user/crud/blog" }}
                className="btn btn-primary text-light"
              >
                Write a blog
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Search/>
    </React.Fragment>
  );
};

export default Header;
