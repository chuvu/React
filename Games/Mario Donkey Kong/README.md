<p align="center">
  <img src="https://raw.githubusercontent.com/bberak/react-native-donkey-kong/master/assets/icons/kong.png" alt="React Native Donkey Kong" height="120" />
</p>

# react-native-donkey-kong &middot; [![npm version](https://badge.fury.io/js/react-native-donkey-kong.svg)](https://badge.fury.io/js/react-native-donkey-kong) [![mit license](https://img.shields.io/badge/license-MIT-50CB22.svg)](https://opensource.org/licenses/MIT)

Donkey Kong remake using [react-native-game-engine](https://github.com/bberak/react-native-game-engine) 🙉 for both iOS and Android

<p align="center">
  <img src="https://raw.githubusercontent.com/bberak/react-native-donkey-kong/master/assets/gifs/1.gif" alt="Donkey Kong Preview 1" height="450" />
  <img src="https://raw.githubusercontent.com/bberak/react-native-donkey-kong/master/assets/gifs/2.gif" alt="Donkey Kong Preview 2" height="450" />
  <img src="https://raw.githubusercontent.com/bberak/react-native-donkey-kong/master/assets/gifs/3.gif" alt="Donkey Kong Preview 3" height="450" />
</p>

## Running the Game - React Native

```
git clone https://github.com/bberak/react-native-donkey-kong.git

cd react-native-donkey-kong

npm install

cd rn

npm install

react-native run-ios
```

## Running the Game - Expo

```
git clone https://github.com/bberak/react-native-donkey-kong.git

cd react-native-donkey-kong

npm install

cd expo

npm install -g expo-cli

npm install

npm start

//-- Then follow the prompts
```

## Importing DonkeyKong Into Your Own App

```
npm install --save react-native-donkey-kong
```

```javascript
import React, { Component } from "react";
import DonkeyKong from "react-native-donkey-kong";

export default class App extends Component<{}> {
  render() {
    return (
      <DonkeyKong />
    );
  }
}
```

## Known Issues

- The jumps are implemented poorly and seem quite dodgey on tablet-size devices.
- The GIF support in Android is not as advanced iOS - so some animation transitions look faded. That said, I haven't tested the game on a physical Android device.
- The font I chose seems a bit hard to read on iOS - the letter spacing seems a bit off.

## Made With 🍌🍌🍌

- [React Native Game Engine](https://github.com/bberak/react-native-game-engine)
- [Matter JS](http://brm.io/matter-js)
- [Aseprite](https://www.aseprite.org)
- [Spriters Resource](https://www.spriters-resource.com). Particularly, thanks to [Zeon](mailto:metalichotdog@hotmail.com) for his DK spritesheets.

## Copyright Notice

All content, artwork, sounds, characters and graphics are the property of Nintendo of America Inc, its affiliates and/or subsidiaries.

## Get in Touch

We are Neap - a development and design team in Sydney. We love building stuff and meeting new people, so get in touch with us at [https://neap.co](https://neap.co).

Some of our projects:

#### React & React Native
* [__*react-native-game-engine*__](https://github.com/bberak/react-native-game-engine): A lightweight game engine for react native.
* [__*react-native-game-engine-handbook*__](https://github.com/bberak/react-native-game-engine-handbook): A React Native app showcasing some examples using react-native-game-engine.

#### Web Framework & Deployment Tools
* [__*webfunc*__](https://github.com/nicolasdao/webfunc): Write code for serverless similar to Express once, deploy everywhere. 
* [__*now-flow*__](https://github.com/nicolasdao/now-flow): Automate your Zeit Now Deployments.

#### GraphQL
* [__*graphql-serverless*__](https://github.com/nicolasdao/graphql-serverless): GraphQL (incl. a GraphiQL interface) middleware for [webfunc](https://github.com/nicolasdao/webfunc).
* [__*schemaglue*__](https://github.com/nicolasdao/schemaglue): Naturally breaks down your monolithic graphql schema into bits and pieces and then glue them back together.
* [__*graphql-s2s*__](https://github.com/nicolasdao/graphql-s2s): Add GraphQL Schema support for type inheritance, generic typing, metadata decoration. Transpile the enriched GraphQL string schema into the standard string schema understood by graphql.js and the Apollo server client.

#### Tools
* [__*aws-cloudwatch-logger*__](https://github.com/nicolasdao/aws-cloudwatch-logger): Promise based logger for AWS CloudWatch LogStream.

## License

MIT License

Copyright (c) 2017 Boris Berak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="center">
  <a href="https://neap.co/">
    <img src="https://neap.co/img/neap_black_small_logo.png" alt="Neap Pty Ltd" title="Neap" height="50"/>
  </a>
</p>
