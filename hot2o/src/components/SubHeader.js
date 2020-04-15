import React from 'react';
import styled from 'styled-components';
import video from '../assets/820x460.png';

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
        <p>Lorem ipsum dolor sit amet, placerat nam facilisi ante nunc vestibulum, maecenas praesent ipsum phasellus libero mauris, litora dui, nullam ab</p>
      </div>

      <MainContent>
        <Col>
          <img src={video} alt=""/>
        </Col>
        <Col style={{justifyContent: 'space-between', width: '390px', paddingBottom: '48px'}}>
          <ProgressBar/>
          <div>
            <span style={{color: '#009E74'}}>CA$ 238,487</span>
            <small>pleged of CA$ 50,000 goal</small>
          </div>
          <div>
            <span>3,853</span>
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