import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-native';
import { Icon } from 'expo';

class Menu extends Component {
  state = {
    top: new Animated.Value(900)
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0
    }).start();
  }
  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover />
        <CloseView>
          <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
        <Content />
      </AnimatedContainer>
    );
  }
}

export default Menu;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  position: absolute;
  background: #fff;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Cover = styled.View`
  height: 142px;
  background: #000;
`;
const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;
