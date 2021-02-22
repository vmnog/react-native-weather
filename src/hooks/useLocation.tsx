import React, { createContext, useContext, useCallback, useState } from 'react';

import { Alert } from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
interface LocationContextData {
  location: GeolocationResponse;
  loadLocation: () => Promise<void>;
}

const LocationContext = createContext<LocationContextData>(
  {} as LocationContextData
);

export const LocationProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState<GeolocationResponse>();

  const loadLocation = useCallback(async () => {
    try {
      await Geolocation.getCurrentPosition((location) => setLocation(location));
    } catch (err) {
      Alert.alert(
        '😥 Erro ao carregar localização',
        'Por favor verifique as permissões do aplicativo'
      );
    }
  }, [Geolocation, setLocation]);

  return (
    <LocationContext.Provider
      value={{
        location: location as GeolocationResponse,
        loadLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextData => {
  return useContext(LocationContext);
};
