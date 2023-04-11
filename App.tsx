import React, { useState } from "react";
import { Switch, SafeAreaView, StatusBar } from "react-native";

import Keyboard from "./src/components/Keyboard";
import { ThemeContext } from "./src/context/ThemeContext";
import { Colors } from "./src/styles/Colors";
import { Styles } from "./src/styles/GlobalStyles";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? Styles.container
            : [Styles.container, { backgroundColor: "black" }]
        }>
        <StatusBar
          barStyle={theme === "light" ? "dark-content" : "light-content"}
          backgroundColor={theme === "light" ? Colors.light : "black"}
        />
        <Switch
          thumbColor={theme === "light" ? Colors.dark : Colors.white}
          trackColor={{ true: "#808080", false: "#606060" }}
          value={theme === "dark"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}
