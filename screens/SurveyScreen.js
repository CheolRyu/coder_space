import React, { Component } from 'react';
import styled from 'styled-components';

class SurveyScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text>Survey Screen</Text>
      </Container>
    );
  }
}

export default SurveyScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
