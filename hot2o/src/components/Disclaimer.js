import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99;
  background: rgba(82,81,74,0.5);
  justify-content: center;
  div {
    width: 550px;
    background: #ffffff;
    margin: 0 auto;
    padding: 50px;
    border-radius: 4px;
  }
  button {
    color: #ffffff;
    background: #009E74;
    text-align: center;
    padding: 20px 0;
    width: 200px;
    border: none;
    cursor: pointer;
    &:hover {
      background: #005d3d;
    }
  }
  h5 {
    margin: 0;
  }
`;

const Disclaimer = (props) => {
  return (
    <Wrapper>
      <div>
        <h1>DISCLAIMER</h1>
        <p>This is a fake website used for a school project only. The product described is fictional and this site is
          not at all affiliated with Kickstarter. To check out awesome ideas and help real people get their ideas off
        the ground please to to the real <a href='https://www.kickstarter.com' target='_blank'>Kickstarter</a> website.</p>
        <span>References</span>
        <ul>
          <li>
            <h5>First Cow Photo</h5>
            <span>Spratt, A (NA) unsplash.com. Retrived from cnbc: <a href={'https://unsplash.com/photos/4mQOcabC5AA'}>unsplash.com/photos/4mQOcabC5AA</a></span>
            </li>
          <li>
            <h5>Frozen Water Cow Photo</h5>
            <span>Hydrogen Appliances (NA) hydrogenapplicances.com. Retrived from cnbc: <a href={'https://www.hydrogenappliances.com/stocktankheater.html'}>www.hydrogenappliances.com/stocktankheater.html</a></span>
          </li>
          <li>
            <h5>First Cow photo</h5>
            <span>Raspberry Pi (NA) raspberrypi.org. Retrived from cnbc: <a href={'https://www.raspberrypi.org/products/raspberry-pi-4-model-b/'}>www.raspberrypi.org/products/raspberry-pi-4-model-b/</a></span>
          </li>
        </ul>
        <button onClick={props.clicked}>Close</button>
      </div>

    </Wrapper>
  )
};

export default Disclaimer;