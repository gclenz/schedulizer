import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('/providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Container>
      <ProvidersList
        data={providers}
        keyExtractor={provider => String(provider.id)}
        renderItem={({ item: provider }) => (
          <Provider
            onPress={() => navigation.navigate('SelectDateTime', { provider })}
          >
            <Avatar
              source={{
                uri: provider.avatar
                  ? provider.avatar.url
                  : `https://api.adorable.io/avatars/50/${provider.name}.png`,
              }}
            />
            <Name>{provider.name}</Name>
          </Provider>
        )}
      />
    </Container>
  );
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Select the provider',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#202023" />
    </TouchableOpacity>
  ),
});
