<p align="center"><img src="https://www.digital-media.com.ar/Godeli_logo_2.png" width="200"></p>

## GODELI - DESARROLLO DE APLICACIONES I

GoDeLi frontend para app de gestión de recetas, desarrollodo utilizando las siguientes tecnologías:

- [React Native](https://reactnative.dev/).
- [Expo](https://expo.dev/).
- [TypeScript](https://www.typescriptlang.org/).

## Equipo de desarrollo

- Caro, Julieta Ludmila (1121015)
- Lucia, Pablo Ezequiel (134992)
- Mallea Gil, Facundo (1068422)
- Veliz, Gustavo Alejandro (133772)
- Vera, Samira (1101684)

## Pasos para despliegue de proyecto en modo local
A continuación, se detallan los pasos para el despliegue local del proyecto en Node.js.

- Clonación de repositorio

```
git clone https://github.com/turupablo/Godeli_Final.git

cd Godeli_Final
```

- Instalación de dependencias

```
npm install
```

- Ejecución del API modo local utilizando Expo + Metro

```
npx expo start
```

## Preparación del proyecto para la construcción del APK
Para este proceso usaremos [Expo Application Services](https://expo.dev/eas)

- Login en Expo.dev
```
npx eas-cli login
```
- Configuración del proyecto EAS
```
npx eas-cli build:configure
```
- Generación de credenciales
```
npx eas-cli credentials
```
- Construccion del apk modo debug / release

Esto se define segun los pofiles cerados, para el ejemplo se muestra un construccion en modo development segun lo configurado por defecto en eas.js
```
npx eas-cli build -p ios --profile development

npx eas-cli build -p android --profile development
```