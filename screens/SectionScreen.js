import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'expo';

class SectionScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle('light-contnet', true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle('dark-contnet', true);
  }
  render() {
    const { navigation } = this.props;
    const section = navigation.getParam('section');
    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          opPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ position: 'absolute', top: 20, right: 20 }}
        >
          <CloseView>
            <Icon.Ionicons name="ios-close" size={36} color="#4775f2" style={{ marginTop: -2 }} />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;
const Cover = styled.View`
  height: 375px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  width: 178px;
  position: absolute;
  top: 78px;
  left: 20px;
`;
const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
