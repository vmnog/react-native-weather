import React, { createContext, useContext, useCallback, useState } from 'react';

import { Alert } from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import { useErrors } from './useErrors';
interface LocationContextData {
  location: GeolocationResponse;
  loadLocation: () => Promise<void>;
}

const LocationContext = createContext<LocationContextData>(
  {} as LocationContextData
);

export const LocationProvider: React.FC = ({ children }) => {
  const { setErrors } = useErrors();
  const [location, setLocation] = useState<GeolocationResponse>();

  const getLocation = async () => {};

  const loadLocation = useCallback(async () => {
    try {
      await Geolocation.getCurrentPosition(
        (location) => {
          setLocation(location);
        },
        (error) => {
          Alert.alert(
            '😥 Erro ao carregar localização',
            'Por favor verifique suas permissões de localização e reinicie o aplicativo'
          );
          setErrors(true);
          console.log({ error });
        },
        { enableHighAccuracy: false, timeout: 6000, maximumAge: 5000 }
      );
      setErrors(false);
    } catch (err) {
      // Alert.alert(
      //   '😥 Erro ao carregar localização',
      //   'Por favor verifique as permissões do aplicativo'
      // );
      console.log({ error2: err });
      setErrors(true);
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
