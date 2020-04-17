import React from 'react';
import styled from 'styled-components';
import PledgeBox from "./PledgeBox";
import frozenWater from '../assets/FrozenWater.JPG'
import app0 from '../assets/appDraft.jpg';
import app1 from '../assets/dashboard1.png';
import app2 from '../assets/dashboard2.png';
import app3 from '../assets/settings1.png';
import pi from '../assets/pi.png';
import proto1 from '../assets/proto1.jpg';
import proto2 from '../assets/proto2.jpg';


const Wrapper = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const PledgeCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const MainContent = (props) => {
  return (
    <Wrapper>
      <InfoCol>
        <div>
          <h2>Empathize</h2>
          <p>Do you ever feel tired of trying to find new and more efficient ways to keep your water troughs from
            freezing in winter?
            Are big, overly expensive commercial solutions overkill for your needs? The Hot2O smart water trough is the
            solution
            for you. It regulates the temperature of your water and keeps you in the know via smart technologies so that
            you
            can rest easy when the temperature drops. Many farmers like yourselves face two seasons, winter and not
            winter, and for many of you the winter
            part is much longer. This season comes with many different challenges, the Hot2O system can help elevate the
            stress
            of water scarcity for your cattle.</p>
        </div>
        <div>
          <h2>Define</h2>
          <p>During long winter months the temperature can fluctuate wildly. For cattle farmers this comes with many
            different
            challenges that simply don't exist in the summer months. One such problem is water freezing in the troughs
            restricting
            the water available to the cattle. Farmers are always looking for new ways to tackle this problem and often
            need
            to combine multiple solutions.</p>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <h2>Connections</h2>
          <p>For generations farmers have come up with different ways to handle this problem, unfortunately many of
            these solutions
            are either expensive, not reliable, require a lot of physical labour, or a combination of these. Cattle
            farmers need a
            way to solve this problem with minimal impact financially yet know they can count on it. They also need a
            way to know
            if something has gone wrong without having to physically check on the water multiple times a day. Many
            current solutions
            to this problem are home made and unique to each farms, others are very expensive and require a lot of
            upfront cost
            and installation.
          </p>
          <img src={frozenWater} alt="" style={{margin: '0 auto', cursor: 'pointer'}} onClick={props.clicked}/>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <h2>Ideate</h2>
          <p>At the begining of this project, having a smart aspect to monitor and alert the user was not part of the
          scope. It started as the idea of using a solar panel to power a heating element to keep the water from freezing.
          But then I started wondering what happens in summer or on hot days where the water does not need to be heated so
          I added a battery to the system to hold the excess power from the solar panel. But this still hadn't solved
          the problem of hot days, some kind of smart (programmable) controller was needed. Right away I thought of a
          Raspberry pi as they are low cost, offer good connectivity, low power, and highly customizable.</p>
          <img src={pi} alt="" style={{margin: '0 auto', cursor: 'pointer'}} onClick={props.clicked}/>
          <p>After adding the Raspberry pi I figured why stop there, this mini computer opens up so many options!
          I knew the user would need to interact with the raspberry pi but obviously a monitor, mouse, and keyboard
            does not fit really well out on the farm so I decided an app may be more appropriate. The app could talk to
            the Raspberry pi through Bluetooth or Wifi allowing the farmer to set his/her desired temperatures as well
            as stay informed on the system. I then started rapid prototyping app ideas on paper, through this process I
            eventually ended up on the design shown in the next section.
          </p>
          <img src={app0} alt="" width={700} style={{margin: '0 auto'}}/>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <h2>Prototype</h2>
          <p>The idea behind the Hot2O solution is to utilize multiple systems to solve this problem. First the water
            trough is build out of thick walled rubber witch acts as a insulator keeping the warm in. The trough also
            comes with a high
            efficiency heating element which is powered by the solar panel. Any excess power generated is stored inside
            the 12 volt battery to be used at night or on cloudy days.
          </p>
          <div style={{margin: '0 auto'}}>
            <img src={proto1} alt="" width={350} style={{margin: '0 12px'}}/>
            <img src={proto2} alt="" width={425} style={{margin: '0 12px'}}/>
          </div>
          <p>The entire system is maintained by our open
            source Hot2O software which runs on a Raspberry pi. Depending on the setup at the farm, the Raspberry pi can
            utilize Bluetooth or Wifi technology to connect to the users smart device. The Hot2O app is where the user
            can set desired temperatures, monitor the system and get alerts if the water gets too cold.
          </p>
          <div style={{margin: '0 auto'}}>
            <img src={app1} alt="" width={250} height={500} style={{margin: '0 12px'}}/>
            <img src={app2} alt="" width={250} height={500} style={{margin: '0 12px'}}/>
            <img src={app3} alt="" width={250} height={500} style={{margin: '0 12px'}}/>
          </div>
        </div>
      </InfoCol>
      <PledgeCol>
        <PledgeBox pledgeAmount={'10'} pledgeReward={'Cows will appreciate you'}
                   pledgeDescription={'You get the satisfaction of knowing cows will think of you when their water is not frozen!'}/>
        <PledgeBox pledgeAmount={'350'} pledgeReward={'You get your own Hot2O'}
                   pledgeDescription={'Once ready to ship in December we will send you your very own Hot2O system to use'}/>
        <PledgeBox pledgeAmount={'1500'} pledgeReward={'You get five Hot2O'}
                   pledgeDescription={'Once ready to ship in December we will send you five Hot2O system to use or give to friends'}/>
        <PledgeBox pledgeAmount={'20,000'} pledgeReward={'You get your own Hot2O'}
                   pledgeDescription={'As well as getting your own Hot2O system, our intern Ben has agreed to name his first born child after you, you rock!!'}/>

      </PledgeCol>
    </Wrapper>
  )
};

export default MainContent;