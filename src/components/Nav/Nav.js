import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiMap } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';

const Nav = () => {
  return (
    <Header>
      <Link to="/main">
        <Logo src="./images/logo.jpg" />
      </Link>
      <Wherebutton>
        <BiMap />
        <span>어디로 떠날까요?</span>
      </Wherebutton>
      <Whenbutton>
        <AiOutlineCalendar />
        <span>언제 떠날까요?</span>
      </Whenbutton>

      <Box>
        <Menu to="/infoList">FIND STAY</Menu>
        <Menu to="..">PROMOTION</Menu>
        <Menu to="..">JOURNAL</Menu>
        <Menu to="..">PRE-ORDER</Menu>
      </Box>
      <Loginbox to="/login">Login</Loginbox>
    </Header>
  );
};

export default Nav;

const Header = styled.div`
  background-color: white;
  height: 75px;
  padding: 0 20px;
  border-bottom: solid 2px #e8e8e8;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 120px;
  height: 60px;
  margin: 10px;
`;

const Wherebutton = styled.span`
  margin-left: 600px;
  padding-right: 30px;
  span {
    margin-left: 10px;
  }
`;
const Whenbutton = styled.span`
  padding-left: 30px;
  border-left: 1px solid black;
  span {
    margin-left: 10px;
  }
`;
const Box = styled.a`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-left: 300px;
  text-decoration: none;
`;

const Loginbox = styled(Link)`
  height: 20px;
  margin-left: 30px;
  padding-left: 30px;
  border-left: 2px solid #e8e8e8;
  text-decoration: none;
  color: black;
`;

const Menu = styled(Link)`
  text-decoration: none;
  color: black;
`;
