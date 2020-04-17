import React from 'react';
import styled from 'styled-components';
import cows from '../assets/cows.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #FBFBFA;
  margin-bottom: 48px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  div {
    display: flex;
    flex-direction: column;
  }
  small {
    font-size: 12px;
    color: #888888;
  }
  span {
    font-size: 32px;
    color: #474747;
  }
`;

const Col = styled.div`
  margin: 0 18px;
`;

const Button = styled.div`
  width: 100%;
  color: #ffffff;
  background: #009E74;
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
  &:hover {
    background: #005d3d;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  background: #009E74;
  height: 6px;
`;

const SubHeader = (props) => {
  return (
    <Wrapper>
      <div style={{textAlign: 'center'}}>
        <h2>HOT2O: A smart and simple anti-freeze trough solution.</h2>
        <p>A smart and simple solution to freezing water troughs with Internet of Things enabled features</p>
      </div>

      <MainContent>
        <Col>
          <img src={cows} alt="" width={600}/>
          <a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: '12px', fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: '3px'}} href="https://unsplash.com/@anniespratt?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Annie Spratt"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: '12px', width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Annie Spratt</span></a>
        </Col>
        <Col style={{justifyContent: 'space-between', width: '390px', paddingBottom: '48px'}}>
          <ProgressBar/>
          <div>
            <span style={{color: '#009E74'}}>CA$ 238,480</span>
            <small>pleged of CA$ 50,000 goal</small>
          </div>
          <div>
            <span>1337</span>
            <small>backers</small>
          </div>
          <div>
            <span>17</span>
            <small>days to go</small>
          </div>
          <Button onClick={props.clicked}> Back this project</Button>
          <p>All or nothing. This project will only be funded if it reaches its goal by Fri, May 1 2020 10:01 AM MDT.</p>
        </Col>
      </MainContent>
      <hr/>
    </Wrapper>
  )
};

export default SubHeader;