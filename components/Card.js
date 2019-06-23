import React from 'react';
import styled from 'styled-components';

const Card = props => {
  return (
    <Container>
      <Cover>
        <Image source={require('../assets/background2.jpg')} />
        <Title>Styled Component</Title>
      </Cover>
      <Content>
        <Logo source={require('../assets/logo-react.png')} />
        <Caption>React Native</Caption>
        <Subtitle>5 of 12 sections</Subtitle>
      </Content>
    </Container>
  );
};

export default Card;

const Content = styled.View``;
const Logo = styled.Image``;

const Caption = styled.Text``;
const Subtitle = styled.Text``;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
