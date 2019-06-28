import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: 'UPDATE_NAME',
        name
      })
  };
}
class Avatar extends Component {
  state = {
    photo: 'https://share.getcloudapp.com/Kouz6j2L'
  };

  componentDidMount = async () => {
    const res = await axios.get('https://uinames.com/api/?ext');
    const { name, photo } = res.data;
    this.setState({ photo });
    this.props.updateName(name);
  };

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
