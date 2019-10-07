import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  background: darkslategray;
  padding: 15px 25px;
  margin: 0px;
  a {
    text-decoration: none;
    color: white;
    padding: 15px 25px;
  }
  a:hover {
    color: gray;
  }
  li:first-of-type {
    margin-right: auto;
  }
`;
const Footer = styled.div`
  background: darkslategray;
  padding: 15px 25px;
  color: white;
  position: absolute;
  bottom: 0px;
  width: 100%;
`
const router = [
  {
    path: "/",
    text: "Home"
  },
  {
    path: "/Bugatti",
    text: "Bugatti"
  },
  {
    path: "/Ferrari",
    text: "Ferrari"
  },
  {
    path: "/Lamborghini",
    text: "Lamborghini"
  }
];
export default ({ children }) => (
  <Fragment>
    <Navbar>
      {router.map(data => (
        <li key={data.path}>
          <Link to={data.path}>{data.text}</Link>
        </li>
      ))}
    </Navbar>
    {children}
    <Footer>power by @komkrit</Footer>
  </Fragment>
);
