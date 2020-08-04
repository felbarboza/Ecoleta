![Ecoleta Banner](/assets/bannernovo.png)

******

<div align="center">

![Repo Size](https://img.shields.io/github/repo-size/felipeab03/Ecoleta.svg) ![License](https://img.shields.io/npm/l/express.svg) ![React version](https://img.shields.io/badge/web-React-blue) ![React Native](https://img.shields.io/badge/mobile-ReactNative-green) ![server](https://img.shields.io/badge/server-NodeJS-purple) ![Type](https://img.shields.io/badge/</>-TypeScript-yellow)

</div>

******

<h2 align="center">
♻️ Ecoleta é um projeto OpenSource desenvolvido num projeto da @RocketSeat na semana Next Level Week(1.0) utilizando TypeScript, Node, React e ReactNative
</h2>

## Vizualização Web:

<div align="center">
  <img src="./assets/web.svg" width="400px"/>
  <img src="./assets/sucesso-web.svg" width="400px"/>
  
</div>

## Vizualização Mobile:

<div align="center">
  <img src="./assets/homeMobile.png" width="200px"/>
  <img src="./assets/detalhesMobile.svg" width="200px"/>
  
</div>


## **:rocket: OBJETIVO**

O projeto tem como finalidade **estabelecer uma conexão** entre **empresas e/ou entidades que coletam resíduos** (orgânicos e inorgânicos) **às pessoas e/ou entidades que necessitam constantemente descartar esses resíduos**. Solucionando um grande problema recorrente que é o **descarte inadequado do lixo**, facilitando o processo de recliclagem e reutilização.

#### **Website** ([React][react] + [TypeScript][typescript])

  - **[React Router Dom][react_router_dom]**
  - **[React Icons][react_icons]**
  - **[Axios][axios]**
  - **[Leaflet][leaflet]**
  - **[React Leaflet][react_leaflet]**
  - **[React Dropzone][react_dropzone]**


#### **Server** ([NodeJS][node] + [TypeScript][typescript])

  - **[Express][express]**
  - **[CORS][cors]**
  - **[KnexJS][knex]**
  - **[SQLite][sqlite3]**
  - **[ts-node][tsnode]**
  - **[dotENV][dotenv]**
  - **[Multer][multer]**
  - **[Celebrate][celebrate]**
  - **[Joi][joi]**
  
  #### **Mobile** ([React Native][react_native] + [TypeScript][typescript])

  - **[Expo][expo]**
  - **[Expo Google Fonts][expo_google_fonts]**
  - **[React Navigation][react_navigation]**
  - **[React Native Maps][react_native_maps]**
  - **[Expo Constants][expo_constants]**
  - **[React Native SVG][react_native_svg]**
  - **[Axios][axios]**
  - **[Expo Location][expo_location]**
  - **[Expo Mail Composer][expo_mail_composer]**

## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta server) 
2. Front End (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][node]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

Depois de realizar o GitClone, deve-se:
 
```sh
# Instalando as dependências do server:
$ cd ./server
$ npm install

# Instalando as dependências do website:
$ cd .web
$ npm install

# Instalando as dependências do mobile:
$ cd ./mobile
$ npm install
```


### 🎲 Rodando o Back End (servidor)

```bash
# Vá para a pasta server
$ cd server

#Instancie o banco de dados
$ knex migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### Utilizando o Website

```sh
# Abrindo o terminal no diretório do website:
$ cd ./web

# Executando o website no modo de desenvolvimento:
$ npm run start
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

### Utilizando o Mobile

Instale o aplicativo <kbd>[Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)</kbd> no seu smartphone.

```sh
# Abrindo o terminal no diretório do mobile:
$ cd ./mobile

# Executando o mobile no modo de desenvolvimento:
$ npm run start
```

Agora, abra o aplicativo do expo e no modo **LAN** faça o scan do QRCode.

> Se tiver algum problema para executar o aplicativo nesse modo, tente desabilitar o firewall da sua máquina.

Se tiver algum problema com as fontes, utilize o comando:
```sh
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```


<h3 align="center">
Feito com ❤️ por <a href="https://www.linkedin.com/in/felbarboza/">Felipe Barboza</a>
<br><br>
<a href="https://rocketseat.com.br">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
</a>
</h3>

<!-- Website Links -->

[rocketseat_site]: https://rocketseat.com.br/

<!-- Techs -->

[react]: https://reactjs.org/

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[leaflet]: https://react-leaflet.js.org/en/

[ibge_api]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1

[ibge_api_ufs]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet

[ibge_api_municipios]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet

[vscode]: https://code.visualstudio.com/

[react_native]: http://www.reactnative.com/

[stackedit]: https://stackedit.io

[vscode_sqlite_extension]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

[markdown_emoji]: https://gist.github.com/rxaviers/7360908

[commitlint]: https://github.com/conventional-changelog/commitlint

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[knex]: http://knexjs.org/

[sqlite3]: https://github.com/mapbox/node-sqlite3

[tsnode]: https://github.com/TypeStrong/ts-node

[feather_icons]: https://feathericons.com/

[insomnia]: https://insomnia.rest/

[react_leaflet]: https://react-leaflet.js.org/

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[react_icons]: https://react-icons.github.io/react-icons/

[axios]: https://github.com/axios/axios

[dotenv]: https://github.com/motdotla/dotenv

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[react_navigation]: https://reactnavigation.org/

[react_native_maps]: https://github.com/react-native-community/react-native-maps

[expo_constants]: https://docs.expo.io/versions/latest/sdk/constants/

[react_native_svg]: https://github.com/react-native-community/react-native-svg

[expo_location]: https://docs.expo.io/versions/latest/sdk/location/

[expo_mail_composer]: https://docs.expo.io/versions/latest/sdk/mail-composer/

[font_roboto]: https://fonts.google.com/specimen/Roboto

[font_ubuntu]: https://fonts.google.com/specimen/Ubuntu

[font_awesome]: https://fontawesome.com/

[multer]: https://github.com/expressjs/multer

[celebrate]: https://github.com/arb/celebrate

[joi]: https://github.com/hapijs/joi

[react_dropzone]: https://github.com/react-dropzone/react-dropzone

[asdf]: https://github.com/asdf-vm/asdf

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
