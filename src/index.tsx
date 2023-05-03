import * as React from "react";
import { Text, View } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
// import App from './src/App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text>Open up App.js to start working on your app!!!!!!</Text>
      </View>
    </PaperProvider>
  );
}
