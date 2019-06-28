import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card';
import { Icon } from 'expo';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Menu />
        <SafeAreaView>
          <ScrollView style={{ height: '100%' }}>
            <TitleBar>
              <Avatar source={require('../assets/avatar.jpg')} />
              <Title>Welome back, </Title>
              <Name>Charles</Name>
              <NotificationIcon
                style={{ position: 'absolute', right: 20, top: 5 }}
              />
            </TitleBar>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
              showsHorizontalScrollIndicator={false}
            >
              {logos.map((logo, index) => (
                <Logo image={logo.image} text={logo.text} key={index} />
              ))}
            </ScrollView>
            <Subtitle>Contiune with Survey</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <Card
                  title={card.title}
                  image={card.image}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                  key={index}
                />
              ))}
            </ScrollView>
            <Subtitle>Popular Course</Subtitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background: #000;
  margin-left: 20px;
  border-radius: 25px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'FrameX'
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Figma'
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'Studio'
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'React'
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'Swift'
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'Sketch'
  }
];

const cards = [
  {
    title: 'React Native for designers',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 5 section',
    logo: require('../assets/logo-react.png')
  },
  {
    title: 'Health advise',
    image: require('../assets/background12.jpg'),
    subtitle: 'menopause',
    caption: '2 of 5 section',
    logo: require('../assets/logo-react.png')
  },
  {
    title: 'React Native for designers',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 5 section',
    logo: require('../assets/logo-react.png')
  },
  {
    title: 'React Native for designers',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 5 section',
    logo: require('../assets/logo-react.png')
  }
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Design an interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool'
  }
];
