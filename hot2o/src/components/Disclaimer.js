import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 99;
  background: rgba(82,81,74,0.5);
  justify-content: center;
  div {
    width: 250px;
    background: #ffffff;
    margin: 0 auto;
    padding: 50px;
    border-radius: 4px;
  }
`;

const Disclaimer = (props) => {
  return (
    <Wrapper>
      <div>
        <h1>DISCLAIMER</h1>
        <p>This is a fake website used for a school project only. The product described is fictional and this site is not at all affiliated with Kickstarter</p>
        <button onClick={props.clicked}>Close</button>
      </div>

    </Wrapper>
  )
};

export default Disclaimer;