import React from 'react';
import styled from 'styled-components';
import { connect } from

class Avatar extends React.Component {
  state = {
    photo: 'https://cl.ly/55da82beb939/download/avatar-default.jpg'
  };

  componentDidMount() {
    // eslint-disable-next-line no-undef
    fetch('https://uinames.com/api/?ext')
      .then(response => response.json())
      .then(response => {
        this.setState({
          photo: response.photo
        });
      });
  }
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
