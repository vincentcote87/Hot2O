import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  border: solid 1px #d0d0d0;
  padding: 20px;
  margin: 20px;
`;

const PledgeBox = (props) => {
  return (
    <Wrapper>
      <h2>Pledge CA$ {props.pledgeAmount} or more</h2>
      <h3>{props.pledgeReward}</h3>
      <span>{props.pledgeDescription}</span>
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '12px'}}>
          <span>ESTIMATE DELIVERY</span>
          <p>Dec 2020</p>
        </div>
        <div style={{marginRight: '12px'}}>
          <span>SHIPS TO</span>
          <p>Canada Only</p>
        </div>
      </div>
    </Wrapper>
  )
};

export default PledgeBox;