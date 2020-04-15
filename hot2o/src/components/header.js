import React from 'react';
import styled from 'styled-components';
import logo from '../assets/kickstarter_logo.png';

const Wrapper = styled.div`
  height: 112px;
  width: 100%;
  span {
    margin-right: 12px;
    cursor: pointer;
  }
`;
const Top = styled.div`
  display: flex;
  div:last-child {
    margin-left: auto;
  }
  img {
    width: 180px;
    margin: 12px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <Top>
        <div style={{margin: '12px 0 12px 24px'}}>
          <span onClick={props.clicked}>Explore</span>
          <span onClick={props.clicked}>Start a project</span>
        </div>
        <div>
          <a href={'https://www.kickstarter.com'}><img src={logo} alt="Kickstarter" style={{width: '180px'}}/></a>
        </div>
      </Top>
      <Bottom>
        <span onClick={props.clicked}>Search</span>
        <span onClick={props.clicked}>Log in</span>
      </Bottom>
    </Wrapper>
  )
};

export default Header;