import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiMap } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';

const Nav = () => {
  return (
    <Header>
      <Inner>
        <Link to="/">
          <Logo src="https://media.vlpt.us/images/yeonbee/post/098cb537-efa0-4d8f-ad40-3d715a313a6e/logo.jpg" />
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
        <Loginbox to="/loginPage">Login</Loginbox>
      </Inner>
    </Header>
  );
};

export default Nav;

const Header = styled.div`
  background-color: white;
  border-bottom: solid 2px #e8e8e8;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80%;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 120px;
  height: 60px;
  margin: 10px;
`;

const Wherebutton = styled.span`
  margin-left: 20%;
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
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
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
  padding: 10px;
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-thickness: 2px;
  }
`;
