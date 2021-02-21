# Weather App

**Aplicativo de clima feito em React Native**

### 🗒️ Requisitos

- [NodeJS](https://nodejs.org)
- [React Native](https://reactnative.dev/)
- [Android Studio](https://developer.android.com/studio) (optional)
- [XCode](https://developer.apple.com/xcode/) (optional)
- [Chave de Acesso da API](http://api.openweathermap.org/) Open Weather Map API
  <br/>

### Mapeamento das funcionalidades

- Usuário pode visualizar sua localização
- Usuário pode visualizar as informações de clima
- Usuário pode requerir atualização das informações

### ⁉️ Como rodar o projeto ?

```bash
# Copie o .env e insira sua API_KEY no arquivo .env
$ cp .env.example .env

# Instale todas as dependências
$ yarn or npm i

# Execute a aplicação no emulador ou dispositivo android
$ yarn android or npm android

# Caso esteja utilizando MacOS, instale as dependências com cocoapods
$ cd ios

$ pod install

$ cd ..

# Execute a aplicação no emulador ou dispositivo IOS. (necessário MacOS para emular)
$ yarn ios or npm ios

# Execute os testes (opcional)
$ yarn test

# Inicie o bundle
$ yarn start or npm start
```

<br/>

### ⚙️ Tecnologias

- React Native
- Typescript
- Styled Components
- React Native Testing Library
