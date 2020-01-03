import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Appointment from '../../components/Appointment';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Container>
      <Title>Appointments</Title>

      <List
        data={data}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Appointment data={item} />}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Appointments',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
