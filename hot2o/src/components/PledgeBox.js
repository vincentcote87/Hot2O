import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  border: solid 1px #d0d0d0;
  padding: 20px;
  margin: 20px;
  p {
    margin: 0;
  }
`;

const PledgeBox = (props) => {
  return (
    <Wrapper>
      <h2>Pledge CA$ {props.pledgeAmount} or more</h2>
      <h3>{props.pledgeReward}</h3>
      <span>{props.pledgeDescription}</span>
      <div style={{display: 'flex'}}>
        <div style={{margin: '24px 24px 0 0'}}>
          <span style={{fontSize: '10px'}}>ESTIMATE DELIVERY</span>
          <p>Dec 2020</p>
        </div>
        <div style={{margin: '24px 24px 0 0'}}>
          <span style={{fontSize: '10px'}}>SHIPS TO</span>
          <p>Canada Only</p>
        </div>
      </div>
    </Wrapper>
  )
};

export default PledgeBox;