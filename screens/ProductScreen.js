import React, { Component } from 'react';
import styled from 'styled-components';

class ProductScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text>Product Screen</Text>
      </Container>
    );
  }
}

export default ProductScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
