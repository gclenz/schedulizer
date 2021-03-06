import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import DateInput from '../../../components/DateInput';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`/providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  function handleSelecteHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Container>
      <DateInput date={date} onChange={setDate} />

      <HourList
        data={hours}
        keyExtractor={item => item.time}
        renderItem={({ item }) => (
          <Hour
            onPress={() => handleSelecteHour(item.value)}
            enabled={item.available}
          >
            <Title>{item.time}</Title>
          </Hour>
        )}
      />
    </Container>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Select the time',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#202023" />
    </TouchableOpacity>
  ),
});
